/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

function HomeAccordionArea() {
  // <!-- Start Accordion Area  -->
  return (
    <div className="rbt-accordion-area accordion-style-1 rbt-accordion-color-white bg-color-darker rbt-section-gapBottom pt--60 pt_sm--0 overflow-hidden position-relative top-circle-shape-top overlpping-call-to-action">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 offset-lg-2 col-sm-12">
            <div className="section-title text-center pb--60">
              <span className="subtitle bg-secondary-opacity">
                Check out our FAQ section to see if we can help.
              </span>
              <h2 className="title mb_sm--0 text-center color-white-off">
                Do you have any Question
              </h2>
            </div>
            <div className="rbt-accordion-style rbt-accordion-02 accordion">
              <div className="accordion" id="accordionExamplea1">
                <div className="accordion-item card">
                  <h2 className="accordion-header card-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      What is PrepCohort? How does it work?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExamplea1"
                  >
                    <div className="accordion-body card-body">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Sapiente iste harum optio recusandae! Neque at, adipisci
                      ipsa sequi corporis rem deleniti facilis.
                    </div>
                  </div>
                </div>

                <div className="accordion-item card">
                  <h2 className="accordion-header card-header" id="headingFour">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      What is PrepCohort? How does it work?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionExamplea1"
                  >
                    <div className="accordion-body card-body">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Doloremque assumenda eos eum recusandae, eveniet
                      dignissimos, nulla voluptas aut nisi labore officia?
                      Deleniti eligendi officia, dolore labore soluta iusto
                      nostrum culpa.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    /* <!-- End Accordion Area  --> */
  );
}

export default HomeAccordionArea;
