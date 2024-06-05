import { AmazingFeatures } from "./components/AmazingFeatures";

function OurAmazingSection() {
  return (
    <>
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-60a3c21e elementor-section-full_width elementor-section-height-default elementor-section-height-default"
        data-id="60a3c21e"
        data-element_type="section"
      >
        <div className="elementor-container elementor-column-gap-no">
          <div
            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-4f2766b3"
            data-id="4f2766b3"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-2a9b299b elementor-widget elementor-widget-eduact-about"
                data-id="2a9b299b"
                data-element_type="widget"
                id="about"
                data-widget_type="eduact-about.default"
              >
                <div className="elementor-widget-container">
                  {/* <!-- About Start --> */}
                  <section className="about-one" style={{ paddingBottom: 0 }}>
                    <div className="container">
                      <div className="row">
                        <div className="col-xl-6">
                          <div
                            className="about-one__thumb wow fadeInLeft"
                            data-wow-delay="100ms"
                          >
                            {/* <!-- about thumb start --> */}
                            <div
                              className="about-one__thumb__one eduact-tilt"
                              data-tilt-options='{ "glare": false, "maxGlare": 0, "maxTilt": 2, "speed": 700, "scale": 1 }'
                            >
                              {/* <!-- src="/images/about-1-1.png" --> */}
                              <img
                                decoding="async"
                                // src="/images/Mockup_Web1.png"
                                src="/images/laptopandphone.png"
                                alt="alt"
                                title="about-1-1"
                              />
                            </div>
                            <div
                              className="about-one__thumb__shape1 wow zoomIn"
                              data-wow-delay="300ms"
                            >
                              <img
                                decoding="async"
                                src="/images/about-shape-1-1.png"
                                alt="alt"
                                title="about-shape-1-1"
                              />
                            </div>
                            <div
                              className="about-one__thumb__shape2 wow zoomIn"
                              data-wow-delay="400ms"
                            >
                              <img
                                decoding="async"
                                src="/images/about-shape-1-2.png"
                                alt="alt"
                                title="about-shape-1-2"
                              />
                            </div>
                          </div>
                          {/* <!-- about thumb end --> */}
                        </div>
                        <AmazingFeatures />
                      </div>
                    </div>
                  </section>
                  {/* <!-- About End --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OurAmazingSection;
