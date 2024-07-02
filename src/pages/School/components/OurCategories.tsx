import React from "react";
import { consoleUrl } from "../../../services/graphqlClient";

function OurCategories() {
  return (
    <>
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-4499376 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
        data-id="4499376"
        data-element_type="section"
      >
        <div className="elementor-container elementor-column-gap-no">
          <div
            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-114481f1"
            data-id="114481f1"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-429c6cd2 elementor-widget elementor-widget-eduact-category-info"
                data-id="429c6cd2"
                data-element_type="widget"
                data-widget_type="eduact-category-info.default"
              >
                <div className="elementor-widget-container">
                  {/* <!-- Category Start --> */}
                  <section
                    className="category-three"
                    style={{
                      backgroundImage: "url(images/category-bg-3-1.jpg)",
                    }}
                  >
                    <div
                      className="container wow fadeInUp"
                      data-wow-delay="200ms"
                    >
                      <div className="section-title text-center">
                        <h5 className="section-title__tagline">
                          Our Categories
                          <svg
                            className="arrow-svg"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 55 13"
                          >
                            <g clip-path="url(#clip0_324_36194)">
                              <path d="M10.5406 6.49995L0.700562 12.1799V8.56995L4.29056 6.49995L0.700562 4.42995V0.819946L10.5406 6.49995Z"></path>
                              <path d="M25.1706 6.49995L15.3306 12.1799V8.56995L18.9206 6.49995L15.3306 4.42995V0.819946L25.1706 6.49995Z"></path>
                              <path d="M39.7906 6.49995L29.9506 12.1799V8.56995L33.5406 6.49995L29.9506 4.42995V0.819946L39.7906 6.49995Z"></path>
                              <path d="M54.4206 6.49995L44.5806 12.1799V8.56995L48.1706 6.49995L44.5806 4.42995V0.819946L54.4206 6.49995Z"></path>
                            </g>
                          </svg>
                        </h5>
                        <h2 className="section-title__title">
                          Favorite Categories to Learn From
                        </h2>
                      </div>
                      {/* <!-- section-title --> */}
                      <div className="row">
                        <div className="col-lg-3 col-md-6">
                          <div className="category-three__item category-three__item-two">
                            <div className="category-three__thumb">
                              <img
                                decoding="async"
                                src="/images/category-3-1-1.png"
                                alt="alt"
                                title="category-3-1"
                              />
                            </div>
                            {/* <!-- /.category-thumb --> */}
                            <div className="category-three__icon">
                              <span
                                aria-hidden="true"
                                className="icon-portfolio"
                              ></span>
                            </div>
                            {/* <!-- /.category-icon --> */}
                            <h3 className="category-three__title">
                              <a href={`${consoleUrl}`}>Institutions</a>
                            </h3>
                            {/* <!-- /.category-title --> */}
                          </div>
                          {/* <!-- /.category-card-one --> */}
                        </div>
                        <div className="col-lg-3 col-md-6">
                          <div className="category-three__item">
                            <div className="category-three__thumb">
                              <img
                                decoding="async"
                                src="/images/category-3-2-1.png"
                                alt="alt"
                                title="category-3-2"
                              />
                            </div>
                            {/* <!-- /.category-thumb --> */}
                            <div className="category-three__icon">
                              <span
                                aria-hidden="true"
                                className="icon-computer-science"
                              ></span>
                            </div>
                            {/* <!-- /.category-icon --> */}
                            <h3 className="category-three__title">
                              <a href={`${consoleUrl}`}>Courses</a>
                            </h3>
                            {/* <!-- /.category-title --> */}
                          </div>
                          {/* <!-- /.category-card-one --> */}
                        </div>
                        <div className="col-lg-3 col-md-6">
                          <div className="category-three__item">
                            <div className="category-three__thumb">
                              <img
                                decoding="async"
                                src="/images/category-3-3-1.png"
                                alt="alt"
                                title="category-3-3"
                              />
                            </div>
                            {/* <!-- /.category-thumb --> */}
                            <div className="category-three__icon">
                              <span
                                aria-hidden="true"
                                className="icon-chart-up"
                              ></span>
                            </div>
                            {/* <!-- /.category-icon --> */}
                            <h3 className="category-three__title">
                              <a href={`${consoleUrl}`}>Question Banks</a>
                            </h3>
                            {/* <!-- /.category-title --> */}
                          </div>
                          {/* <!-- /.category-card-one --> */}
                        </div>
                        <div className="col-lg-3 col-md-6">
                          <div className="category-three__item category-three__item-four">
                            <div className="category-three__thumb">
                              <img
                                decoding="async"
                                src="/images/category-3-4-1.png"
                                alt="alt"
                                title="category-3-4"
                              />
                            </div>
                            {/* <!-- /.category-thumb --> */}
                            <div className="category-three__icon">
                              <span
                                aria-hidden="true"
                                className="icon-art"
                              ></span>
                            </div>
                            {/* <!-- /.category-icon --> */}
                            <h3 className="category-three__title">
                              <a href={`${consoleUrl}`}>Topics</a>
                            </h3>
                            {/* <!-- /.category-title --> */}
                          </div>
                          {/* <!-- /.category-card-one --> */}
                        </div>
                      </div>
                    </div>
                  </section>
                  {/* <!-- Category End --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OurCategories;
