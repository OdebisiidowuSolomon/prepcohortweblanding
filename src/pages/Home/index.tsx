import HeroBanner from "./components/HeroBanner";
import OurGoals from "./components/OurGoals";
import PlungeIntoPracticeMode from "./components/PlungeIntoPracticeMode";
import OurAmazingSection from "./components/OurAmazingSection/index";
import MoreAmazingSection from "./components/MoreAmazingSection";
import MultipleExamPlatform from "./components/MultipleExamPlatform/index";
import WhyStudyWithUs from "./components/WhyStudyWithUs";
import OurCategories from "./components/OurCategories";
import ProvenStatistics from "./components/ProvenStatistics";
import InterwovenPractice from "./components/InterwovenPractice";
import QualifiedInstructor from "./components/QualifiedInstructor";
import AbundantQuestionBank from "./components/AbundantQuestionBank";
import Testimonials from "./components/Testimonials";
import DownloadMobileVersion from "./components/DownloadMobileVersion";
import AiAcademicSupport from "./components/AiAcademicSupport";

export default function HomePage() {
  return (
    <div id="page" className="site page-wrapper">
      <a className="skip-link screen-reader-text" href="#primary">
        Skip to content
      </a>

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
                              {/* <!-- <img
                            decoding="async"
                            width="183"
                            height="48"
                            alt="Eduact"
                            src="/images/PClogo.png"
                            style="height: 48px; object-fit: contain"
                          /> --> */}
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
                            <a
                              href="#"
                              className="main-menu__toggler mobile-nav__toggler"
                            >
                              <i className="fa fa-bars"></i>{" "}
                            </a>
                            {/* <!-- /.mobile menu btn --> */}
                            <a
                              href="#"
                              className="main-menu__login"
                              style={{ fontSize: "16px", color: "black" }}
                              id="black"
                            >
                              For Schools{" "}
                            </a>
                            {/* <!-- /.login btn --> */}
                            <a
                              href="https://s4a-web-next-ten.vercel.app/"
                              className="eduact-btn"
                            >
                              <span className="eduact-btn__curve"></span> Join
                              for Free
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
                            href="#"
                            className="custom-logo !text-[#1F4497]"
                            aria-label="logo image"
                          >
                            {/* <!-- <img
                          decoding="async"
                          width="183"
                          height="48"
                          src="/images/PClogo.png"
                          alt="Eduact"
                          style="height: 48px; object-fit: contain"
                        /> --> */}
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
                              href="mailto:needhelp@company.com"
                              className="text-black"
                            >
                              needhelp@company.com
                            </a>
                          </li>
                          <li>
                            <i className="fa fa-phone-alt"></i>
                            <a
                              href="tel:http://+92-(3680)---9850"
                              className="text-black"
                            >
                              +92 (3680) - 9850
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
        <OurGoals />
        <PlungeIntoPracticeMode />
        <OurAmazingSection />
        {/* <MoreAmazingSection /> */}
        <DownloadMobileVersion />
        <MultipleExamPlatform />
        <WhyStudyWithUs />
        <OurCategories />
        <ProvenStatistics />
        <InterwovenPractice />
        <QualifiedInstructor />
        <AbundantQuestionBank />
        <AiAcademicSupport />
        <Testimonials />
      </div>
    </div>
  );
}
