import React from "react";

function Testimonials() {
  return (
    <>
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-e3775cd elementor-section-full_width elementor-section-height-default elementor-section-height-default"
        data-id="e3775cd"
        data-element_type="section"
      >
        <div className="elementor-container elementor-column-gap-no">
          <div
            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-f493430"
            data-id="f493430"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-5929568 elementor-widget elementor-widget-eduact-testimonials"
                data-id="5929568"
                data-element_type="widget"
                data-widget_type="eduact-testimonials.default"
              >
                <div className="elementor-widget-container">
                  {/* <!-- Testimonial Start --> */}
                  <section
                    className="testimonial-two"
                    style={{
                      backgroundImage: "url(/images/testimonial-bg-2-1.jpg)",
                    }}
                  >
                    <div className="container">
                      <div className="section-title text-center">
                        {/* <h5 className="section-title__tagline">
                          Testimonial
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
                        </h5> */}
                        <h2 className="section-title__title">
                          What Our Educators are Saying
                        </h2>
                        <p>
                          Highlighted below are few of our reviews our happy
                          users are saying about using our platform
                        </p>
                      </div>
                      {/* <!-- section-title --> */}
                      <div
                        className="testimonial-two__carousel eduact-owl__carousel owl-with-shadow owl-theme owl-carousel"
                        data-owl-options='        {
"loop": true,
"margin": 30,
"items": 3        ,"nav": true        ,"center":true
       ,"autoplay": true            ,"autoplayTimeout": 5000                            ,"autoplayHoverPause": true                            ,"navText": [
"<i class=\"  icon-arrow-left\"></i>",
"<i class=\"  icon-arrow\"></i>"
]
   ,"dots": true        ,"smartSpeed": 700
       ,
"responsive":
{
               "0": {
   "margin": 0,
   "items": 1                },                            "992": {
   "margin": 30,
   "items": 3                },                            "1200": {
   "margin": 36,
   "items": 3                }                        }
   }
'
                      >
                        {/* <!-- Testimonial Item --> */}
                        <div className="item">
                          <div className="testimonial-two__item">
                            <div
                              className="testimonial-two__item-inner"
                              style={{
                                backgroundImage:
                                  "url(/images/testimonial-shape-2-1.png);",
                              }}
                            >
                              <div className="testimonial-two__ratings">
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                              </div>
                              <div className="testimonial-two__quote">
                                The feedback system here is gold. Instructors
                                provide detailed insights, helping me understand
                                not just what I got wrong, but why. The
                                community aspect is fantastic too- I never feel
                                alone in my studies. Prepcohort truly
                                prioritizes students success!
                              </div>
                              {/* <!-- testimonial-quote --> */}
                              <div className="testimonial-two__meta">
                                <img
                                  decoding="async"
                                  src="/images/testimonial-2-author-1-1.png"
                                  alt="alt"
                                  title="testimonial-2-author-1"
                                />
                                <h5 className="testimonial-two__title">
                                  Clement James
                                </h5>
                              </div>
                              {/* <!-- testimonial-meta --> */}
                              <svg
                                viewBox="0 0 416 249"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g filter="url(#filter0_d_324_36064)">
                                  <path d="M296.443 526.351C291.626 517.219 286.22 508.4 280.351 499.907C274.064 490.803 267.257 482.07 260.072 473.662C252.166 464.412 243.802 455.551 235.132 447.015C225.525 437.563 215.537 428.493 205.305 419.728C193.907 409.977 182.21 400.591 170.293 391.477C157.025 381.325 143.506 371.508 129.809 361.934C114.574 351.278 99.1373 340.919 83.5681 330.773C66.2815 319.506 48.8344 308.493 31.2774 297.659C11.8453 285.67 -7.71089 273.899 -27.3627 262.269C-49.0253 249.452 -70.8004 236.801 -92.632 224.268C-112.751 212.719 -132.553 200.599 -151.773 187.605C-167.672 176.859 -183.186 165.529 -198.079 153.411C-210.223 143.528 -221.954 133.126 -233.015 122.043C-242.024 113.01 -250.588 103.518 -258.425 93.4561C-264.651 85.4701 -270.424 77.1028 -275.483 68.3262C-279.503 61.3457 -283.079 54.0865 -285.969 46.5676C-288.192 40.7857 -290.021 34.8356 -291.27 28.7606C-292.209 24.2029 -292.822 19.5763 -292.986 14.9289C-293.101 11.7908 -293.016 8.64358 -292.628 5.53246C-292.424 3.91736 -292.165 2.29171 -291.728 0.72597C-291.679 0.529505 -291.617 0.330416 -291.559 0.139576C-291.56 1.6512 -291.422 3.17245 -291.258 4.67452C-290.799 8.90587 -289.976 13.0825 -288.939 17.2111C-287.309 23.703 -285.103 30.0422 -282.479 36.194C-278.927 44.5375 -274.604 52.5471 -269.706 60.1738C-263.507 69.8349 -256.393 78.8972 -248.649 87.3719C-238.942 97.9926 -228.245 107.691 -216.918 116.571C-203.009 127.487 -188.159 137.18 -172.79 145.896C-153.752 156.686 -133.883 165.972 -113.594 174.141C-88.9088 184.08 -63.5671 192.361 -37.9282 199.441C-11.3405 206.779 15.589 212.887 42.7613 217.66C67.4471 221.999 92.326 225.272 117.29 227.514C141.053 229.653 164.9 230.869 188.764 231.226C211.313 231.559 233.873 231.113 256.392 229.925C277.174 228.838 297.929 227.116 318.614 224.801C337.536 222.679 356.4 220.056 375.184 216.945C391.68 214.211 408.11 211.094 424.452 207.59C438.374 204.605 452.242 201.341 466.025 197.777C476.913 194.966 487.745 191.97 498.512 188.749C506.072 186.491 513.591 184.133 521.068 181.624C524.972 180.313 528.87 178.974 532.737 177.541C533.207 177.365 533.677 177.189 534.148 177.014L296.443 526.351Z"></path>
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>
                        {/* <!-- Testimonial Item --> */}
                        {/* <!-- Testimonial Item --> */}
                        <div className="item">
                          <div className="testimonial-two__item">
                            <div
                              className="testimonial-two__item-inner"
                              style={{
                                backgroundImage:
                                  "url(/images/testimonial-shape-2-1.png);",
                              }}
                            >
                              <div className="testimonial-two__ratings">
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                              </div>
                              <div className="testimonial-two__quote">
                                Prepcohort is a game-changer! The qualified
                                instructors provide clear explanations, making
                                complex topics easy to grasp. The interactive
                                courses and progress analysis feature have
                                significantly boosted my confidence. I highly
                                recommend it!
                              </div>
                              {/* <!-- testimonial-quote --> */}
                              <div className="testimonial-two__meta">
                                <img
                                  decoding="async"
                                  src="/images/UserAvatar1.png"
                                  alt="alt"
                                  title="testimonial-2-author-2"
                                />
                                <h5 className="testimonial-two__title testimonial-two__title">
                                  Cynthia Adejoke
                                </h5>
                              </div>
                              {/* <!-- testimonial-meta --> */}
                              <svg
                                viewBox="0 0 416 249"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g filter="url(#filter0_d_324_36064)">
                                  <path d="M296.443 526.351C291.626 517.219 286.22 508.4 280.351 499.907C274.064 490.803 267.257 482.07 260.072 473.662C252.166 464.412 243.802 455.551 235.132 447.015C225.525 437.563 215.537 428.493 205.305 419.728C193.907 409.977 182.21 400.591 170.293 391.477C157.025 381.325 143.506 371.508 129.809 361.934C114.574 351.278 99.1373 340.919 83.5681 330.773C66.2815 319.506 48.8344 308.493 31.2774 297.659C11.8453 285.67 -7.71089 273.899 -27.3627 262.269C-49.0253 249.452 -70.8004 236.801 -92.632 224.268C-112.751 212.719 -132.553 200.599 -151.773 187.605C-167.672 176.859 -183.186 165.529 -198.079 153.411C-210.223 143.528 -221.954 133.126 -233.015 122.043C-242.024 113.01 -250.588 103.518 -258.425 93.4561C-264.651 85.4701 -270.424 77.1028 -275.483 68.3262C-279.503 61.3457 -283.079 54.0865 -285.969 46.5676C-288.192 40.7857 -290.021 34.8356 -291.27 28.7606C-292.209 24.2029 -292.822 19.5763 -292.986 14.9289C-293.101 11.7908 -293.016 8.64358 -292.628 5.53246C-292.424 3.91736 -292.165 2.29171 -291.728 0.72597C-291.679 0.529505 -291.617 0.330416 -291.559 0.139576C-291.56 1.6512 -291.422 3.17245 -291.258 4.67452C-290.799 8.90587 -289.976 13.0825 -288.939 17.2111C-287.309 23.703 -285.103 30.0422 -282.479 36.194C-278.927 44.5375 -274.604 52.5471 -269.706 60.1738C-263.507 69.8349 -256.393 78.8972 -248.649 87.3719C-238.942 97.9926 -228.245 107.691 -216.918 116.571C-203.009 127.487 -188.159 137.18 -172.79 145.896C-153.752 156.686 -133.883 165.972 -113.594 174.141C-88.9088 184.08 -63.5671 192.361 -37.9282 199.441C-11.3405 206.779 15.589 212.887 42.7613 217.66C67.4471 221.999 92.326 225.272 117.29 227.514C141.053 229.653 164.9 230.869 188.764 231.226C211.313 231.559 233.873 231.113 256.392 229.925C277.174 228.838 297.929 227.116 318.614 224.801C337.536 222.679 356.4 220.056 375.184 216.945C391.68 214.211 408.11 211.094 424.452 207.59C438.374 204.605 452.242 201.341 466.025 197.777C476.913 194.966 487.745 191.97 498.512 188.749C506.072 186.491 513.591 184.133 521.068 181.624C524.972 180.313 528.87 178.974 532.737 177.541C533.207 177.365 533.677 177.189 534.148 177.014L296.443 526.351Z"></path>
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>
                        {/* <!-- Testimonial Item --> */}
                        {/* <!-- Testimonial Item --> */}
                        <div className="item">
                          <div className="testimonial-two__item">
                            <div
                              className="testimonial-two__item-inner"
                              style={{
                                backgroundImage:
                                  "url(/images/testimonial-shape-2-1.png);",
                              }}
                            >
                              <div className="testimonial-two__ratings">
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                              </div>
                              <div className="testimonial-two__quote">
                                Prepcohort exceeded my expectations. The
                                one-on-one sessions with instructors helped me
                                bridge any gaps in my understanding, and the
                                examination platform ensured I was well-prepared
                                for my tests. Thumbs up!
                              </div>
                              {/* <!-- testimonial-quote --> */}
                              <div className="testimonial-two__meta">
                                <img
                                  decoding="async"
                                  src="/images/UserAvatar2.png"
                                  alt="alt"
                                  title="testimonial-2-author-3"
                                />
                                <h5 className="testimonial-two__title testimonial-two__title testimonial-two__title">
                                  John Olufunmi
                                </h5>
                              </div>
                              {/* <!-- testimonial-meta --> */}
                              <svg
                                viewBox="0 0 416 249"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g filter="url(#filter0_d_324_36064)">
                                  <path d="M296.443 526.351C291.626 517.219 286.22 508.4 280.351 499.907C274.064 490.803 267.257 482.07 260.072 473.662C252.166 464.412 243.802 455.551 235.132 447.015C225.525 437.563 215.537 428.493 205.305 419.728C193.907 409.977 182.21 400.591 170.293 391.477C157.025 381.325 143.506 371.508 129.809 361.934C114.574 351.278 99.1373 340.919 83.5681 330.773C66.2815 319.506 48.8344 308.493 31.2774 297.659C11.8453 285.67 -7.71089 273.899 -27.3627 262.269C-49.0253 249.452 -70.8004 236.801 -92.632 224.268C-112.751 212.719 -132.553 200.599 -151.773 187.605C-167.672 176.859 -183.186 165.529 -198.079 153.411C-210.223 143.528 -221.954 133.126 -233.015 122.043C-242.024 113.01 -250.588 103.518 -258.425 93.4561C-264.651 85.4701 -270.424 77.1028 -275.483 68.3262C-279.503 61.3457 -283.079 54.0865 -285.969 46.5676C-288.192 40.7857 -290.021 34.8356 -291.27 28.7606C-292.209 24.2029 -292.822 19.5763 -292.986 14.9289C-293.101 11.7908 -293.016 8.64358 -292.628 5.53246C-292.424 3.91736 -292.165 2.29171 -291.728 0.72597C-291.679 0.529505 -291.617 0.330416 -291.559 0.139576C-291.56 1.6512 -291.422 3.17245 -291.258 4.67452C-290.799 8.90587 -289.976 13.0825 -288.939 17.2111C-287.309 23.703 -285.103 30.0422 -282.479 36.194C-278.927 44.5375 -274.604 52.5471 -269.706 60.1738C-263.507 69.8349 -256.393 78.8972 -248.649 87.3719C-238.942 97.9926 -228.245 107.691 -216.918 116.571C-203.009 127.487 -188.159 137.18 -172.79 145.896C-153.752 156.686 -133.883 165.972 -113.594 174.141C-88.9088 184.08 -63.5671 192.361 -37.9282 199.441C-11.3405 206.779 15.589 212.887 42.7613 217.66C67.4471 221.999 92.326 225.272 117.29 227.514C141.053 229.653 164.9 230.869 188.764 231.226C211.313 231.559 233.873 231.113 256.392 229.925C277.174 228.838 297.929 227.116 318.614 224.801C337.536 222.679 356.4 220.056 375.184 216.945C391.68 214.211 408.11 211.094 424.452 207.59C438.374 204.605 452.242 201.341 466.025 197.777C476.913 194.966 487.745 191.97 498.512 188.749C506.072 186.491 513.591 184.133 521.068 181.624C524.972 180.313 528.87 178.974 532.737 177.541C533.207 177.365 533.677 177.189 534.148 177.014L296.443 526.351Z"></path>
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>
                        {/* <!-- Testimonial Item --> */}
                      </div>
                    </div>
                  </section>
                  {/* <!-- Testimonial End --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
