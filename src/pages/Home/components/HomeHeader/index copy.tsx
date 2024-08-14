/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function HomeHeader() {
  return (
    <>
      {/* <!-- Start Header Area  --> */}
      <header className="rbt-header rbt-header-10">
        <div className="rbt-sticky-placeholder"></div>
        <div className="rbt-header-wrapper header-space-betwween header-transparent header-sticky dark-header-transparent">
          <div className="container-fluid">
            <div className="mainbar-row rbt-navigation-start align-items-center">
              <div className="header-left rbt-header-content">
                <div className="header-info">
                  <div className="logo logo-dark">
                    <a href="">
                      <img
                        src="/images/PClogo.png"
                        alt="Education Logo Images"
                      />
                    </a>
                  </div>
                  <div className="logo d-none logo-light">
                    <p className="text-5xl my-10">Prep Cohort</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- End Header Area  --> */}

      {/* <!-- Start Slider Area  --> */}
      <div className="rbt-splash-slider d-flex align-items-center">
        <div className="wrapper">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-12 col-xl-6 order-2 order-xl-1">
                <div className="inner">
                  <h1 className="title">
                    Have your dream site in minutes <br />
                    for
                    <span className="cd-headline slide">
                      <span className="cd-words-wrapper">
                        <b className="theme-gradient is-hidden">
                          Online Course.
                        </b>
                        <b className="theme-gradient is-hidden">Like Udemy.</b>
                        <b className="theme-gradient is-hidden">School.</b>
                        <b className="theme-gradient is-hidden">University.</b>
                        <b className="theme-gradient is-visible">
                          High School.
                        </b>
                        <b className="theme-gradient is-hidden">
                          Kindergarden.
                        </b>
                      </span>
                    </span>
                  </h1>
                  <p className="description">
                    The most <strong>powerful</strong> yet the
                    <strong>easiest</strong> template ever.
                  </p>
                </div>
              </div>
              <div className="col-lg-12 col-xl-6 order-1 order-xl-2">
                <div className="video-popup-wrapper">
                  <img
                    className="w-100 rbt-radius"
                    src="./images/banner-group-image.png"
                    alt="Video Images"
                  />
                  <a
                    className="rbt-btn rounded-player-2 popup-video position-to-top with-animation d-none"
                    href="https://www.youtube.com/watch?v=nA1Aqp0sPQo"
                  >
                    <span className="play-icon"></span>
                  </a>
                  <div className="banner-group-shape">
                    <div
                      className="shape-image scene shape-4"
                      // style="
                      //   transform: translate3d(0px, 0px, 0px) rotate(0.0001deg);
                      //   transform-style: preserve-3d;
                      //   backface-visibility: hidden;
                      //   pointer-events: none;
                      // "
                    >
                      <span
                        data-depth="2"
                        // style="
                        //   transform: translate3d(-0.3px, 9.9px, 0px);
                        //   transform-style: preserve-3d;
                        //   backface-visibility: hidden;
                        //   position: relative;
                        //   display: block;
                        //   left: 0px;
                        //   top: 0px;
                        // "
                      >
                        <img src="./images/shape-4.png" alt="Shape Images" />
                      </span>
                    </div>
                    <div
                      className="shape-image scene shape-5"
                      //   style="
                      //   transform: translate3d(0px, 0px, 0px) rotate(0.0001deg);
                      //   transform-style: preserve-3d;
                      //   backface-visibility: hidden;
                      //   pointer-events: none;
                      // "
                    >
                      <span
                        data-depth="-2"
                        //   style="
                        //   transform: translate3d(0.4px, -15.6px, 0px);
                        //   transform-style: preserve-3d;
                        //   backface-visibility: hidden;
                        //   position: relative;
                        //   display: block;
                        //   left: 0px;
                        //   top: 0px;
                        // "
                      >
                        <img src="./images/shape-5.png" alt="Shape Images" />
                      </span>
                    </div>
                    <div
                      className="shape-image scene shape-6"
                      //   style="
                      //   transform: translate3d(0px, 0px, 0px) rotate(0.0001deg);
                      //   transform-style: preserve-3d;
                      //   backface-visibility: hidden;
                      //   pointer-events: none;
                      // "
                    >
                      <span
                        data-depth="5"
                        //   style="
                        //   transform: translate3d(-0.9px, 37.5px, 0px);
                        //   transform-style: preserve-3d;
                        //   backface-visibility: hidden;
                        //   position: relative;
                        //   display: block;
                        //   left: 0px;
                        //   top: 0px;
                        // "
                      >
                        <img src="./images/shape-6.png" alt="Shape Images" />
                      </span>
                    </div>
                    <div
                      className="shape-image scene shape-7"
                      //   style="
                      //   transform: translate3d(0px, 0px, 0px) rotate(0.0001deg);
                      //   transform-style: preserve-3d;
                      //   backface-visibility: hidden;
                      //   pointer-events: none;
                      // "
                    >
                      <span
                        data-depth="-3"
                        //   style="
                        //   transform: translate3d(1.3px, -46.7px, 0px);
                        //   transform-style: preserve-3d;
                        //   backface-visibility: hidden;
                        //   position: relative;
                        //   display: block;
                        //   left: 0px;
                        //   top: 0px;
                        // "
                      >
                        <img src="./images/shape-7.png" alt="Shape Images" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="row">
                <div className="splash-service-main position-relative">
                  <div className="service-wrapper service-white">
                    <div className="row g-0">
                      <div className="col-lg-6 col-xl-3 col-md-6 col-sm-6 col-12 service__style--column">
                        <div className="service service__style--1">
                          <div className="icon">
                            <img
                              src="./images/icons-01.png"
                              alt="Icon Images"
                            />
                          </div>
                          <div className="content">
                            <h4 className="title">Fast Performance</h4>
                            <p>
                              Optimized for a smaller build size, faster dev
                              compilation and dozens of other improvements.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-6 col-xl-3 col-md-6 col-sm-6 col-12 service__style--column">
                        <div className="service service__style--1">
                          <div className="icon">
                            <img
                              src="./images/icons-02.png"
                              alt="Icon Images"
                            />
                          </div>
                          <div className="content">
                            <h4 className="title">Perfect Responsive</h4>
                            <p>
                              Our template is full perfect for all device. You
                              can visit our template all device easily.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-6 col-xl-3 col-md-6 col-sm-6 col-12 service__style--column">
                        <div className="service service__style--1">
                          <div className="icon">
                            <img
                              src="./images/icons-03.png"
                              alt="Icon Images"
                            />
                          </div>
                          <div className="content">
                            <h4 className="title">
                              Fast &amp; Friendly Support
                            </h4>
                            <p>
                              We are provide 24 hours support for all
                              clients.You can purchase without hesitation.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-6 col-xl-3 col-md-6 col-sm-6 col-12 service__style--column">
                        <div className="service service__style--1">
                          <div className="icon">
                            <img
                              src="./images/icons-04.png"
                              alt="Icon Images"
                            />
                          </div>
                          <div className="content">
                            <h4 className="title">Easy to Use</h4>
                            <p>
                              Create your own custom template or section by
                              copying, pasting, and assembling.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shape-wrapper">
          <div className="shape-image shape-1">
            <img src="./images/shape-1.png" alt="Shape Images" />
          </div>
          <div className="shape-image shape-2">
            <img src="./images/shape-2.png" alt="Shape Images" />
          </div>
          <div className="shape-image shape-3">
            <img src="./images/shape-3.png" alt="Shape Images" />
          </div>
        </div>
      </div>
      {/* <!-- End Slider Area  --> */}
    </>
  );
}

export default HomeHeader;
