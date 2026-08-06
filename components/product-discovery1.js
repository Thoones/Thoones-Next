import React from 'react'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const ProductDiscovery1 = (props) => {
  return (
    <>
      <div className="product-discovery1-container1">
        <section
          aria-labelledby="product-discovery-title"
          className="product-discovery1-product-discovery"
        >
          <div className="product-discovery-container">
            <header className="product-discovery1-product-discovery-header">
              <h2 id="product-discovery-title" className="section-title">
                Find something you love.
              </h2>
              <p className="product-discovery-subtitle section-content">
                Discover products from people and stores you can actually get to
                know.
              </p>
            </header>
            <div id="product-carousel" className="product-discovery-viewport">
              <div className="product-discovery-track">
                <article className="product-discovery1-product-discovery-card">
                  <div className="product-discovery-image-wrapper">
                    <img
                      src="https://images.pexels.com/photos/5956086/pexels-photo-5956086.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=200"
                      alt="Premium Wireless Headphones"
                      loading="lazy"
                      className="product-discovery-image"
                    />
                    <div className="product-discovery-badge">
                      <span>New Release</span>
                    </div>
                  </div>
                  <div className="product-discovery-details">
                    <div className="product-discovery1-product-discovery-seller">
                      <div className="product-discovery1-product-discovery-avatar">
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
                            <circle cx="12" cy="12" r="10"></circle>
                            <circle cx="12" cy="10" r="3"></circle>
                            <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"></path>
                          </g>
                        </svg>
                      </div>
                      <span className="product-discovery1-product-discovery-seller-name">
                        AudioPure Studio
                      </span>
                      <div className="product-discovery-trust">
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
                            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                            <path d="m9 12l2 2l4-4"></path>
                          </g>
                        </svg>
                        <span>98</span>
                      </div>
                    </div>
                    <h3 className="product-discovery1-product-discovery-name">
                      Studio Pro Wireless
                    </h3>
                    <div className="product-discovery1-product-discovery-footer">
                      <span className="product-discovery1-product-discovery-price">
                        $299.00
                      </span>
                      <button className="product-discovery1-product-discovery-buy btn btn-primary">
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
                            <circle cx="8" cy="21" r="1"></circle>
                            <circle cx="19" cy="21" r="1"></circle>
                            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                          </g>
                        </svg>
                        <span>Buy Now</span>
                      </button>
                    </div>
                  </div>
                </article>
                <article className="product-discovery1-product-discovery-card">
                  <div className="product-discovery-image-wrapper">
                    <img
                      src="https://images.pexels.com/photos/12781529/pexels-photo-12781529.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=200"
                      alt="Urban Runner Sneakers"
                      loading="lazy"
                      className="product-discovery-image"
                    />
                  </div>
                  <div className="product-discovery-details">
                    <div className="product-discovery1-product-discovery-seller">
                      <div className="product-discovery1-product-discovery-avatar">
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
                            <circle cx="12" cy="12" r="10"></circle>
                            <circle cx="12" cy="10" r="3"></circle>
                            <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"></path>
                          </g>
                        </svg>
                      </div>
                      <span className="product-discovery1-product-discovery-seller-name">
                        SoleQuest
                      </span>
                      <div className="product-discovery-trust">
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
                            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                            <path d="m9 12l2 2l4-4"></path>
                          </g>
                        </svg>
                        <span>94</span>
                      </div>
                    </div>
                    <h3 className="product-discovery1-product-discovery-name">
                      CloudRunner Elite
                    </h3>
                    <div className="product-discovery1-product-discovery-footer">
                      <span className="product-discovery1-product-discovery-price">
                        $165.00
                      </span>
                      <button className="product-discovery1-product-discovery-buy btn btn-primary">
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
                            <circle cx="8" cy="21" r="1"></circle>
                            <circle cx="19" cy="21" r="1"></circle>
                            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                          </g>
                        </svg>
                        <span>Buy Now</span>
                      </button>
                    </div>
                  </div>
                </article>
                <article className="product-discovery1-product-discovery-card">
                  <div className="product-discovery-image-wrapper">
                    <img
                      src="https://images.pexels.com/photos/12307366/pexels-photo-12307366.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=200"
                      alt="Minimalist Smartwatch"
                      loading="lazy"
                      className="product-discovery-image"
                    />
                  </div>
                  <div className="product-discovery-details">
                    <div className="product-discovery1-product-discovery-seller">
                      <div className="product-discovery1-product-discovery-avatar">
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
                            <circle cx="12" cy="12" r="10"></circle>
                            <circle cx="12" cy="10" r="3"></circle>
                            <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"></path>
                          </g>
                        </svg>
                      </div>
                      <span className="product-discovery1-product-discovery-seller-name">
                        Nova Tech
                      </span>
                      <div className="product-discovery-trust">
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
                            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                            <path d="m9 12l2 2l4-4"></path>
                          </g>
                        </svg>
                        <span>89</span>
                      </div>
                    </div>
                    <h3 className="product-discovery1-product-discovery-name">
                      Horizon Watch S2
                    </h3>
                    <div className="product-discovery1-product-discovery-footer">
                      <span className="product-discovery1-product-discovery-price">
                        $349.00
                      </span>
                      <button className="product-discovery1-product-discovery-buy btn btn-primary">
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
                            <circle cx="8" cy="21" r="1"></circle>
                            <circle cx="19" cy="21" r="1"></circle>
                            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                          </g>
                        </svg>
                        <span>Buy Now</span>
                      </button>
                    </div>
                  </div>
                </article>
                <article className="product-discovery1-product-discovery-card">
                  <div className="product-discovery-image-wrapper">
                    <img
                      src="https://images.pexels.com/photos/3563627/pexels-photo-3563627.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=200"
                      alt="Vintage Style Camera"
                      loading="lazy"
                      className="product-discovery-image"
                    />
                  </div>
                  <div className="product-discovery-details">
                    <div className="product-discovery1-product-discovery-seller">
                      <div className="product-discovery1-product-discovery-avatar">
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
                            <circle cx="12" cy="12" r="10"></circle>
                            <circle cx="12" cy="10" r="3"></circle>
                            <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"></path>
                          </g>
                        </svg>
                      </div>
                      <span className="product-discovery1-product-discovery-seller-name">
                        Lens &amp; Light
                      </span>
                      <div className="product-discovery-trust">
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
                            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                            <path d="m9 12l2 2l4-4"></path>
                          </g>
                        </svg>
                        <span>92</span>
                      </div>
                    </div>
                    <h3 className="product-discovery1-product-discovery-name">
                      RetroShot X-10
                    </h3>
                    <div className="product-discovery1-product-discovery-footer">
                      <span className="product-discovery1-product-discovery-price">
                        $899.00
                      </span>
                      <button className="product-discovery1-product-discovery-buy btn btn-primary">
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
                            <circle cx="8" cy="21" r="1"></circle>
                            <circle cx="19" cy="21" r="1"></circle>
                            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                          </g>
                        </svg>
                        <span>Buy Now</span>
                      </button>
                    </div>
                  </div>
                </article>
                <article className="product-discovery1-product-discovery-card">
                  <div className="product-discovery-image-wrapper">
                    <img
                      src="https://images.pexels.com/photos/33433113/pexels-photo-33433113.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=200"
                      alt="Minimalist Chair"
                      loading="lazy"
                      className="product-discovery-image"
                    />
                  </div>
                  <div className="product-discovery-details">
                    <div className="product-discovery1-product-discovery-seller">
                      <div className="product-discovery1-product-discovery-avatar">
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
                            <circle cx="12" cy="12" r="10"></circle>
                            <circle cx="12" cy="10" r="3"></circle>
                            <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"></path>
                          </g>
                        </svg>
                      </div>
                      <span className="product-discovery1-product-discovery-seller-name">
                        Nordic Living
                      </span>
                      <div className="product-discovery-trust">
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
                            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                            <path d="m9 12l2 2l4-4"></path>
                          </g>
                        </svg>
                        <span>99</span>
                      </div>
                    </div>
                    <h3 className="product-discovery1-product-discovery-name">
                      Oak Shell Chair
                    </h3>
                    <div className="product-discovery1-product-discovery-footer">
                      <span className="product-discovery1-product-discovery-price">
                        $450.00
                      </span>
                      <button className="product-discovery1-product-discovery-buy btn btn-primary">
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
                            <circle cx="8" cy="21" r="1"></circle>
                            <circle cx="19" cy="21" r="1"></circle>
                            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                          </g>
                        </svg>
                        <span>Buy Now</span>
                      </button>
                    </div>
                  </div>
                </article>
                <article className="product-discovery1-product-discovery-card">
                  <div className="product-discovery-image-wrapper">
                    <img
                      src="https://images.pexels.com/photos/14002339/pexels-photo-14002339.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=200"
                      alt="Minimalist Jacket"
                      loading="lazy"
                      className="product-discovery-image"
                    />
                  </div>
                  <div className="product-discovery-details">
                    <div className="product-discovery1-product-discovery-seller">
                      <div className="product-discovery1-product-discovery-avatar">
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
                            <circle cx="12" cy="12" r="10"></circle>
                            <circle cx="12" cy="10" r="3"></circle>
                            <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"></path>
                          </g>
                        </svg>
                      </div>
                      <span className="product-discovery1-product-discovery-seller-name">
                        Essential Wear
                      </span>
                      <div className="product-discovery-trust">
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
                            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                            <path d="m9 12l2 2l4-4"></path>
                          </g>
                        </svg>
                        <span>85</span>
                      </div>
                    </div>
                    <h3 className="product-discovery1-product-discovery-name">
                      Tech Canvas Parka
                    </h3>
                    <div className="product-discovery1-product-discovery-footer">
                      <span className="product-discovery1-product-discovery-price">
                        $220.00
                      </span>
                      <button className="product-discovery1-product-discovery-buy btn btn-primary">
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
                            <circle cx="8" cy="21" r="1"></circle>
                            <circle cx="19" cy="21" r="1"></circle>
                            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                          </g>
                        </svg>
                        <span>Buy Now</span>
                      </button>
                    </div>
                  </div>
                </article>
                <article className="product-discovery1-product-discovery-card">
                  <div className="product-discovery-image-wrapper">
                    <img
                      src="https://images.pexels.com/photos/3081173/pexels-photo-3081173.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=200"
                      alt="Designer Handbag"
                      loading="lazy"
                      className="product-discovery-image"
                    />
                  </div>
                  <div className="product-discovery-details">
                    <div className="product-discovery1-product-discovery-seller">
                      <div className="product-discovery1-product-discovery-avatar">
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
                            <circle cx="12" cy="12" r="10"></circle>
                            <circle cx="12" cy="10" r="3"></circle>
                            <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"></path>
                          </g>
                        </svg>
                      </div>
                      <span className="product-discovery1-product-discovery-seller-name">
                        Maison Luxe
                      </span>
                      <div className="product-discovery-trust">
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
                            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                            <path d="m9 12l2 2l4-4"></path>
                          </g>
                        </svg>
                        <span>96</span>
                      </div>
                    </div>
                    <h3 className="product-discovery1-product-discovery-name">
                      Noir Leather Tote
                    </h3>
                    <div className="product-discovery1-product-discovery-footer">
                      <span className="product-discovery1-product-discovery-price">
                        $1,200.00
                      </span>
                      <button className="product-discovery1-product-discovery-buy btn btn-primary">
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
                            <circle cx="8" cy="21" r="1"></circle>
                            <circle cx="19" cy="21" r="1"></circle>
                            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                          </g>
                        </svg>
                        <span>Buy Now</span>
                      </button>
                    </div>
                  </div>
                </article>
                <article className="product-discovery1-product-discovery-card">
                  <div className="product-discovery-image-wrapper">
                    <img
                      src="https://images.pexels.com/photos/12411439/pexels-photo-12411439.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=200"
                      alt="Premium Tablet"
                      loading="lazy"
                      className="product-discovery-image"
                    />
                  </div>
                  <div className="product-discovery-details">
                    <div className="product-discovery1-product-discovery-seller">
                      <div className="product-discovery1-product-discovery-avatar">
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
                            <circle cx="12" cy="12" r="10"></circle>
                            <circle cx="12" cy="10" r="3"></circle>
                            <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"></path>
                          </g>
                        </svg>
                      </div>
                      <span className="product-discovery1-product-discovery-seller-name">
                        Circuit City
                      </span>
                      <div className="product-discovery-trust">
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
                            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                            <path d="m9 12l2 2l4-4"></path>
                          </g>
                        </svg>
                        <span>81</span>
                      </div>
                    </div>
                    <h3 className="product-discovery1-product-discovery-name">
                      Pixel Pad Pro 11
                    </h3>
                    <div className="product-discovery1-product-discovery-footer">
                      <span className="product-discovery1-product-discovery-price">
                        $749.00
                      </span>
                      <button className="product-discovery1-product-discovery-buy btn btn-primary">
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
                            <circle cx="8" cy="21" r="1"></circle>
                            <circle cx="19" cy="21" r="1"></circle>
                            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                          </g>
                        </svg>
                        <span>Buy Now</span>
                      </button>
                    </div>
                  </div>
                </article>
              </div>
            </div>
            <div className="product-discovery-controls">
              <button
                id="prev-btn"
                aria-label="Previous products"
                className="product-discovery-nav-btn"
              >
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
                    d="m15 18l-6-6l6-6"
                  ></path>
                </svg>
              </button>
              <div className="product-discovery-indicator-track">
                <div className="product-discovery-indicator active"></div>
                <div className="product-discovery-indicator"></div>
                <div className="product-discovery-indicator"></div>
              </div>
              <button
                id="next-btn"
                aria-label="Next products"
                className="product-discovery-nav-btn"
              >
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
                    d="m9 18l6-6l-6-6"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </section>
        <div className="product-discovery1-container2">
          <div className="product-discovery1-container3">
            <Script
              html={`<script defer data-name="product-discovery-carousel">
(function(){
  const track = document.querySelector(".product-discovery-track")
  const viewport = document.querySelector(".product-discovery-viewport")
  const nextBtn = document.getElementById("next-btn")
  const prevBtn = document.getElementById("prev-btn")
  const indicators = document.querySelectorAll(".product-discovery-indicator")

  let isDown = false
  let startX
  let scrollLeft

  // Horizontal Drag Functionality
  viewport.addEventListener("mousedown", (e) => {
    isDown = true
    viewport.classList.add("active")
    startX = e.pageX - viewport.offsetLeft
    scrollLeft = viewport.scrollLeft
  })

  viewport.addEventListener("mouseleave", () => {
    isDown = false
    viewport.classList.remove("active")
  })

  viewport.addEventListener("mouseup", () => {
    isDown = false
    viewport.classList.remove("active")
  })

  viewport.addEventListener("mousemove", (e) => {
    if (!isDown) return
    e.preventDefault()
    const x = e.pageX - viewport.offsetLeft
    const walk = (x - startX) * 2
    viewport.scrollLeft = scrollLeft - walk
    updateIndicators()
  })

  // Navigation Buttons
  const scrollAmount = 340 // Card width + gap

  nextBtn.addEventListener("click", () => {
    viewport.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    })
    setTimeout(updateIndicators, 500)
  })

  prevBtn.addEventListener("click", () => {
    viewport.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    })
    setTimeout(updateIndicators, 500)
  })

  // Update Indicators based on scroll position
  function updateIndicators() {
    const scrollPercentage = viewport.scrollLeft / (viewport.scrollWidth - viewport.clientWidth)
    const activeIndex = Math.round(scrollPercentage * (indicators.length - 1))

    indicators.forEach((indicator, index) => {
      if (index === activeIndex) {
        indicator.classList.add("active")
      } else {
        indicator.classList.remove("active")
      }
    })
  }

  // Listen for scroll events to update indicators
  viewport.addEventListener("scroll", () => {
    clearTimeout(viewport.scrollTimeout)
    viewport.scrollTimeout = setTimeout(updateIndicators, 100)
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .product-discovery1-container1 {
            display: contents;
          }
          .product-discovery1-container2 {
            display: none;
          }
          .product-discovery1-container3 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default ProductDiscovery1
