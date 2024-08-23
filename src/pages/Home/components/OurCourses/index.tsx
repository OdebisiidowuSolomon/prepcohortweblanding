/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useCallback, useEffect, useState } from "react";
import SubjectService from "../../../../graphql/hooks/subjects";
import { ERROR_POLICY } from "../../../../contracts";
import { ISubject } from "../../../../contracts/subjects";

function HomeOurCourses() {
  const [loading, setLoading] = useState(false);
  const [allSubjects, setAllSubjects] = useState<ISubject[] | null>(null);

  const { useGetSubjects } = SubjectService;
  const { getSubjects } = useGetSubjects({});

  const fetchAllSubjects = useCallback(() => {
    setLoading(true);
    getSubjects({
      variables: { page: 1, perPage: 10 },
      errorPolicy: ERROR_POLICY.ALL,
      onCompleted(data) {
        if (data) {
          setAllSubjects(data.subjects.subjects);
        }
        console.log(data, "data");
      },
      onError(error) {
        console.log(error, "err");
      },
    }).finally(() => {
      setLoading(false);
    });
  }, [getSubjects]);

  useEffect(() => {
    fetchAllSubjects();
  }, [fetchAllSubjects]);

  if (loading) {
    return <p>Loading</p>;
  }

  if (allSubjects) {
    return (
      // <!-- Start Course Area -->
      <div className="rbt-course-area bg-color-extra2 rbt-section-gap">
        <div className="container">
          <div className="row mb--60">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <span className="subtitle bg-secondary-opacity">
                  Top Popular Course
                </span>
                <h2 className="title">
                  Courses student <br />
                  can learn from us.
                </h2>
              </div>
            </div>
          </div>
          {/* <!-- Start Courses Area --> */}
          <div className="row g-5">
            {allSubjects.map((subject) => (
              <SingleCourseItem key={subject.id} course={subject} />
            ))}
          </div>
          {/* <!-- End Courses Area --> */}
        </div>
      </div>
      /* <!-- End Course Area --> */
    );
  } else {
    return <p>No Data</p>;
  }
}

export default HomeOurCourses;

const SingleCourseItem = ({ course }: { course: ISubject }) => {
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div className="rbt-card variation-01 rbt-hover">
        <div className="rbt-card-img">
          <a href="https://rainbowit.net/html/histudy/course-details.html">
            <img src="/images/course-03.jpg" alt="Card image" />
            <div className="rbt-badge-3 bg-white">
              <span>-40%</span>
              <span>Off</span>
            </div>
          </a>
        </div>
        <div className="rbt-card-body">
          <div className="rbt-card-top">
            <div className="rbt-review">
              <div className="rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <span className="rating-count"> (5 Reviews)</span>
            </div>
            <div className="rbt-bookmark-btn">
              <a
                className="rbt-round-btn"
                title="Bookmark"
                href="https://rainbowit.net/html/histudy/01-main-demo.html#"
              >
                <i className="feather-bookmark"></i>
              </a>
            </div>
          </div>
          <h4 className="rbt-card-title">
            <a href="https://rainbowit.net/html/histudy/course-details.html">
              {course.name}
              {/* Angular Zero to Mastery */}
            </a>
          </h4>
          <ul className="rbt-meta">
            <li>
              <i className="feather-book"></i>8 Lessons
            </li>
            <li>
              <i className="feather-users"></i>30 Students
            </li>
          </ul>
          <p className="rbt-card-text">{course.description}</p>

          <div className="rbt-author-meta mb--20">
            <div className="rbt-avater">
              <a href="https://rainbowit.net/html/histudy/01-main-demo.html#">
                <img src="/images/avatar-03.png" alt="Sophia Jaymes" />
              </a>
            </div>
            <div className="rbt-author-info">
              By
              <a href="https://rainbowit.net/html/histudy/profile.html">
                Slaughter
              </a>
              In
              <a href="https://rainbowit.net/html/histudy/01-main-demo.html#">
                Languages
              </a>
            </div>
          </div>
          <div className="rbt-card-bottom">
            <div className="rbt-price">
              <span className="current-price">$80</span>
              <span className="off-price">$100</span>
            </div>
            <a
              className="rbt-btn-link"
              href="https://rainbowit.net/html/histudy/course-details.html"
            >
              Learn More<i className="feather-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
