import React from "react";
import WhyPrepCohortContent from "./components/WhyPrepCohortContent";

function WhyPrepCohort() {
  return (
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
                <section
                  className="about-one"
                  style={{ backgroundColor: "#F9F9F9" }}
                >
                  <div className="container">
                    <div className="section-title text-center">
                      <h2 className="section-title__title">Why Prepcohort?</h2>
                      <p>
                        Opt for Prepcohort as your e-learning platform as we
                        provide outstanding features for your teaching
                        convenience
                      </p>
                    </div>
                    <div className="row">
                      <WhyPrepCohortContent />
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
  );
}

export default WhyPrepCohort;
