import React from 'react'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const ProductDiscovery = (props) => {
  return (
    <>
      <div className="product-discovery-container1">
        <section id="product-discovery" className="product-discovery">
          <div className="product-discovery-container">
            <header className="product-discovery-header">
              <h2 className="section-title">Find something you love.</h2>
              <p className="section-subtitle">
                Discover products from people and stores you can actually get to
                know.
              </p>
            </header>
            <div className="product-discovery-carousel-wrapper">
              <div className="product-discovery-carousel">
                <article className="product-discovery-card">
                  <div className="product-discovery-visual product-discovery-visual-1">
                    <div className="product-discovery-shape"></div>
                  </div>
                  <div className="product-discovery-content">
                    <div className="product-discovery-seller">
                      <div
                        aria-hidden="true"
                        className="product-discovery-avatar"
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
                          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                      </div>
                      <span className="product-discovery-seller-name">
                        Alex Rivera
                      </span>
                      <div className="product-discovery-trust-badge">
                        <span className="product-discovery-trust-dot"></span>
                        <span className="product-discovery-trust-text">
                          Trusted
                        </span>
                      </div>
                    </div>
                    <h3 className="product-discovery-name">
                      Studio Wireless Headphones
                    </h3>
                    <div className="product-discovery-footer">
                      <span className="product-discovery-price">$299</span>
                      <button className="product-discovery-buy btn btn-primary btn-sm">
                        Buy
                      </button>
                    </div>
                  </div>
                </article>
                <article className="product-discovery-card">
                  <div className="product-discovery-visual product-discovery-visual-2">
                    <div className="product-discovery-shape"></div>
                  </div>
                  <div className="product-discovery-content">
                    <div className="product-discovery-seller">
                      <div
                        aria-hidden="true"
                        className="product-discovery-avatar"
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
                          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                      </div>
                      <span className="product-discovery-seller-name">
                        Sarah Chen
                      </span>
                      <div className="product-discovery-trust-badge">
                        <span className="product-discovery-trust-dot"></span>
                        <span className="product-discovery-trust-text">
                          98 Trust Score
                        </span>
                      </div>
                    </div>
                    <h3 className="product-discovery-name">
                      Cloud-Step Sneakers
                    </h3>
                    <div className="product-discovery-footer">
                      <span className="product-discovery-price">$145</span>
                      <button className="product-discovery-buy btn btn-primary btn-sm">
                        Buy
                      </button>
                    </div>
                  </div>
                </article>
                <article className="product-discovery-card">
                  <div className="product-discovery-visual product-discovery-visual-3">
                    <div className="product-discovery-shape"></div>
                  </div>
                  <div className="product-discovery-content">
                    <div className="product-discovery-seller">
                      <div
                        aria-hidden="true"
                        className="product-discovery-avatar"
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
                          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                      </div>
                      <span className="product-discovery-seller-name">
                        Marco Rossi
                      </span>
                      <div className="product-discovery-trust-badge">
                        <span className="product-discovery-trust-dot"></span>
                        <span className="product-discovery-trust-text">
                          Trusted
                        </span>
                      </div>
                    </div>
                    <h3 className="product-discovery-name">
                      Heritage Leather Tote
                    </h3>
                    <div className="product-discovery-footer">
                      <span className="product-discovery-price">$420</span>
                      <button className="product-discovery-buy btn btn-primary btn-sm">
                        Buy
                      </button>
                    </div>
                  </div>
                </article>
                <article className="product-discovery-card">
                  <div className="product-discovery-visual product-discovery-visual-4">
                    <div className="product-discovery-shape"></div>
                  </div>
                  <div className="product-discovery-content">
                    <div className="product-discovery-seller">
                      <div
                        aria-hidden="true"
                        className="product-discovery-avatar"
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
                          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                      </div>
                      <span className="product-discovery-seller-name">
                        Tech Haven
                      </span>
                      <div className="product-discovery-trust-badge">
                        <span className="product-discovery-trust-dot"></span>
                        <span className="product-discovery-trust-text">
                          94 Trust Score
                        </span>
                      </div>
                    </div>
                    <h3 className="product-discovery-name">
                      Horizon Smartwatch v2
                    </h3>
                    <div className="product-discovery-footer">
                      <span className="product-discovery-price">$349</span>
                      <button className="product-discovery-buy btn btn-primary btn-sm">
                        Buy
                      </button>
                    </div>
                  </div>
                </article>
                <article className="product-discovery-card">
                  <div className="product-discovery-visual product-discovery-visual-5">
                    <div className="product-discovery-shape"></div>
                  </div>
                  <div className="product-discovery-content">
                    <div className="product-discovery-seller">
                      <div
                        aria-hidden="true"
                        className="product-discovery-avatar"
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
                          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                      </div>
                      <span className="product-discovery-seller-name">
                        Elena K.
                      </span>
                      <div className="product-discovery-trust-badge">
                        <span className="product-discovery-trust-dot"></span>
                        <span className="product-discovery-trust-text">
                          Trusted
                        </span>
                      </div>
                    </div>
                    <h3 className="product-discovery-name">
                      Vintage 35mm Film Camera
                    </h3>
                    <div className="product-discovery-footer">
                      <span className="product-discovery-price">$180</span>
                      <button className="product-discovery-buy btn btn-primary btn-sm">
                        Buy
                      </button>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
        <div className="product-discovery-container2">
          <div className="product-discovery-container3">
            <Script
              html={`<script defer data-name="product-discovery-interaction">
(function(){
  const carousel = document.querySelector(".product-discovery-carousel")
  let isDown = false
  let startX
  let scrollLeft

  if (carousel) {
    carousel.addEventListener("mousedown", (e) => {
      isDown = true
      carousel.classList.add("active")
      startX = e.pageX - carousel.offsetLeft
      scrollLeft = carousel.scrollLeft
    })

    carousel.addEventListener("mouseleave", () => {
      isDown = false
      carousel.classList.remove("active")
    })

    carousel.addEventListener("mouseup", () => {
      isDown = false
      carousel.classList.remove("active")
    })

    carousel.addEventListener("mousemove", (e) => {
      if (!isDown) return
      e.preventDefault()
      const x = e.pageX - carousel.offsetLeft
      const walk = (x - startX) * 2
      carousel.scrollLeft = scrollLeft - walk
    })

    const observerOptions = {
      threshold: 0.1,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const cards = entry.target.querySelectorAll(".product-discovery-card")
          cards.forEach((card, index) => {
            card.style.opacity = "0"
            card.style.transform = "translateY(20px)"
            card.style.transition = \`all 0.6s cubic-bezier(0.2, 0, 0, 1) \${index * 0.1}s\`

            setTimeout(() => {
              card.style.opacity = "1"
              card.style.transform = "translateY(0)"
            }, 50)
          })
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    observer.observe(carousel)
  }
})()
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .product-discovery-container1 {
            display: contents;
          }
          .product-discovery-container2 {
            display: none;
          }
          .product-discovery-container3 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default ProductDiscovery
