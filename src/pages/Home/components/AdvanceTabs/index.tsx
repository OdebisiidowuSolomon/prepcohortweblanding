/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function HomeAdvanceTabs() {
  return (
    // <!-- Start Advance Tab  -->
    <div
      className="rbt-advance-tab-area splash-layout-presentation pb--40 bg-color-white"
      style={{ marginTop: 100 }}
    >
      <div className="wrapper">
        <div className="container">
          <div className="row mb--60">
            <div className="col-lg-12">
              <div className="section-title text-center">
                {/* <span className="subtitle bg-secondary-opacity">
                  You Can Customize Everything
                </span> */}
                <h2 className="title">
                  Take your Learning to The
                  <span className="theme-gradient"> Next Level!</span>
                </h2>
                {/* <p className="description mt--20">
                  An all-in-one template with powerful features.
                </p> */}
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="splash-layout-presentation-box">
                <div className="row g-5">
                  <div className="col-lg-4 col-md-12 col-sm-12 col-12 mt_md--30 mt_sm--30 order-2 order-lg-1">
                    <div className="section-title text-start mb--60">
                      <span className="subtitle bg-primary-opacity">
                        All in One for Education
                      </span>
                      <h4 className="title">Layout Ready, Build Everything.</h4>
                    </div>

                    <div className="advance-tab-button advance-tab-button-1">
                      <ul
                        className="nav nav-tabs splash-nav-tabs tab-button-list"
                        id="splashLayoutTab"
                        role="tablist"
                      >
                        <li className="nav-item active-nav" role="presentation">
                          <a
                            href="https://rainbowit.net/html/histudy/index.html#"
                            className="nav-link tab-button"
                            id="layouttab1-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#layouttab1"
                            role="tab"
                            aria-controls="layouttab1"
                            aria-selected="false"
                          >
                            <div className="tab">
                              <h4 className="title">
                                <img
                                  src="/images/online-course.png"
                                  alt="advance-tab-image"
                                />
                                Relevant And Up-To-Date Courses.
                              </h4>
                            </div>
                          </a>
                        </li>

                        <li className="nav-item" role="presentation">
                          <a
                            href="https://rainbowit.net/html/histudy/index.html#"
                            className="nav-link tab-button active"
                            id="layouttab2-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#layouttab2"
                            role="tab"
                            aria-controls="layouttab2"
                            aria-selected="true"
                          >
                            <div className="tab">
                              <h4 className="title">
                                <img
                                  src="/images/header.png"
                                  alt="advance-tab-image"
                                />
                                Abundant Question Banks
                              </h4>
                            </div>
                          </a>
                        </li>

                        <li className="nav-item" role="presentation">
                          <a
                            href="https://rainbowit.net/html/histudy/index.html#"
                            className="nav-link tab-button"
                            id="layouttab3-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#layouttab3"
                            role="tab"
                            aria-controls="layouttab3"
                            aria-selected="false"
                          >
                            <div className="tab">
                              <h4 className="title">
                                <img
                                  src="/images/curve.png"
                                  alt="advance-tab-image"
                                />
                                Performance Analysis Report
                              </h4>
                            </div>
                          </a>
                        </li>

                        <li className="nav-item" role="presentation">
                          <a
                            href="https://rainbowit.net/html/histudy/index.html#"
                            className="nav-link tab-button"
                            id="layouttab4-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#layouttab4"
                            role="tab"
                            aria-controls="layouttab4"
                            aria-selected="false"
                          >
                            <div className="tab">
                              <h4 className="title">
                                <img
                                  src="/images/web-programming.png"
                                  alt="advance-tab-image"
                                />
                                One-on-One with qualified Instructors
                              </h4>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-12 col-sm-12 col-12 order-1 order-lg-2">
                    <div className="tab-content">
                      <div
                        className="tab-pane fade advance-tab-content-1 active"
                        id="layouttab1"
                        role="tabpanel"
                        aria-labelledby="layouttab1-tab"
                      >
                        <div className="thumbnail">
                          <img
                            // src="/images/courses-layout.png"
                            style={{ height: "50%", width: "100%" }}
                            src="/images/courses-image.png"
                            alt="advance-tab-image"
                          />
                        </div>
                      </div>
                      <div
                        className="tab-pane fade advance-tab-content-1"
                        id="layouttab2"
                        role="tabpanel"
                        aria-labelledby="layouttab2-tab"
                      >
                        <div className="thumbnail">
                          <img
                            // src="/images/header-layout.png"
                            src="/images/courses-image.png"
                            alt="advance-tab-image"
                          />
                        </div>
                      </div>

                      <div
                        className="tab-pane fade advance-tab-content-1"
                        id="layouttab3"
                        role="tabpanel"
                        aria-labelledby="layouttab3-tab"
                      >
                        <div className="thumbnail">
                          <img
                            src="/images/elements.png"
                            alt="advance-tab-image"
                          />
                        </div>
                      </div>

                      <div
                        className="tab-pane fade advance-tab-content-1"
                        id="layouttab4"
                        role="tabpanel"
                        aria-labelledby="layouttab4-tab"
                      >
                        <div className="thumbnail">
                          <img src="/images/code.png" alt="advance-tab-image" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <ul className="plan-offer-list d-block d-sm-flex justify-content-center">
                <li>
                  <i className="feather-check"></i>Free future template updates
                </li>
                <li>
                  <i className="feather-check"></i>Mix and Match Section Blocks
                </li>
                <li>
                  <i className="feather-check"></i>Quality checked by Envato
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <!-- End Advance Tab  -->
  );
}

export default HomeAdvanceTabs;
