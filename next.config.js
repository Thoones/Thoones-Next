module.exports = {
  i18n: {
    locales: ['en'],
    defaultLocale: "en",
  },
  webpack: (config, { isServer }) => {
    // Generated data-source modules (utils/data-sources/*.js) import Node-only
    // database drivers like 'pg' at module top level, but those imports are only
    // ever USED in server data-fetching (getStaticProps / getServerSideProps /
    // API routes). Two layers of defense:
    //
    //   - Client build: alias 'pg' (and variants) to false so webpack resolves
    //     them to an empty module and never walks into pg/lib/*. The
    //     resolve.fallback stubs are a safety net for any other stray Node-core
    //     import reached from a server-only module.
    //
    //   - Server build: mark 'pg' (and variants) as commonjs externals so
    //     webpack does NOT bundle them — it emits a runtime require('pg') that
    //     Node resolves from node_modules at execution time. Without this,
    //     webpack tries to bundle pg/lib/utils.js and fails to resolve the
    //     'util/types' Node-core subpath, which broke the Vercel production
    //     build.
    if (!isServer) {
      config.resolve.alias = Object.assign({}, config.resolve.alias, {
        pg: false,
        'pg-native': false,
        'pg-cloudflare': false,
      })
      config.resolve.fallback = Object.assign({}, config.resolve.fallback, {
        fs: false,
        net: false,
        tls: false,
        dns: false,
        child_process: false,
        'pg-native': false,
      })
    } else {
      const serverExternals = ['pg', 'pg-native', 'pg-cloudflare']
      const existing = Array.isArray(config.externals)
        ? config.externals
        : config.externals
        ? [config.externals]
        : []
      config.externals = [
        ...existing,
        ({ request }, callback) => {
          if (request && serverExternals.indexOf(request) !== -1) {
            return callback(null, 'commonjs ' + request)
          }
          callback()
        },
      ]
    }
    return config
  }
}