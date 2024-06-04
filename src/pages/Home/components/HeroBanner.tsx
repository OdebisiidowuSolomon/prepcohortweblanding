import React from "react";

function HeroBanner() {
  return (
    <>
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-42bc0394 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
        data-id="42bc0394"
        data-element_type="section"
      >
        <div className="elementor-container elementor-column-gap-no">
          <div
            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-719cfa13"
            data-id="719cfa13"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-40ca15f7 elementor-widget elementor-widget-eduact-hero-area-slider"
                data-id="40ca15f7"
                data-element_type="widget"
                id="home"
                data-widget_type="eduact-hero-area-slider.default"
              >
                <div className="elementor-widget-container">
                  {/* <!--Hero Banner Start--> */}
                  <section
                    className="hero-banner"
                    style={{
                      backgroundImage: "url(images/banner-bg-1.png)",
                      background: "#F4F4F4",
                    }}
                  >
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="hero-banner__content">
                            <div
                              className="hero-banner__bg-shape1 wow zoomIn"
                              data-wow-delay="300ms"
                            >
                              <div className="hero-banner__bg-round">
                                <div className="hero-banner__bg-round-border"></div>
                              </div>
                            </div>
                            <h2
                              className="hero-banner__title wow fadeInUp text-black"
                              data-wow-delay="400ms"
                            >
                              Access expert guidance <br />
                              and tailored resources for exam success
                            </h2>
                            <p
                              className="hero-banner__text wow fadeInUp text-black"
                              data-wow-delay="500ms"
                            >
                              Empower your future through education!
                              <br />
                              Join thousands learning together on Prepcohort.
                              <br />
                              Practice along as you study,
                              <img
                                decoding="async"
                                src="/images/banner-1-shape-1.png"
                                alt="alt"
                                title="banner-1-shape-1"
                              />
                            </p>
                            <div
                              className="hero-banner__btn wow fadeInUp"
                              data-wow-delay="600ms"
                            >
                              <a
                                href="https://s4a-web-next-ten.vercel.app/explore?"
                                className="eduact-btn eduact-btn-second"
                              >
                                <span className="eduact-btn__curve"></span>Start
                                Practicing<i className="icon-arrow"></i>
                              </a>
                              <a
                                href="https://s4a-web-next-ten.vercel.app/"
                                className="eduact-btn text-black hover:text-[#1F4497]"
                              >
                                <span className="eduact-btn__curve"></span>Join
                                a School<i className="icon-arrow"></i>
                              </a>
                            </div>
                            {/* <!-- banner-btn --> */}
                          </div>
                          {/* <!-- banner-content --> */}
                        </div>
                        <div className="col-lg-6">
                          <div
                            className="hero-banner__thumb wow fadeInUp"
                            data-wow-delay="700ms"
                          >
                            <img
                              decoding="async"
                              // src="/images/banner-1-1.png"
                              src="/images/ForPrepCohort1.png"
                              alt="alt"
                              title="banner-1-1"
                            />
                            <div
                              className="hero-banner__cap wow slideInDown"
                              data-wow-delay="800ms"
                            >
                              <img
                                decoding="async"
                                src="/images/banner-cap.png"
                                alt="alt"
                              />
                            </div>
                            {/* <!-- banner-cap --> */}
                            <div
                              className="hero-banner__star wow slideInDown"
                              data-wow-delay="850ms"
                            >
                              <img
                                decoding="async"
                                src="/images/banner-star.png"
                                alt=""
                              />
                            </div>
                            {/* <!-- banner-star --> */}
                            <div
                              className="hero-banner__map wow slideInDown"
                              data-wow-delay="900ms"
                            >
                              <img
                                decoding="async"
                                src="/images/banner-map.png"
                                alt="alt"
                              />
                            </div>
                            {/* <!-- banner-map --> */}

                            {/* <!-- banner-video --> */}
                            <div
                              className="hero-banner__book wow slideInUp"
                              data-wow-delay="1000ms"
                            >
                              <img
                                decoding="async"
                                src="/images/banner-book.png"
                                alt=""
                              />
                            </div>
                            {/* <!-- banner-book --> */}
                            <div
                              className="hero-banner__star2 wow slideInUp"
                              data-wow-delay="1050ms"
                            >
                              <img
                                decoding="async"
                                src="/images/banner-star2.png"
                                alt="alt"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <a
                        href="https://study4as.com/"
                        style={{ position: "relative", zIndex: 10000000 }}
                      >
                        <div id="powered-div">
                          <p className="!text-[#1F4497]">
                            Powered by
                            <span style={{ color: "#1F4497" }}> Study4AS</span>
                          </p>
                        </div>
                      </a>
                    </div>
                    <div
                      className="hero-banner__border wow fadeInUp"
                      data-wow-delay="1100ms"
                    ></div>
                    {/* <!-- banner-border --> */}
                  </section>
                  {/* <!--Hero Banner End--> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroBanner;
