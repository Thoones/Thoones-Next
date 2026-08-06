import React from 'react'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const CommerceJourney = (props) => {
  return (
    <>
      <div className="commerce-journey-container1">
        <section className="commerce-journey">
          <div className="commerce-journey-container">
            <div className="commerce-journey-header">
              <h2 className="section-title">When you&apos;re ready, buy.</h2>
              <p className="section-content">
                From discovery to checkout, Thoones keeps the experience simple.
              </p>
            </div>
            <div className="commerce-journey-visual-wrapper">
              <div className="commerce-journey-timeline">
                <div data-step="1" className="commerce-journey-step active">
                  <span className="commerce-journey-step-label">Product</span>
                </div>
                <div data-step="2" className="commerce-journey-step">
                  <span className="commerce-journey-step-label">Buy Now</span>
                </div>
                <div data-step="3" className="commerce-journey-step">
                  <span className="commerce-journey-step-label">Checkout</span>
                </div>
                <div data-step="4" className="commerce-journey-step">
                  <span className="commerce-journey-step-label">Payment</span>
                </div>
                <div data-step="5" className="commerce-journey-step">
                  <span className="commerce-journey-step-label">Order</span>
                </div>
              </div>
              <div className="commerce-journey-display">
                <div className="commerce-journey-phone-frame">
                  <div id="app-screen" className="commerce-journey-app-screen">
                    <div
                      id="state-1"
                      className="commerce-journey-state state-product active"
                    >
                      <div className="commerce-journey-product-image">
                        <img
                          src="https://images.pexels.com/photos/9635251/pexels-photo-9635251.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=200"
                          alt="Premium Tech Product"
                          loading="lazy"
                        />
                      </div>
                      <div className="commerce-journey-product-info">
                        <div className="commerce-journey-product-meta">
                          <span className="commerce-journey-badge">
                            New Arrival
                          </span>
                          <div className="commerce-journey-trust-pill">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                            </svg>
                            <span>Trust 87</span>
                          </div>
                        </div>
                        <h3 className="commerce-journey-product-name">
                          Thoones Air Edition
                        </h3>
                        <p className="commerce-journey-seller">
                          <span>
                            {' '}
                            Sold by
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                          <span>@studio_minimal</span>
                        </p>
                        <div className="commerce-journey-price-row">
                          <span className="commerce-journey-price">
                            $299.00
                          </span>
                          <span className="commerce-journey-delivery">
                            Free Delivery
                          </span>
                        </div>
                        <button
                          id="trigger-buy"
                          className="commerce-journey-action-btn btn btn-primary btn-lg"
                        >
                          Buy Now
                        </button>
                      </div>
                    </div>
                    <div
                      id="state-2"
                      className="commerce-journey-state state-checkout"
                    >
                      <div className="commerce-journey-checkout-header">
                        <button
                          id="back-to-product"
                          className="commerce-journey-back-btn"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m15 18-6-6 6-6"></path>
                          </svg>
                        </button>
                        <span className="commerce-journey-screen-title">
                          Checkout
                        </span>
                        <div className="commerce-journey-container2"></div>
                      </div>
                      <div className="commerce-journey-checkout-content">
                        <div className="commerce-journey-summary-card">
                          <div className="commerce-journey-item-thumb">
                            <img
                              src="https://images.pexels.com/photos/9635251/pexels-photo-9635251.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=200"
                              alt="Product Thumbnail"
                            />
                          </div>
                          <div className="commerce-journey-item-details">
                            <p className="commerce-journey-item-name">
                              Thoones Air Edition
                            </p>
                            <p className="commerce-journey-item-qty">
                              Quantity: 1
                            </p>
                          </div>
                          <span className="commerce-journey-item-price">
                            $299
                          </span>
                        </div>
                        <div className="commerce-journey-checkout-section">
                          <p className="commerce-journey-section-label">
                            Delivery Address
                          </p>
                          <div className="commerce-journey-address-box">
                            <p>123 Innovation Drive</p>
                            <p>San Francisco, CA 94103</p>
                          </div>
                        </div>
                        <div className="commerce-journey-checkout-section">
                          <p className="commerce-journey-section-label">
                            Payment Method
                          </p>
                          <div className="commerce-journey-payment-box">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <rect
                                width="20"
                                height="14"
                                x="2"
                                y="5"
                                rx="2"
                              ></rect>
                              <line x1="2" x2="22" y1="10" y2="10"></line>
                            </svg>
                            <span>•••• 4242</span>
                          </div>
                        </div>
                        <div className="commerce-journey-total-row">
                          <span>Total</span>
                          <span>$299.00</span>
                        </div>
                        <button
                          id="trigger-order"
                          className="commerce-journey-action-btn btn btn-primary btn-lg"
                        >
                          Place Order
                        </button>
                      </div>
                    </div>
                    <div
                      id="state-3"
                      className="commerce-journey-state state-success"
                    >
                      <div className="commerce-journey-success-content">
                        <div className="commerce-journey-success-icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="48"
                            height="48"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="var(--color-success-alt)"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                          </svg>
                        </div>
                        <h4 className="commerce-journey-success-title">
                          Order Confirmed
                        </h4>
                        <p className="commerce-journey-success-text">
                          Your Thoones Air Edition is on its way. Track your
                          order in the app.
                        </p>
                        <div className="commerce-journey-order-id">
                          <span>Order #TH-90210</span>
                        </div>
                        <button
                          id="reset-journey"
                          className="btn-md btn btn-outline"
                        >
                          View Orders
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="commerce-journey-container3">
          <div className="commerce-journey-container4">
            <Script
              html={`<script defer data-name="commerce-journey-logic">
(function(){
  const triggerBuy = document.getElementById("trigger-buy")
  const triggerOrder = document.getElementById("trigger-order")
  const backToProduct = document.getElementById("back-to-product")
  const resetJourney = document.getElementById("reset-journey")

  const state1 = document.getElementById("state-1")
  const state2 = document.getElementById("state-2")
  const state3 = document.getElementById("state-3")

  const steps = document.querySelectorAll(".commerce-journey-step")

  function updateTimeline(activeStep) {
    steps.forEach((step, index) => {
      if (index < activeStep) {
        step.classList.add("active")
      } else {
        step.classList.remove("active")
      }
    })
  }

  triggerBuy.addEventListener("click", () => {
    state1.classList.remove("active")
    state2.classList.add("active")
    updateTimeline(3) // Move to Checkout step
  })

  backToProduct.addEventListener("click", () => {
    state2.classList.remove("active")
    state1.classList.add("active")
    updateTimeline(1) // Back to Product step
  })

  triggerOrder.addEventListener("click", () => {
    state2.classList.remove("active")
    state3.classList.add("active")
    updateTimeline(5) // Complete the journey
  })

  resetJourney.addEventListener("click", () => {
    state3.classList.remove("active")
    state1.classList.add("active")
    updateTimeline(1)
  })

  // Intersection Observer for scroll-triggered entrance
  const observerOptions = {
    threshold: 0.2,
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  const visualWrapper = document.querySelector(".commerce-journey-visual-wrapper")
  visualWrapper.style.opacity = "0"
  visualWrapper.style.transform = "translateY(40px)"
  visualWrapper.style.transition = "all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)"

  observer.observe(visualWrapper)
})()
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .commerce-journey-container1 {
            display: contents;
          }
          .commerce-journey-container2 {
            width: 20px;
          }
          .commerce-journey-container3 {
            display: none;
          }
          .commerce-journey-container4 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default CommerceJourney
