import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import ProductDiscovery1 from '../components/product-discovery1'
import TrustBeforeCommerce1 from '../components/trust-before-commerce1'
import CommerceJourney from '../components/commerce-journey'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container1">
        <Head>
          <title>Thoones</title>
          <meta property="og:title" content="Thoones" />
          <link
            rel="canonical"
            href="https://inconsequential-favorable-mandrill-rxlynp.teleporthq.site/"
          />
          <meta
            property="og:url"
            content="https://inconsequential-favorable-mandrill-rxlynp.teleporthq.site/"
          />
        </Head>
        <Navigation></Navigation>
        <section className="hero-section">
          <div className="hero-media-wrapper">
            <video
              src="https://videos.pexels.com/video-files/7677808/7677808-hd_720_1280_25fps.mp4"
              loop
              muted
              poster="https://images.pexels.com/videos/7677808/pictures/preview-0.jpg"
              autoPlay="true"
              playsInline
              className="hero-video-bg"
            ></video>
            <div className="hero-overlay"></div>
          </div>
          <div className="hero-content-container">
            <div className="hero-text-block">
              <h1 className="home-hero-title hero-title">
                <span>People.</span>
                <br></br>
                <span>Things.</span>
                <br></br>
                <span>Together.</span>
              </h1>
              <p className="hero-subtitle">
                Thoones brings people, discovery, trust and commerce together in
                one place.
              </p>
              <div className="hero-actions">
                <a href="/download" className="home-link1">
                  <div className="btn-primary btn">
                    <span>Download Thoones</span>
                  </div>
                </a>
                <a href="/about" className="home-link2">
                  <div className="btn btn-outline">
                    <span>Explore Thoones</span>
                  </div>
                </a>
              </div>
              <div className="hero-platform-badges">
                <span className="platform-label">Available on:</span>
                <div className="platform-icons">
                  <span className="badge">iPhone</span>
                  <span className="badge">Android</span>
                  <span className="badge">Desktop</span>
                </div>
              </div>
            </div>
            <div className="hero-visual-block">
              <div className="iphone-mockup-wrapper">
                <img
                  alt="Thoones iPhone App"
                  src="https://images.pexels.com/photos/10578919/pexels-photo-10578919.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=1500"
                  className="iphone-frame"
                />
                <div className="home-thq-floating-ui-card-elm1 card-profile floating-ui-card">
                  <div className="ui-avatar"></div>
                  <div className="ui-lines">
                    <div className="ui-line-sm"></div>
                    <div className="ui-line-xs"></div>
                  </div>
                </div>
                <div className="home-thq-floating-ui-card-elm2 card-trust floating-ui-card">
                  <div className="trust-score">
                    <span>87</span>
                  </div>
                  <div className="trust-label">
                    <span>Trusted</span>
                  </div>
                </div>
                <div className="home-thq-floating-ui-card-elm3 floating-ui-card card-product">
                  <div className="product-thumb"></div>
                  <div className="product-price">
                    <span>$120</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="positioning-section">
          <div className="positioning-container">
            <div data-reveal="true" className="statement-item">
              <h2 className="section-title">More than a social network.</h2>
            </div>
            <div data-reveal="true" className="statement-item">
              <h2 className="section-title">More than a marketplace.</h2>
            </div>
            <div data-reveal="true" className="statement-item">
              <h2 className="section-title">Something in between.</h2>
            </div>
          </div>
        </section>
        <section className="loop-section">
          <div className="loop-header">
            <h2 className="section-title">It starts with people.</h2>
          </div>
          <div className="loop-timeline-wrapper">
            <div className="loop-timeline">
              <div className="timeline-step">
                <div className="step-card">
                  <div className="step-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                        <circle r="4" cx="12" cy="7"></circle>
                      </g>
                    </svg>
                  </div>
                  <span className="step-label">PERSON</span>
                </div>
                <div className="step-connector"></div>
              </div>
              <div className="timeline-step">
                <div className="step-card">
                  <div className="step-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle r="5" cx="12" cy="8"></circle>
                        <path d="M20 21a8 8 0 0 0-16 0"></path>
                      </g>
                    </svg>
                  </div>
                  <span className="step-label">PROFILE</span>
                </div>
                <div className="step-connector"></div>
              </div>
              <div className="timeline-step">
                <div className="step-card">
                  <div className="step-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <span className="step-label">CONNECT</span>
                </div>
                <div className="step-connector"></div>
              </div>
              <div className="timeline-step">
                <div className="step-card">
                  <div className="step-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="m12 16l4-4l-4-4m-4 4h8"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <circle r="10" cx="12" cy="12"></circle>
                    </svg>
                  </div>
                  <span className="step-label">DISCOVER</span>
                </div>
                <div className="step-connector"></div>
              </div>
              <div className="timeline-step">
                <div className="step-card">
                  <div className="step-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                        <path d="m9 12l2 2l4-4"></path>
                      </g>
                    </svg>
                  </div>
                  <span className="step-label">TRUST</span>
                </div>
                <div className="step-connector"></div>
              </div>
              <div className="timeline-step">
                <div className="step-card">
                  <div className="step-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 10a4 4 0 0 1-8 0M3.103 6.034h17.794"></path>
                        <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                      </g>
                    </svg>
                  </div>
                  <span className="step-label">SHOP</span>
                </div>
                <div className="step-connector"></div>
              </div>
              <div className="timeline-step">
                <div className="highlight step-card">
                  <div className="step-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M5 12h14m-7-7l7 7l-7 7"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <span className="step-label">ORDER</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="profile-showcase">
          <div className="showcase-container">
            <div className="showcase-visual">
              <div className="profile-mockup-card">
                <div className="profile-header">
                  <div className="profile-avatar-large"></div>
                  <div className="profile-meta">
                    <h3 className="profile-name">Alex Rivera</h3>
                    <span className="profile-handle">@arivera</span>
                  </div>
                  <div className="profile-trust-badge">
                    <svg
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M8.5 1.709a.75.75 0 0 0-1 0a8.96 8.96 0 0 1-4.84 2.217a.75.75 0 0 0-.654.72Q2 4.821 2 5c0 4.052 2.295 7.567 5.653 9.317a.75.75 0 0 0 .694 0a10.5 10.5 0 0 0 5.647-9.672a.75.75 0 0 0-.654-.719A8.96 8.96 0 0 1 8.5 1.71m2.34 5.504a.75.75 0 0 0-1.18-.926L7.394 9.17l-1.156-.99a.75.75 0 1 0-.976 1.138l1.75 1.5a.75.75 0 0 0 1.078-.106z"
                        fill="currentColor"
                        clipRule="evenodd"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                    <span>87</span>
                  </div>
                </div>
                <p className="profile-bio">
                  Curating the best in minimalist design and sustainable tech.
                  🌿
                </p>
                <div className="profile-stats">
                  <div className="stat">
                    <strong>1.2k</strong>
                    <span>Followers</span>
                  </div>
                  <div className="stat">
                    <strong>450</strong>
                    <span>Following</span>
                  </div>
                  <div className="stat">
                    <strong>12</strong>
                    <span>Stores</span>
                  </div>
                </div>
                <div className="profile-grid-preview">
                  <div className="grid-item"></div>
                  <div className="grid-item"></div>
                  <div className="grid-item"></div>
                </div>
              </div>
            </div>
            <div className="showcase-content">
              <h2 className="section-title">Be yourself.</h2>
              <p className="section-content">
                Your Thoones profile is your place to connect, share and
                discover. A digital identity built on authenticity and real
                connections.
              </p>
              <a href="/about">
                <div className="btn-link btn">
                  <span>Explore Profiles</span>
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M5 12h14m-7-7l7 7l-7 7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </section>
        <section className="social-discovery">
          <div className="section-header-centered">
            <h2 className="section-title">Find your people.</h2>
            <p className="section-subtitle">
              Share what matters. Discover people and things you care about.
            </p>
          </div>
          <div className="discovery-grid">
            <div className="discovery-card">
              <div className="card-ui-header">
                <div className="mini-avatar"></div>
                <span className="mini-name">DesignInspiration</span>
              </div>
              <div className="card-ui-content"></div>
              <div className="card-ui-footer">
                <svg
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                  height="18"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <span>12 Comments</span>
              </div>
            </div>
            <div className="discovery-card">
              <div className="card-ui-header">
                <div className="mini-avatar"></div>
                <span className="mini-name">TechGeek</span>
              </div>
              <div className="card-ui-content alt"></div>
              <div className="card-ui-footer">
                <svg
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                  height="18"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <span>8 Reactions</span>
              </div>
            </div>
            <div className="discovery-card">
              <div className="card-ui-header">
                <div className="mini-avatar"></div>
                <span className="mini-name">MarketDaily</span>
              </div>
              <div className="card-ui-content"></div>
              <div className="card-ui-footer">
                <svg
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                  height="18"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <span>Join Discussion</span>
              </div>
            </div>
          </div>
        </section>
        <section className="transformation-section">
          <div className="transformation-container">
            <div className="transformation-content">
              <h2 className="section-title">
                Your profile can become a business.
              </h2>
              <p className="section-content">
                You don&apos;t have to be a seller to use Thoones. But when
                you&apos;re ready, your presence is already there. Transform
                your personal feed into a thriving storefront with one tap.
              </p>
              <div className="transformation-features">
                <div className="feat-item">
                  <div className="feat-dot"></div>
                  <span>Seamless Inventory Sync</span>
                </div>
                <div className="feat-item">
                  <div className="feat-dot"></div>
                  <span>Direct Community Sales</span>
                </div>
                <div className="feat-item">
                  <div className="feat-dot"></div>
                  <span>Integrated Order Flow</span>
                </div>
              </div>
            </div>
            <div className="transformation-visual">
              <div className="transform-stage-wrapper">
                <div
                  id="profileStage"
                  className="active profile-stage stage-card"
                >
                  <div className="stage-label">
                    <span>Personal Profile</span>
                  </div>
                  <div className="mock-ui-elements">
                    <div className="mock-post"></div>
                    <div className="mock-post"></div>
                  </div>
                </div>
                <div className="transform-arrow">
                  <svg
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M5 12h14m-7-7l7 7l-7 7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <div id="storeStage" className="store-stage stage-card">
                  <div className="stage-label">
                    <span>Store Profile</span>
                  </div>
                  <div className="mock-ui-elements">
                    <div className="mock-product"></div>
                    <div className="mock-product"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ProductDiscovery1></ProductDiscovery1>
        <TrustBeforeCommerce1></TrustBeforeCommerce1>
        <section className="trust-section">
          <div className="trust-container">
            <div className="trust-visual">
              <div className="trust-dashboard-card">
                <div className="trust-card-header">
                  <h3 className="trust-card-title">Trust Score</h3>
                  <div className="trust-status-badge">
                    <span>Trusted</span>
                  </div>
                </div>
                <div className="trust-score-display">
                  <span className="score-number">87</span>
                  <div className="score-ring"></div>
                </div>
                <div className="trust-signals">
                  <div className="signal-row">
                    <span className="signal-name">Real Interactions</span>
                    <div className="signal-bar">
                      <div className="home-thq-bar-fill-elm1 bar-fill"></div>
                    </div>
                  </div>
                  <div className="signal-row">
                    <span className="signal-name">Community Feedback</span>
                    <div className="signal-bar">
                      <div className="home-thq-bar-fill-elm2 bar-fill"></div>
                    </div>
                  </div>
                  <div className="signal-row">
                    <span className="signal-name">Transaction History</span>
                    <div className="signal-bar">
                      <div className="home-thq-bar-fill-elm3 bar-fill"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="trust-content">
              <h2 className="section-title">
                Know who you&apos;re dealing with.
              </h2>
              <p className="section-content">
                Trust should come from real interactions—not popularity
                contests. Our reputation layer analyzes actual engagement and
                transaction signals to give you a clear picture of every user.
              </p>
              <a href="/trust">
                <div className="btn-primary btn">
                  <span>Explore Trust</span>
                </div>
              </a>
            </div>
          </div>
        </section>
        <CommerceJourney></CommerceJourney>
        <section className="download-section">
          <div className="download-container">
            <div className="download-header">
              <h2 className="section-title">Thoones is ready when you are.</h2>
              <p className="section-subtitle">One world. Every screen.</p>
            </div>
            <div className="download-grid">
              <div className="download-card">
                <div className="device-icon">
                  <img
                    alt="iPhone"
                    src="https://images.pexels.com/photos/12876445/pexels-photo-12876445.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=200"
                    className="mini-mock"
                  />
                </div>
                <h3>iPhone</h3>
                <p>Optimized for iOS with native gestures and haptics.</p>
                <a href="#">
                  <div className="btn btn-secondary btn-sm">
                    <span>Download for iPhone</span>
                  </div>
                </a>
              </div>
              <div className="download-card">
                <div className="device-icon">
                  <img
                    alt="Android"
                    src="https://images.pexels.com/photos/6373187/pexels-photo-6373187.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=200"
                    className="mini-mock"
                  />
                </div>
                <h3>Android</h3>
                <p>Seamless performance across all Android devices.</p>
                <a href="#">
                  <div className="btn btn-secondary btn-sm">
                    <span>Get for Android</span>
                  </div>
                </a>
              </div>
              <div className="download-card">
                <div className="device-icon">
                  <img
                    alt="Desktop"
                    src="https://images.pexels.com/photos/5054358/pexels-photo-5054358.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=200"
                    className="mini-mock"
                  />
                </div>
                <h3>Desktop</h3>
                <p>Full-screen discovery and business management.</p>
                <a href="#">
                  <div className="btn btn-secondary btn-sm">
                    <span>Get for Desktop</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="final-cta-block">
              <h2 className="home-hero-title hero-title">
                People. Things. Together.
              </h2>
              <a href="/download">
                <div className="btn-xl btn-primary btn">
                  <span>Download Thoones</span>
                </div>
              </a>
            </div>
          </div>
        </section>
        <div className="home-container2">
          <div className="home-container3">
            <Script
              html={`<script defer data-name="thoones-homepage">
(function(){
  // Subtle Scroll Reveal Animation
  const revealElements = document.querySelectorAll("[data-reveal]")

  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
        revealObserver.unobserve(entry.target)
      }
    })
  }, observerOptions)

  revealElements.forEach((el) => {
    el.style.opacity = "0.3"
    el.style.transform = "translateY(20px)"
    el.style.transition = "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)"
    revealObserver.observe(el)
  })

  // Profile to Store Transformation Animation Logic
  const profileStage = document.getElementById("profileStage")
  const storeStage = document.getElementById("storeStage")

  if (profileStage && storeStage) {
    let isProfile = true

    setInterval(() => {
      if (isProfile) {
        profileStage.classList.remove("active")
        storeStage.classList.add("active")
      } else {
        storeStage.classList.remove("active")
        profileStage.classList.add("active")
      }
      isProfile = !isProfile
    }, 3000)
  }

  // Parallax effect for floating cards in Hero
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset
    const cards = document.querySelectorAll(".floating-ui-card")

    cards.forEach((card, index) => {
      const speed = 0.05 * (index + 1)
      card.style.transform = \`translateY(\${scrolled * speed}px)\`
    })
  })

  // Accessibility: Respect reduced motion
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelectorAll(".hero-title span, .floating-ui-card, .iphone-mockup-wrapper").forEach((el) => {
      el.style.animation = "none"
      el.style.opacity = "1"
      el.style.transform = "none"
    })
  }
})()
</script>`}
            ></Script>
          </div>
        </div>
        <div className="home-container4">
          <div className="home-container5">
            <Script
              html={`<style>
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes floatMockup {
          0%,
          100% {
            transform: rotateY(-15deg) rotateX(10deg) translateY(0);
          }
          50% {
            transform: rotateY(-12deg) rotateX(8deg) translateY(-20px);
          }
        }
        @keyframes floatFloating {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-15px);
          }
        }
        @keyframes floatMockupMobile {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      </style>`}
            ></Script>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .home-container1 {
            width: 100%;
            min-height: 100vh;
          }
          .home-link1 {
            display: contents;
          }
          .home-link2 {
            display: contents;
          }
          .home-thq-floating-ui-card-elm1 {
            -delay: 0.2s;
          }
          .home-thq-floating-ui-card-elm2 {
            -delay: 0.4s;
          }
          .home-thq-floating-ui-card-elm3 {
            -delay: 0.6s;
          }
          .home-thq-bar-fill-elm1 {
            width: 92%;
          }
          .home-thq-bar-fill-elm2 {
            width: 85%;
          }
          .home-thq-bar-fill-elm3 {
            width: 78%;
          }
          .home-container2 {
            display: none;
          }
          .home-container3 {
            display: contents;
          }
          .home-container4 {
            display: none;
          }
          .home-container5 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Home
