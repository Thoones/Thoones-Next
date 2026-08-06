import React from 'react'
import Link from 'next/link'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const Footer = (props) => {
  return (
    <>
      <div className="footer-container1">
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-top">
              <div className="footer-brand-column">
                <Link href="/">
                  <a className="footer-link10">
                    <div className="footer-logo">
                      <span className="footer-logo-text">THOONES</span>
                    </div>
                  </a>
                </Link>
                <p className="footer-tagline">People. Things. Together.</p>
                <div className="footer-social-links">
                  <a href="#" className="footer-link11">
                    <div
                      aria-label="Follow us on X"
                      className="footer-social-link"
                    >
                      <svg
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="m4 4l11.733 16H20L8.267 4zm0 16l6.768-6.768m2.46-2.46L20 4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </a>
                  <a href="#" className="footer-link12">
                    <div
                      aria-label="Connect on LinkedIn"
                      className="footer-social-link"
                    >
                      <svg
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M10 5a2 2 0 1 0 4 0a2 2 0 1 0-4 0M3 19a2 2 0 1 0 4 0a2 2 0 1 0-4 0m14 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-8-5a3 3 0 1 0 6 0a3 3 0 1 0-6 0m3-7v4m-5.3 6.8l2.8-2m7.8 2l-2.8-2"
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
              <div className="footer-links-grid">
                <div className="footer-links-group">
                  <h3 className="footer-group-title">Product</h3>
                  <ul className="footer-links-list">
                    <li>
                      <a href="/download">
                        <div className="footer-link">
                          <span>Download</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="/#features">
                        <div className="footer-link">
                          <span>Features</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="/trust">
                        <div className="footer-link">
                          <span>Trust System</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="/#discovery">
                        <div className="footer-link">
                          <span>Discovery</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="footer-links-group">
                  <h3 className="footer-group-title">Business</h3>
                  <ul className="footer-links-list">
                    <li>
                      <a href="/business">
                        <div className="footer-link">
                          <span>Sell on Thoones</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="/business#stores">
                        <div className="footer-link">
                          <span>Storefronts</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="/business#commerce">
                        <div className="footer-link">
                          <span>Commerce API</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="/business#insights">
                        <div className="footer-link">
                          <span>Merchant Insights</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="footer-links-group">
                  <h3 className="footer-group-title">Company</h3>
                  <ul className="footer-links-list">
                    <li>
                      <a href="/about">
                        <div className="footer-link">
                          <span>About Thoones</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="/about#team">
                        <div className="footer-link">
                          <span>Our Team</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="/about#contact">
                        <div className="footer-link">
                          <span>Contact</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="/about#careers">
                        <div className="footer-link">
                          <span>Careers</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="footer-links-group">
                  <h3 className="footer-group-title">Legal</h3>
                  <ul className="footer-links-list">
                    <li>
                      <a href="#">
                        <div className="footer-link">
                          <span>Privacy Policy</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="footer-link">
                          <span>Terms of Service</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="footer-link">
                          <span>Safety Center</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="footer-link">
                          <span>Cookie Settings</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer-apps-column">
                <h3 className="footer-group-title">Get the App</h3>
                <div className="footer-app-buttons">
                  <a href="#" className="footer-link29">
                    <div className="footer-app-btn">
                      <svg
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M8.286 7.008C5.07 7.008 4 10.238 4 12.928C4 16.157 6.143 21 8.286 21c1.165-.05 1.799-.538 3.214-.538c1.406 0 1.607.538 3.214.538S19 17.771 19 15.619c-.03-.011-2.649-.434-2.679-3.23c-.02-2.335 2.589-3.179 2.679-3.228c-1.096-1.606-3.162-2.113-3.75-2.153c-1.535-.12-3.032 1.077-3.75 1.077c-.729 0-2.036-1.077-3.214-1.077M12 4a2 2 0 0 0 2-2a2 2 0 0 0-2 2"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <div className="footer-app-btn-text">
                        <span className="footer-app-btn-label">
                          Download for
                        </span>
                        <span className="footer-app-btn-name">iPhone</span>
                      </div>
                    </div>
                  </a>
                  <a href="#" className="footer-link30">
                    <div className="footer-app-btn">
                      <svg
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M4 10v6m16-6v6M7 9h10v8a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1za5 5 0 0 1 10 0M8 3l1 2m7-2l-1 2M9 18v3m6-3v3"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <div className="footer-app-btn-text">
                        <span className="footer-app-btn-label">Get it on</span>
                        <span className="footer-app-btn-name">Android</span>
                      </div>
                    </div>
                  </a>
                  <a href="#" className="footer-link31">
                    <div className="footer-app-btn">
                      <svg
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 11l5 5l5-5m-5-7v12"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <div className="footer-app-btn-text">
                        <span className="footer-app-btn-label">
                          Available for
                        </span>
                        <span className="footer-app-btn-name">Desktop</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="footer-copyright">
                <span>
                  © 2024 Thoones Technologies Inc. All rights reserved.
                </span>
              </div>
              <div className="footer-bottom-links">
                <a href="#" className="footer-link32">
                  <div className="footer-bottom-link">
                    <span>Privacy</span>
                  </div>
                </a>
                <a href="#" className="footer-link33">
                  <div className="footer-bottom-link">
                    <span>Terms</span>
                  </div>
                </a>
                <a href="#" className="footer-link34">
                  <div className="footer-bottom-link">
                    <span>Cookies</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </footer>
        <div className="footer-container2">
          <div className="footer-container3">
            <Script
              html={`<script defer data-name="footer-stagger">
(function(){
  const footerGroups = document.querySelectorAll(".footer-links-group")
  const footerObserverOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const footerObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const links = entry.target.querySelectorAll(".footer-link")
        links.forEach((link, index) => {
          link.style.opacity = "0"
          link.style.transform = "translateY(10px)"
          link.style.transition = "all 0.4s ease-out"

          setTimeout(() => {
            link.style.opacity = "1"
            link.style.transform = "translateY(0)"
          }, index * 80)
        })
        footerObserver.unobserve(entry.target)
      }
    })
  }, footerObserverOptions)

  footerGroups.forEach((group) => {
    footerObserver.observe(group)
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .footer-container1 {
            display: contents;
          }
          .footer-link10 {
            display: contents;
          }
          .footer-link11 {
            display: contents;
          }
          .footer-link12 {
            display: contents;
          }
          .footer-link29 {
            display: contents;
          }
          .footer-link30 {
            display: contents;
          }
          .footer-link31 {
            display: contents;
          }
          .footer-link32 {
            display: contents;
          }
          .footer-link33 {
            display: contents;
          }
          .footer-link34 {
            display: contents;
          }
          .footer-container2 {
            display: none;
          }
          .footer-container3 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Footer
