import React from "react";

function PlungeIntoPracticeMode() {
  return (
    <>
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-7013fc5d elementor-section-full_width elementor-section-height-default elementor-section-height-default"
        data-id="7013fc5d"
        data-element_type="section"
      >
        <div className="elementor-container elementor-column-gap-no">
          <div
            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-27d04350"
            data-id="27d04350"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-1f0706b9 elementor-widget elementor-widget-eduact-video"
                data-id="1f0706b9"
                data-element_type="widget"
                data-widget_type="eduact-video.default"
              >
                <div className="elementor-widget-container">
                  {/* <!-- Video Start --> */}
                  <section
                    className="video-two"
                    data-jarallax=""
                    data-speed="0.3"
                    data-imgposition="50% -100%"
                  >
                    <div
                      className="video-two__bg jarallax-img"
                      style={{
                        // backgroundImage: "url(/images/video-bg-2-1-scaled.jpg)",
                        backgroundImage: "url(/images/PlungeInToPracticeImg.png)",
                      }}
                    ></div>
                    <div
                      className="video-two__shape"
                      style={{
                        backgroundImage: "url(/images/video-shape-3-1.png)",
                      }}
                    ></div>
                    <div className="container">
                      <div className="row d-flex align-items-center">
                        <div
                          className="col-xl-6 col-md-7 wow fadeInLeft centerDiv"
                          data-wow-delay="200ms"
                        >
                          <h3 className="video-two__title">
                            Plunge into Practice Mode
                          </h3>
                          <h6
                            style={{
                              fontSize: "22px",
                              fontWeight: 400,
                              color: "white",
                              margin: "2rem 0",
                            }}
                          >
                            Access diverse question bank that provides a wide{" "}
                            <br />
                            range of practice questions to reinforce your <br />
                            understanding and prepare you thoroughly for exams
                          </h6>
                          <a
                            href="https://s4a-web-next-ten.vercel.app/explore"
                            className="eduact-btn eduact-btn-second"
                          >
                            <span className="eduact-btn__curve"></span>Start
                            Practising Now<i className="icon-arrow"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </section>
                  {/* <!-- Video End --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PlungeIntoPracticeMode;
