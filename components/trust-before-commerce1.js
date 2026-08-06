import React from 'react'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const TrustBeforeCommerce1 = (props) => {
  return (
    <>
      <div className="trust-before-commerce1-container1">
        <section
          aria-labelledby="trust-section-title"
          className="trust-before-commerce1-trust-before-commerce"
        >
          <div className="trust-before-commerce1-trust-before-commerce-container">
            <div className="trust-before-commerce-content">
              <h2 id="trust-section-title" className="section-title">
                Before you buy, know who you&apos;re buying from.
              </h2>
              <p className="section-content">
                On Thoones, a product has a person behind it.
              </p>
            </div>
            <div className="trust-before-commerce-visual-bridge">
              <div
                id="productCard"
                className="trust-before-commerce1-trust-before-commerce-card trust-before-commerce1-product-card"
              >
                <div className="product-card-image-wrapper">
                  <img
                    src="https://images.pexels.com/photos/19969449/pexels-photo-19969449.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=200"
                    alt="Premium Compact Camera"
                    className="product-card-image"
                  />
                  <div className="product-card-badge">
                    <span>New Arrival</span>
                  </div>
                </div>
                <div className="product-card-details">
                  <div className="product-card-info">
                    <span className="product-card-name">Lumix X-Series</span>
                    <span className="product-card-price">$899.00</span>
                  </div>
                  <div className="product-card-action">
                    <button className="btn btn-sm btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
              <div className="trust-before-commerce-connector">
                <div className="connector-line"></div>
                <div className="connector-pulse"></div>
              </div>
              <div
                id="sellerCard"
                className="trust-before-commerce1-trust-before-commerce-card trust-before-commerce1-seller-card"
              >
                <div className="seller-card-header">
                  <div className="seller-avatar-wrapper">
                    <img
                      src="https://images.pexels.com/photos/15118335/pexels-photo-15118335.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=200"
                      alt="Marcus Chen"
                      className="trust-before-commerce1-seller-avatar"
                    />
                    <div className="seller-status-indicator"></div>
                  </div>
                  <div className="seller-identity">
                    <h3 className="seller-name">Marcus Chen</h3>
                    <p className="trust-before-commerce1-seller-username">
                      @marcus_tech
                    </p>
                  </div>
                </div>
                <div className="seller-trust-metrics">
                  <div className="trust-score-container">
                    <div className="trust-before-commerce1-trust-score-label">
                      <span>Trust Score</span>
                    </div>
                    <div className="trust-before-commerce1-trust-score-value">
                      <span>87</span>
                    </div>
                  </div>
                  <div className="trust-badge">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                    </svg>
                    <span>Verified Seller</span>
                  </div>
                </div>
                <div className="seller-tags">
                  <span className="seller-tag">Expert Reviewer</span>
                  <span className="seller-tag">Community Leader</span>
                </div>
                <a href="/trust" className="trust-before-commerce1-link">
                  <div className="seller-link btn btn-link btn-sm">
                    <span>View Full Profile</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14m-7-7l7 7l-7 7"></path>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <div className="trust-before-commerce1-container2">
          <div className="trust-before-commerce1-container3">
            <Script
              html={`<script defer data-name="trust-bridge-animation">
(function(){
  const productCard = document.getElementById("productCard")
  const sellerCard = document.getElementById("sellerCard")

  const observerOptions = {
    threshold: 0.2,
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Subtle transition toward each other
        productCard.classList.add("animate-in")
        sellerCard.classList.add("animate-in")

        // Parallax effect on scroll
        window.addEventListener("scroll", handleScrollEffect)
      }
    })
  }, observerOptions)

  observer.observe(productCard)

  function handleScrollEffect() {
    const rect = productCard.getBoundingClientRect()
    const viewHeight = window.innerHeight

    if (rect.top < viewHeight && rect.bottom > 0) {
      const scrollPercent = (viewHeight - rect.top) / (viewHeight + rect.height)
      const movement = (scrollPercent - 0.5) * 30 // Max 15px movement

      // Only apply if desktop (horizontal layout)
      if (window.innerWidth > 767) {
        productCard.style.transform = \`translateX(\${20 + movement}px)\`
        sellerCard.style.transform = \`translateX(\${-20 - movement}px)\`
      }
    }
  }
})()
</script>`}
            ></Script>
          </div>
        </div>
        <div className="trust-before-commerce1-container4">
          <div className="trust-before-commerce1-container5">
            <Script
              html={`<style>
        @keyframes bridgePulse {0% {left: 0%;
opacity: 0;
transform: scale(0.5);}
20% {opacity: 1;
transform: scale(1);}
80% {opacity: 1;
transform: scale(1);}
100% {left: 100%;
opacity: 0;
transform: scale(0.5);}}
        </style> `}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .trust-before-commerce1-container1 {
            display: contents;
          }
          .trust-before-commerce1-link {
            display: contents;
          }
          .trust-before-commerce1-container2 {
            display: none;
          }
          .trust-before-commerce1-container3 {
            display: contents;
          }
          .trust-before-commerce1-container4 {
            display: none;
          }
          .trust-before-commerce1-container5 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default TrustBeforeCommerce1
