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
              <div className="client-group-image">
                <img
                  src="./images/group-image.png"
                  alt="group image"
                  className="mb--30"
                />
              </div>
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
                      What is Histudy? How does it work?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExamplea1"
                  >
                    <div className="accordion-body card-body">
                      Education HTML Template – Histudy is made for Education
                      Website, Course School, Courses Hub, College, Academy,
                      University, School, Kindergarten, Online School, Classic
                      Lms, University Status, Instructor Portfolio, Language
                      Academy, Gym Coaching, Online Course, Single Course,
                      Marketplace, University Classic, Home Elegant, Home
                      Technology etc.
                    </div>
                  </div>
                </div>

                <div className="accordion-item card">
                  <h2 className="accordion-header card-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      How can I get the customer support?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExamplea1"
                  >
                    <div className="accordion-body card-body">
                      After purchasing the product need you any support you can
                      share with us with create support ticket here:
                      <a
                        target="_blank"
                        href="https://support.rainbowit.net/support/login"
                        rel="noreferrer"
                      >
                        Support Center
                      </a>
                      Our support team will contact with you soon
                    </div>
                  </div>
                </div>

                <div className="accordion-item card">
                  <h2
                    className="accordion-header card-header"
                    id="headingThree"
                  >
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Can I get update regularly and For how long do I get
                      updates?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExamplea1"
                  >
                    <div className="accordion-body card-body">
                      Yes, We will get update the Histudy. And you can get it
                      any time. Next time we will comes with more feature. You
                      can be get update for unlimited times. Our dedicated team
                      works for update.
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
                      Can I change any Elements as I like?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionExamplea1"
                  >
                    <div className="accordion-body card-body">
                      Yes, You can change any Elements as you like. And By the
                      way you can build your website which you are choose.
                    </div>
                  </div>
                </div>

                <div className="accordion-item card">
                  <h2 className="accordion-header card-header" id="headingFive">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      Can I build a complete project with this template?
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFive"
                    data-bs-parent="#accordionExamplea1"
                  >
                    <div className="accordion-body card-body">
                      Yes, Why not. You can build a project and complete website
                      as you are like.More component are available include in
                      this templete. And you can be use it following
                      documentation.
                    </div>
                  </div>
                </div>

                <div className="accordion-item card">
                  <h2 className="accordion-header card-header" id="headingSix">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSix"
                      aria-expanded="false"
                      aria-controls="collapseSix"
                    >
                      Do you have an online documentation?
                    </button>
                  </h2>
                  <div
                    id="collapseSix"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingSix"
                    data-bs-parent="#accordionExamplea1"
                  >
                    <div className="accordion-body card-body">
                      Yes, please go to our online documentation via
                      <a href="https://rainbowit.net/html/histudy/index.html#">
                        click here
                      </a>
                      .
                    </div>
                  </div>
                </div>

                <div className="accordion-item card">
                  <h2
                    className="accordion-header card-header"
                    id="headingSeven"
                  >
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSeven"
                      aria-expanded="false"
                      aria-controls="collapseSeven"
                    >
                      How can I remove unwanted plugins?
                    </button>
                  </h2>
                  <div
                    id="collapseSeven"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingSeven"
                    data-bs-parent="#accordionExamplea1"
                  >
                    <div className="accordion-body card-body">
                      <p>
                        All third-party plugin JS files are located in
                        <code className="folder">src/assets/js/vendor</code> and
                        their CSS files are in
                        <code className="folder">src/assets/css/vendor</code>.
                        Just remove unwanted vendor JS / CSS files from vendor
                        folders and then remove unwanted functions from
                        <code className="file">src/assets/js/main.js</code>.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item card">
                  <h2
                    className="accordion-header card-header"
                    id="headingEight"
                  >
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseEight"
                      aria-expanded="false"
                      aria-controls="collapseEight"
                    >
                      How can I remove unwanted CSS?
                    </button>
                  </h2>
                  <div
                    id="collapseEight"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingEight"
                    data-bs-parent="#accordionExamplea1"
                  >
                    <div className="accordion-body card-body">
                      <p>
                        Bootstrap SCSS imports are located in
                        <code className="file">
                          src/assets/css/vendor/bootstrap.min.css
                        </code>
                        and template SCSS imports are in
                        <code className="file">src/assets/scss/style.scss</code>
                        . Remove or comment any unwanted import and recompile.
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
    /* <!-- End Accordion Area  --> */
  );
}

export default HomeAccordionArea;
