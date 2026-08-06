import React from 'react'
import Link from 'next/link'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const Navigation = (props) => {
  return (
    <>
      <div className="navigation-container1">
        <nav className="navigation-root">
          <div className="navigation-container">
            <div className="navigation-main-bar">
              <Link href="/">
                <a className="navigation-link10">
                  <div
                    aria-label="Thoones Home"
                    className="navigation-logo-link"
                  >
                    <span className="navigation-brand-text">THOONES</span>
                  </div>
                </a>
              </Link>
              <div className="navigation-desktop-links">
                <Link href="/">
                  <a className="navigation-link11">
                    <div className="navigation-link">
                      <span>Discover</span>
                    </div>
                  </a>
                </Link>
                <a href="Trust" className="navigation-link12">
                  <div className="navigation-link">
                    <span>Trust</span>
                  </div>
                </a>
                <a href="Business" className="navigation-link13">
                  <div className="navigation-link">
                    <span>Business</span>
                  </div>
                </a>
                <a href="About" className="navigation-link14">
                  <div className="navigation-link">
                    <span>About</span>
                  </div>
                </a>
              </div>
              <div className="navigation-actions">
                <a href="Download" className="navigation-link15">
                  <div className="btn-primary navigation-cta-desktop btn">
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                      className="navigation-icon-small"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <path d="m7 10l5 5l5-5"></path>
                      </g>
                    </svg>
                    <span>Download</span>
                  </div>
                </a>
                <button
                  id="navigation-mobile-toggle"
                  aria-label="Open Menu"
                  aria-controls="navigation-mobile-overlay"
                  aria-expanded="false"
                  className="navigation-toggle-btn"
                >
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M4 6h16M4 12h16M4 18h16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div
            id="navigation-mobile-overlay"
            aria-hidden="true"
            className="navigation-mobile-panel"
          >
            <div className="navigation-mobile-header">
              <Link href="/">
                <a className="navigation-link16">
                  <div
                    aria-label="Thoones Home"
                    className="navigation-logo-link"
                  >
                    <span className="navigation-brand-text">THOONES</span>
                  </div>
                </a>
              </Link>
              <button
                id="navigation-mobile-close"
                aria-label="Close Menu"
                className="navigation-toggle-btn"
              >
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="m15 18l-6-6l6-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="navigation-mobile-content">
              <div className="navigation-mobile-nav-list">
                <Link href="/">
                  <a className="navigation-link17">
                    <div className="navigation-mobile-link">
                      <span>Discover</span>
                      <svg
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="m9 18l6-6l-6-6"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </a>
                </Link>
                <a href="Trust" className="navigation-link18">
                  <div className="navigation-mobile-link">
                    <span>Trust</span>
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="m9 18l6-6l-6-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </a>
                <a href="Business" className="navigation-link19">
                  <div className="navigation-mobile-link">
                    <span>Business</span>
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="m9 18l6-6l-6-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </a>
                <a href="About" className="navigation-link20">
                  <div className="navigation-mobile-link">
                    <span>About</span>
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="m9 18l6-6l-6-6"
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
              <div className="navigation-mobile-footer">
                <p className="navigation-mobile-tagline">
                  People. Things. Together.
                </p>
                <a href="Download" className="navigation-link21">
                  <div className="btn-primary btn navigation-cta-mobile">
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
                        <path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <path d="m7 10l5 5l5-5"></path>
                      </g>
                    </svg>
                    <span>Download Thoones</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="navigation-mobile-content">
              <div className="navigation-mobile-nav-list">
                <a href="Trust" className="navigation-link22">
                  <div className="navigation-mobile-link">
                    <span>Trust</span>
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="m9 18l6-6l-6-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </a>
                <a href="Business" className="navigation-link23">
                  <div className="navigation-mobile-link">
                    <span>Business</span>
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="m9 18l6-6l-6-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </a>
                <a href="About" className="navigation-link24">
                  <div className="navigation-mobile-link">
                    <span>About</span>
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="m9 18l6-6l-6-6"
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
              <div className="navigation-mobile-footer">
                <p className="navigation-mobile-tagline">
                  People. Things. Together.
                </p>
                <a href="Download" className="navigation-link25">
                  <div className="btn-primary btn navigation-cta-mobile">
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
                        <path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <path d="m7 10l5 5l5-5"></path>
                      </g>
                    </svg>
                    <span>Download Thoones</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div className="navigation-container2">
          <div className="navigation-container3">
            <Script
              html={`<script defer data-name="thoones-navigation">
(function(){
  ;(function () {
    const mobileToggle = document.getElementById("navigation-mobile-toggle")
    const mobileClose = document.getElementById("navigation-mobile-close")
    const mobileOverlay = document.getElementById("navigation-mobile-overlay")
    const body = document.body

    if (!mobileToggle || !mobileOverlay || !mobileClose) return

    function openMenu() {
      mobileOverlay.style.display = "flex"
      // Trigger reflow for transition
      void mobileOverlay.offsetWidth
      mobileOverlay.classList.add("is-active")
      mobileToggle.setAttribute("aria-expanded", "true")
      mobileOverlay.setAttribute("aria-hidden", "false")
      body.style.overflow = "hidden"
    }

    function closeMenu() {
      mobileOverlay.classList.remove("is-active")
      mobileToggle.setAttribute("aria-expanded", "false")
      mobileOverlay.setAttribute("aria-hidden", "true")
      body.style.overflow = ""

      // Wait for transition to finish before hiding
      setTimeout(() => {
        if (!mobileOverlay.classList.contains("is-active")) {
          mobileOverlay.style.display = "none"
        }
      }, 300)
    }

    mobileToggle.addEventListener("click", openMenu)
    mobileClose.addEventListener("click", closeMenu)

    // Close on link click
    const mobileLinks = mobileOverlay.querySelectorAll(".navigation-mobile-link")
    mobileLinks.forEach((link) => {
      link.addEventListener("click", closeMenu)
    })

    // Close on ESC key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && mobileOverlay.classList.contains("is-active")) {
        closeMenu()
      }
    })

    // Handle scroll effect for translucent header
    const navRoot = document.querySelector(".navigation-root")
    window.addEventListener(
      "scroll",
      () => {
        if (window.scrollY > 20) {
          navRoot.style.boxShadow = "0 4px 20px -5px rgba(0, 0, 0, 0.05)"
          navRoot.style.borderBottomColor = "var(--color-border)"
        } else {
          navRoot.style.boxShadow = "none"
          navRoot.style.borderBottomColor = "color-mix(in oklab, var(--color-border) 50%, transparent)"
        }
      },
      { passive: true }
    )
  })()
})()
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .navigation-container1 {
            display: contents;
          }
          .navigation-link10 {
            display: contents;
          }
          .navigation-link11 {
            display: contents;
          }
          .navigation-link12 {
            display: contents;
          }
          .navigation-link13 {
            display: contents;
          }
          .navigation-link14 {
            display: contents;
          }
          .navigation-link15 {
            display: contents;
          }
          .navigation-link16 {
            display: contents;
          }
          .navigation-link17 {
            display: contents;
          }
          .navigation-link18 {
            display: contents;
          }
          .navigation-link19 {
            display: contents;
          }
          .navigation-link20 {
            display: contents;
          }
          .navigation-link21 {
            display: contents;
          }
          .navigation-link22 {
            display: contents;
          }
          .navigation-link23 {
            display: contents;
          }
          .navigation-link24 {
            display: contents;
          }
          .navigation-link25 {
            display: contents;
          }
          .navigation-container2 {
            display: none;
          }
          .navigation-container3 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Navigation
