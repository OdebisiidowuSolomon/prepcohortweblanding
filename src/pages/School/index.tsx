import HeroBanner from "./components/HeroBanner";
import InterwovenPractice from "./components/InterwovenPractice";
import FacilitatedTeaching from "./components/FacilitatedTeaching";
import AccessibleOnMultipleDevices from "./components/AccessibleOnMultipleDevices";
import StaffAppointment from "./components/StaffAppointment";
import ReachMoreStudents from "./components/ReachMoreStudents";
import EffortlessGradingSystem from "./components/EffortlessGradingSystem";
import AITeachingSupport from "./components/AITeachingSupport";
import Testimonials from "./components/Testimonials";
import WhatWeOffer from "./components/WhatWeOffer/index";
import WhyPrepCohort from "./components/WhyPrepCohort";
import MultipleExamPlatform from "./components/MultipleExamPlatform";
import ProvenStatistics from "./components/ProvenStatistics";

export default function SchoolPage() {
  return (
    <div id="page" className="site page-wrapper">
      {/* <!-- the loop --> */}
      <div
        data-elementor-type="wp-post"
        data-elementor-id="1165"
        className="elementor elementor-1165"
      >
        <section
          className="elementor-section elementor-top-section elementor-element elementor-element-0a8429a elementor-section-full_width elementor-section-height-default elementor-section-height-default"
          data-id="0a8429a"
          data-element_type="section"
        >
          <div className="elementor-container elementor-column-gap-no">
            <div
              className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-56aa38d"
              data-id="56aa38d"
              data-element_type="column"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <div
                  className="elementor-element elementor-element-cbfe087 elementor-widget elementor-widget-eduact-header"
                  data-id="cbfe087"
                  data-element_type="widget"
                  data-widget_type="eduact-header.default"
                >
                  <div className="elementor-widget-container">
                    <header className="main-header">
                      <nav className="main-menu">
                        <div className="container">
                          <div className="main-menu__logo logo-retina">
                            <a href="#" className="custom-logo" id="black">
                              {/* <!-- src="/images/eduAct-2.png" --> */}
                              <img
                                decoding="async"
                                width="50"
                                height="50"
                                alt="Eduact"
                                src="/images/PClogo.png"
                                style={{ height: "50px", objectFit: "contain" }}
                              />
                              <span>
                                <b>Prep</b>
                              </span>
                              Cohort
                            </a>
                          </div>
                          {/* <!-- /.main-menu__nav --> */}
                          <div
                            className="main-menu__right"
                            style={{ marginLeft: "auto" }}
                          >
                            {/* <a
                              href="#"
                              className="main-menu__toggler mobile-nav__toggler"
                            >
                              <i className="fa fa-bars"></i>{" "}
                            </a> */}
                            {/* <!-- /.mobile menu btn --> */}
                            <a
                              href="/"
                              className="main-menu__login"
                              style={{ fontSize: "16px", color: "black" }}
                              id="black"
                            >
                              For Students{" "}
                            </a>
                            {/* <!-- /.login btn --> */}
                            <a
                              href="https://console.prepcohort.com/"
                              className="eduact-btn"
                            >
                              <span className="eduact-btn__curve"></span> Join
                              now
                            </a>
                            {/* ><!-- /.contact btn --> */}
                          </div>
                          {/* <!-- /.main-menu__right --> */}
                        </div>
                        {/* <!-- /.container --> */}
                      </nav>
                      {/* <!-- /.main-menu --> */}
                    </header>
                    {/* <!-- /.main-header --> */}
                    <div
                      className="stricky-header stricked-menu main-menu"
                      style={{ backgroundColor: "white" }}
                    >
                      <div className="sticky-header__content"></div>
                      {/* <!-- /.sticky-header__content --> */}
                    </div>
                    {/* <!-- /.stricky-header --> */}

                    <div className="mobile-nav__wrapper">
                      <div className="mobile-nav__overlay mobile-nav__toggler"></div>
                      {/* <!-- /.mobile-nav__overlay --> */}
                      <div className="mobile-nav__content">
                        <span className="mobile-nav__close mobile-nav__toggler">
                          <i className="fa fa-times"></i>
                        </span>

                        <div className="logo-box">
                          <a
                            href="/"
                            className="custom-logo !text-[#1F4497]"
                            aria-label="logo image"
                          >
                            <img
                              decoding="async"
                              width="183"
                              height="48"
                              src="/images/PClogo.png"
                              alt="Eduact"
                              style={{ height: "48px", objectFit: "contain" }}
                            />
                            <span>
                              <b>Prep</b>
                            </span>
                            Cohort
                          </a>
                        </div>
                        {/* <!-- /.logo-box --> */}
                        <div className="mobile-nav__container"></div>
                        {/* <!-- /.mobile-nav__container --> */}
                        <ul className="mobile-nav__contact list-unstyled ml-0">
                          <li>
                            <i className="fa fa-envelope"></i>
                            <a
                              href="mailto:info@prepcohort.com"
                              className="text-black"
                            >
                              info@prepcohort.com
                            </a>
                          </li>
                          <li>
                            <i className="fa fa-phone-alt"></i>
                            <a href="tel:09033746143" className="text-black">
                              +(234) 903-374-6143
                            </a>
                          </li>
                        </ul>
                        {/* <!-- /.mobile-nav__contact --> */}
                        <div className="mobile-nav__top">
                          <div className="mobile-nav__social">
                            <a href="#" className="fab fa-facebook-f"></a>
                            <a href="#" className="fab fa-twitter"></a>
                            <a href="#" className="fab fa-pinterest"></a>
                            <a href="#" className="fab fa-instagram"></a>
                          </div>
                          {/* <!-- /.mobile-nav__social --> */}
                        </div>
                        {/* <!-- /.mobile-nav__top --> */}
                      </div>
                      {/* <!-- /.mobile-nav__content --> */}
                    </div>

                    {/* <!-- back-to-top-start --> */}
                    <a href="#" className="scroll-top">
                      <svg
                        className="scroll-top__circle"
                        width="100%"
                        height="100%"
                        viewBox="-1 -1 102 102"
                      >
                        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* <!-- end of the loop --> */}

      <div
        data-elementor-type="wp-page"
        data-elementor-id="1135"
        className="elementor elementor-1135"
      >
        <HeroBanner />
        <WhatWeOffer />
        <FacilitatedTeaching />
        <InterwovenPractice />
        <AccessibleOnMultipleDevices />
        <WhyPrepCohort />
        <ProvenStatistics />
        <MultipleExamPlatform />
        <StaffAppointment />
        <ReachMoreStudents />
        <EffortlessGradingSystem />
        <AITeachingSupport />
        {/* <OurGoals /> */}
        {/* <PlungeIntoPracticeMode /> */}
        {/* <OurAmazingSection /> */}
        {/* <OurCourses /> */}
        {/* <QuestionBankSlider /> */}
        {/* <WhyStudyWithUs /> */}
        {/* <OurCategories /> */}
        {/* <QualifiedInstructor /> */}
        {/* <AbundantQuestionBank /> */}
        {/* <AiAcademicSupport /> */}
        <Testimonials />
        {/* <DownloadMobileVersion /> */}
      </div>
    </div>
  );
}
