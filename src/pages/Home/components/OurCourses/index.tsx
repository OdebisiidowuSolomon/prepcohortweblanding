import { useCallback, useEffect, useState } from "react";
import useSearchService from "../../../../graphql/hooks/useSearch";
import SearchFilterBuilder from "../../../../libs/search-engine-filter";
import { CourseItem, courseData } from "./components";
import { SearchEngineResult, SearchItemType } from "../../../../intefaces";

type SearchEngineCourses = Pick<SearchEngineResult, "subjects">;

function OurCourses() {
  const searchFilter = SearchFilterBuilder.getInstance();
  const { runSearch } = useSearchService({});
  const [searchEngineCourses, setSearchEngineCourses] =
    useState<SearchEngineCourses | null>(null);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handleSubmit();
  }, []);

  const handleSubmit = useCallback(async () => {
    searchFilter.reset();
    searchFilter.addToSearchItems(SearchItemType.SUBJECTS);
    searchFilter.setSearchTerm("");

    setError("");
    setLoading(true);
    try {
      let listingVariable = {
        perPage: 30,
        page: 1,
      };

      const { data, error: respError } = await runSearch({
        ...listingVariable,
      });

      if (respError) {
        console.log(respError, "respError");
      }
      const res: SearchEngineCourses = data.searchEngine;

      if (res) {
        setSearchEngineCourses({ subjects: res.subjects });
        // console.log(res, "res");
      }
      setLoading(false);
    } catch (error: any) {
      console.log(error);
      // setError(error);
      setLoading(false);
    }
  }, [runSearch, searchFilter]);

  if (loading) {
    return <p className="mx-auto">Loading</p>;
  } else if (searchEngineCourses && searchEngineCourses.subjects.subjects) {
    return (
      <>
        <section
          className="elementor-section elementor-top-section elementor-element elementor-element-7f694064 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
          data-id="7f694064"
          data-element_type="section"
        >
          <div className="elementor-container elementor-column-gap-no">
            <div
              className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-2fe5e079"
              data-id="2fe5e079"
              data-element_type="column"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <div
                  className="elementor-element elementor-element-dfa329e elementor-widget elementor-widget-eduact-category-info"
                  data-id="dfa329e"
                  data-element_type="widget"
                  data-widget_type="eduact-category-info.default"
                >
                  <div className="elementor-widget-container">
                    {/* <!-- Category Start --> */}
                    <section
                      className="category-one"
                      // style={{ backgroundImage: "url(images/category-bg-1.jpg)" }}
                      style={{ paddingBottom:0 }}
                    >
                      <div className="container">
                        <div className="section-title">
                          <h5 className="section-title__tagline text-black">
                            Course (Recommended)
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 133 13"
                              fill="none"
                            >
                              <path
                                d="M9.76794 0.395L0.391789 9.72833C-0.130596 10.2483 -0.130596 11.095 0.391789 11.615C0.914174 12.135 1.76472 12.135 2.28711 11.615L11.6633 2.28167C12.1856 1.76167 12.1856 0.915 11.6633 0.395C11.1342 -0.131667 10.2903 -0.131667 9.76794 0.395Z"
                                fill="#F1F2FD"
                              ></path>
                              <path
                                d="M23.1625 0.395L13.7863 9.72833C13.2639 10.2483 13.2639 11.095 13.7863 11.615C14.3087 12.135 15.1593 12.135 15.6816 11.615L25.0578 2.28167C25.5802 1.76167 25.5802 0.915 25.0578 0.395C24.5287 -0.131667 23.6849 -0.131667 23.1625 0.395Z"
                                fill="#F1F2FD"
                              ></path>
                              <path
                                d="M36.5569 0.395L27.1807 9.72833C26.6583 10.2483 26.6583 11.095 27.1807 11.615C27.7031 12.135 28.5537 12.135 29.076 11.615L38.4522 2.28167C38.9746 1.76167 38.9746 0.915 38.4522 0.395C37.9231 -0.131667 37.0793 -0.131667 36.5569 0.395Z"
                                fill="#F1F2FD"
                              ></path>
                              <path
                                d="M49.9514 0.395L40.5753 9.72833C40.0529 10.2483 40.0529 11.095 40.5753 11.615C41.0976 12.135 41.9482 12.135 42.4706 11.615L51.8467 2.28167C52.3691 1.76167 52.3691 0.915 51.8467 0.395C51.3176 -0.131667 50.4738 -0.131667 49.9514 0.395Z"
                                fill="#F1F2FD"
                              ></path>
                              <path
                                d="M63.3459 0.395L53.9698 9.72833C53.4474 10.2483 53.4474 11.095 53.9698 11.615C54.4922 12.135 55.3427 12.135 55.8651 11.615L65.2413 2.28167C65.7636 1.76167 65.7636 0.915 65.2413 0.395C64.7122 -0.131667 63.8683 -0.131667 63.3459 0.395Z"
                                fill="#F1F2FD"
                              ></path>
                              <path
                                d="M76.7405 0.395L67.3643 9.72833C66.8419 10.2483 66.8419 11.095 67.3643 11.615C67.8867 12.135 68.7373 12.135 69.2596 11.615L78.6358 2.28167C79.1582 1.76167 79.1582 0.915 78.6358 0.395C78.1067 -0.131667 77.2629 -0.131667 76.7405 0.395Z"
                                fill="#F1F2FD"
                              ></path>
                              <path
                                d="M90.1349 0.395L80.7587 9.72833C80.2363 10.2483 80.2363 11.095 80.7587 11.615C81.2811 12.135 82.1317 12.135 82.6541 11.615L92.0302 2.28167C92.5526 1.76167 92.5526 0.915 92.0302 0.395C91.5011 -0.131667 90.6573 -0.131667 90.1349 0.395Z"
                                fill="#F1F2FD"
                              ></path>
                              <path
                                d="M103.529 0.395L94.1533 9.72833C93.6309 10.2483 93.6309 11.095 94.1533 11.615C94.6756 12.135 95.5262 12.135 96.0486 11.615L105.425 2.28167C105.947 1.76167 105.947 0.915 105.425 0.395C104.896 -0.131667 104.052 -0.131667 103.529 0.395Z"
                                fill="#F1F2FD"
                              ></path>
                              <path
                                d="M116.924 0.395L107.548 9.72833C107.025 10.2483 107.025 11.095 107.548 11.615C108.07 12.135 108.921 12.135 109.443 11.615L118.819 2.28167C119.342 1.76167 119.342 0.915 118.819 0.395C118.29 -0.131667 117.446 -0.131667 116.924 0.395Z"
                                fill="#F1F2FD"
                              ></path>
                              <path
                                d="M130.318 0.395L120.942 9.72833C120.42 10.2483 120.42 11.095 120.942 11.615C121.465 12.135 122.315 12.135 122.838 11.615L132.214 2.28167C132.736 1.76167 132.736 0.915 132.214 0.395C131.685 -0.131667 130.841 -0.131667 130.318 0.395Z"
                                fill="#F1F2FD"
                              ></path>
                            </svg>
                          </h5>
                        </div>
                        {/* <!-- section-title --> */}
                        <div
                          className="category-one__slider eduact-owl__carousel owl-with-shadow owl-theme owl-carousel"
                          data-owl-options='        {
   "loop": true,
   "margin": 30,
   "items": 4        ,"nav": false                    ,"autoplay": true            ,"autoplayTimeout": 5000                            ,"autoplayHoverPause": true                        ,"dots": true        ,"smartSpeed": 700
               ,
       "responsive":
       {
                       "0": {
           "margin": 0,
           "items": 1                },                            "670": {
           "margin": 30,
           "items": 2                },                            "992": {
           "margin": 30,
           "items": 3                },                            "1200": {
           "margin": 30,
           "items": 3                },                            "1400": {
           "margin": 30,
           "items": 4                }                        }
           }
'
                        >
                          {searchEngineCourses.subjects.subjects.map((item) => (
                            <CourseItem
                              imageUrl={"/images/GeneralCourseImg.png"}
                              label={item.name}
                              institutionName={item.provider.title}
                              key={item.id}
                              id={item.id}
                            />
                          ))}
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
        {/* <Helmet>
          <script src="/js/index_1.js" id="swv-js"></script>

          <script src="/js/index.js" id="contact-form-7-js"></script>
          <script src="/js/js.cookie.min.js" id="js-cookie-js"></script>

          <script
            src="/js/regenerator-runtime.min.js"
            id="regenerator-runtime-js"
          ></script>

          <script
            src="/js/tutor-elementor.js"
            id="tutor-elementor-js-js"
          ></script>
          <script src="/js/index.js" id="contact-form-7-js"></script>
          <script src="/js/js.cookie.min.js" id="js-cookie-js"></script>
          <script
            src="/js/jQuery.style.switcher.min.js"
            id="jquery-style-switcher-js"
          ></script>
          <script
            src="/js/color-switcher.js"
            id="layerdrops-toolbar-color-switcher-js"
          ></script>
          <script
            src="/js/wp-polyfill-inert.min.js"
            id="wp-polyfill-inert-js"
          ></script>
          <script
            src="/js/regenerator-runtime.min.js"
            id="regenerator-runtime-js"
          ></script>
          <script src="/js/wp-polyfill.min.js" id="wp-polyfill-js"></script>
          <script src="/js/hooks.min.js" id="wp-hooks-js"></script>
          <script src="/js/i18n.min.js" id="wp-i18n-js"></script>

          <script src="/js/tutor.min.js" id="tutor-script-js"></script>

          <script src="/js/quicktags.min.js" id="quicktags-js"></script>
          <script src="/js/core.min.js" id="jquery-ui-core-js"></script>
          <script src="/js/mouse.min.js" id="jquery-ui-mouse-js"></script>
          <script src="/js/sortable.min.js" id="jquery-ui-sortable-js"></script>
          <script
            src="/js/jquery.ui.touch-punch.js"
            id="jquery-touch-punch-js"
          ></script>
          <script
            src="/js/SocialShare.min.js"
            id="tutor-social-share-js"
          ></script>

          <script src="/js/tutor-front.min.js" id="tutor-frontend-js"></script>
          <script
            src="/js/datepicker.min.js"
            id="jquery-ui-datepicker-js"
          ></script>

          <script
            src="/js/jquery.blockUI.min.js"
            id="jquery-blockui-js"
          ></script>

          <script src="/js/add-to-cart.min.js" id="wc-add-to-cart-js"></script>

          <script src="/js/woocommerce.min.js" id="woocommerce-js"></script>
          <script src="/js/bootstrap.min.js" id="bootstrap-js"></script>
          <script
            src="/js/bootstrap-select.min.js"
            id="bootstrap-select-js"
          ></script>
          <script
            src="/js/jquery.bxslider.min.js"
            id="jquery-bxslider-js"
          ></script>
          <script src="/js/countdown.min.js" id="countdown-js"></script>
          <script src="/js/jarallax.min.js" id="jarallax-js"></script>
          <script
            src="/js/jquery.ajaxchimp.min.js"
            id="jquery-ajaxchimp-js"
          ></script>
          <script src="/js/jquery.appear.min.js" id="jquery-appear-js"></script>
          <script
            src="/js/jquery.magnific-popup.min.js"
            id="jquery-magnific-popup-js"
          ></script>
          <script src="/js/odometer.min.js" id="odometer-js"></script>
          <script src="/js/owl.carousel.min.js" id="owl-carousel-js"></script>
          <script
            src="/js/jquery.circle-progress.min.js"
            id="jquery-circle-progress-js"
          ></script>
          <script src="/js/swiper.min.js" id="swiper-js"></script>
          <script src="/js/wow.js" id="wow-js"></script>
          <script src="/js/sharer.min.js" id="sharer-js"></script>
          <script src="/js/timePicker.js" id="timepicker-js"></script>
          <script src="/js/jquery.circleType.js" id="circletype-js"></script>
          <script
            src="/js/jquery.lettering.min.js"
            id="circleletter-js"
          ></script>

          <script
            src="/js/eduact-addon.js"
            id="eduact-addon-script-js"
          ></script>
          <script src="/js/underscore.min.js" id="underscore-js"></script>
          <script src="/js/wp-util.min.js" id="wp-util-js"></script>

          <script
            src="/js/add-to-cart-variation.min.js"
            id="wc-add-to-cart-variation-js"
          ></script>
          <script src="/js/slick.min_1.js" id="slick-js"></script>
          <script
            src="/js/perfect-scrollbar.jquery.min.js"
            id="perfect-scrollbar-js"
          ></script>
          <script
            src="/js/jquery.magnific-popup.min_1.js"
            id="magnific-popup-js"
          ></script>

          <script src="/js/frontend_1.js" id="woosq-frontend-js"></script>

          <script src="/js/frontend.js" id="woosw-frontend-js"></script>
          <script src="/js/isotope.js" id="isotope-js"></script>
          <script src="/js/imagesloaded.min.js" id="imagesloaded-js"></script>
          <script src="/js/eduact-theme.js" id="eduact-theme-js"></script>
          <script
            src="/js/webpack.runtime.min.js"
            id="elementor-webpack-runtime-js"
          ></script>
          <script
            src="/js/frontend-modules.min.js"
            id="elementor-frontend-modules-js"
          ></script>
          <script
            src="/js/waypoints.min.js"
            id="elementor-waypoints-js"
          ></script>

          <script src="/js/frontend.min.js" id="elementor-frontend-js"></script>
        </Helmet> */}
      </>
    );
  } else {
    return <p>Nothing</p>;
  }
}

export default OurCourses;
