import React from 'react'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const TrustBeforeCommerce = (props) => {
  return (
    <>
      <div className="trust-before-commerce-container1">
        <section className="trust-before-commerce">
          <div className="trust-before-commerce-container">
            <div className="trust-before-commerce-header">
              <h2 className="trust-before-commerce-title section-title">
                Before you buy, know who you&apos;re buying from.
              </h2>
              <p className="trust-before-commerce-subtitle section-content">
                On Thoones, a product has a person behind it.
              </p>
            </div>
            <div className="trust-before-commerce-visual">
              <div className="trust-before-commerce-cards">
                <div className="trust-before-commerce-card product-card">
                  <div className="product-image-wrapper">
                    <img
                      src="https://images.pexels.com/photos/9656153/pexels-photo-9656153.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=200"
                      alt="Abstract Product"
                      loading="lazy"
                      className="product-image"
                    />
                  </div>
                  <div className="product-info">
                    <div className="product-meta">
                      <span className="product-name">Ethereal Gradient</span>
                      <span className="trust-before-commerce-product-price">
                        $120.00
                      </span>
                    </div>
                    <button className="btn btn-primary btn-sm">Buy</button>
                  </div>
                </div>
                <div className="trust-before-commerce-flow">
                  <div className="flow-line"></div>
                  <div className="flow-labels">
                    <span className="flow-label">PRODUCT</span>
                    <div className="flow-arrow">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 12h14m-7-7l7 7l-7 7"
                        ></path>
                      </svg>
                    </div>
                    <span className="flow-label">SELLER</span>
                    <div className="flow-arrow">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 12h14m-7-7l7 7l-7 7"
                        ></path>
                      </svg>
                    </div>
                    <span className="flow-label">TRUST</span>
                  </div>
                </div>
                <div className="trust-before-commerce-card seller-card">
                  <div className="seller-profile">
                    <div className="seller-avatar">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        >
                          <path d="M17.925 20.056a6 6 0 0 0-11.851.001"></path>
                          <circle cx="12" cy="11" r="4"></circle>
                          <circle cx="12" cy="12" r="10"></circle>
                        </g>
                      </svg>
                    </div>
                    <div className="seller-details">
                      <span className="seller-name">Elena Thorne</span>
                      <span className="seller-username">@elena_design</span>
                    </div>
                  </div>
                  <div className="seller-trust-badge">
                    <div className="trust-score-wrapper">
                      <span className="trust-score-label">Trust</span>
                      <span className="trust-score-value">87</span>
                    </div>
                    <div className="trust-status">
                      <div className="status-indicator">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M8.5 1.709a.75.75 0 0 0-1 0a8.96 8.96 0 0 1-4.84 2.217a.75.75 0 0 0-.654.72Q2 4.821 2 5c0 4.052 2.295 7.567 5.653 9.317a.75.75 0 0 0 .694 0a10.5 10.5 0 0 0 5.647-9.672a.75.75 0 0 0-.654-.719A8.96 8.96 0 0 1 8.5 1.71m2.34 5.504a.75.75 0 0 0-1.18-.926L7.394 9.17l-1.156-.99a.75.75 0 1 0-.976 1.138l1.75 1.5a.75.75 0 0 0 1.078-.106z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <span className="status-text">Trusted</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="trust-before-commerce-container2">
          <div className="trust-before-commerce-container3">
            <Script
              html={`<script defer data-name="trust-scroll-reveal">
(function(){
  const revealTrustSection = () => {
    const section = document.querySelector(".trust-before-commerce-visual")
    const cards = document.querySelectorAll(".trust-before-commerce-card")
    const flow = document.querySelector(".trust-before-commerce-flow")

    const observerOptions = {
      threshold: 0.2,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.style.opacity = "1"
              card.style.transform = "translateY(0)"
            }, index * 200)
          })

          if (flow) {
            setTimeout(() => {
              flow.style.opacity = "1"
              flow.style.transform = "scale(1)"
            }, 400)
          }

          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    // Initial state for JS-driven reveal
    cards.forEach((card) => {
      card.style.opacity = "0"
      card.style.transform = "translateY(30px)"
      card.style.transition = "all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)"
    })

    if (flow) {
      flow.style.opacity = "0"
      flow.style.transform = "scale(0.9)"
      flow.style.transition = "all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)"
    }

    if (section) {
      observer.observe(section)
    }
  }

  revealTrustSection()
})()
</script>`}
            ></Script>
          </div>
        </div>
        <div className="trust-before-commerce-container4">
          <div className="trust-before-commerce-container5">
            <Script
              html={`<style>
        @keyframes pulseArrow {0% {transform: translateX(-4px);
opacity: 0.5;}
50% {transform: translateX(4px);
opacity: 1;}
100% {transform: translateX(-4px);
opacity: 0.5;}}
        </style> `}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .trust-before-commerce-container1 {
            display: contents;
          }
          .trust-before-commerce-container2 {
            display: none;
          }
          .trust-before-commerce-container3 {
            display: contents;
          }
          .trust-before-commerce-container4 {
            display: none;
          }
          .trust-before-commerce-container5 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default TrustBeforeCommerce
