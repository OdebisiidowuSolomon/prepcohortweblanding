/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useCallback, useEffect, useState } from "react";
import SubjectService from "../../../../graphql/hooks/subjects";
import { ERROR_POLICY } from "../../../../contracts";
import { ISubjectFull } from "../../../../contracts/subjects";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import {
  formatCurrency,
  splitNumberToArray,
  TruncateText,
} from "../../../../libs";
import CustomAvatar from "../../../../components/CustomAvatar";
import { frontendUrl } from "../../../../services/graphqlClient";

function HomeOurCourses() {
  const [loading, setLoading] = useState(false);
  const [allSubjects, setAllSubjects] = useState<ISubjectFull[] | null>(null);

  const { useGetSubjects } = SubjectService;
  const { getSubjects } = useGetSubjects({});

  const fetchAllSubjects = useCallback(() => {
    setLoading(true);
    getSubjects({
      variables: { page: 1, perPage: 9 },
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

const SingleCourseItem = ({ course }: { course: ISubjectFull }) => {
  return (
    <a
      href={`${frontendUrl}/explore/course-intro/${course.id}`}
      target="_blank"
      rel="noreferrer"
      className="col-lg-4 col-md-6 col-12"
    >
      <div className="rbt-card variation-01 rbt-hover">
        <div className="rbt-card-img">
          <a>
            <img src="/images/course-03.jpg" alt="Card image" />
            {/* <div className="rbt-badge-3 bg-white">
              <span>-40%</span>
              <span>Off</span>
            </div> */}
          </a>
        </div>
        <div className="rbt-card-body">
          <div className="rbt-card-top">
            <div
              className="rbt-review"
              style={{ display: "flex", alignItems: "center" }}
            >
              <div className="rating">
                <RatingComponent
                  ratingCount={course.extraParams.countOfRatings || 0}
                  ratingValue={
                    !course.extraParams
                      ? 0
                      : course.extraParams.countOfRatings > 0
                      ? course.extraParams.sumOfRatings /
                        course.extraParams.countOfRatings
                      : 0
                  }
                />
              </div>
              <span className="rating-count">
                {" "}
                ({course.extraParams.countOfRatings || 0} Reviews)
              </span>
            </div>
          </div>
          <h4 className="rbt-card-title">
            <span>
              {course.name}
              {/* Angular Zero to Mastery */}
            </span>
          </h4>
          {/* <ul className="rbt-meta">
            <li>
              <i className="feather-book"></i>8 Lessons
            </li>
            <li>
              <i className="feather-users"></i>30 Students
            </li>
          </ul> */}
          <p className="rbt-card-text">
            {TruncateText(course.description, 25)}
          </p>

          <div className="rbt-author-meta mb--20">
            <div className="rbt-avater">
              <CustomAvatar name={course.provider.title} />
            </div>
            <div className="rbt-author-info">
              By
              <a> {course.provider.title}</a>
            </div>
          </div>
          <div className="rbt-card-bottom">
            <div className="rbt-price">
              {/* <span className="current-price">$80</span>
              <span className="off-price">$100</span> */}
              {course.prices.length === 0 ? (
                <p className={`my-1`}>FREE</p>
              ) : course.prices[0].courseDiscount ? (
                <p className={`my-1`}>
                  <p className="line-through text-error font-medium">
                    ${formatCurrency(course.prices[0].amount)}
                  </p>
                  <p className="font-medium">
                    {"  "}$
                    {formatCurrency(
                      course.prices[0].amount *
                        (course.prices[0].courseDiscount.percentage / 100)
                    )}
                  </p>
                </p>
              ) : (
                <p className={`my-1`}>
                  ${formatCurrency(course.prices[0].amount)}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

const RatingComponent = ({
  ratingValue,
  ratingCount,
}: {
  ratingValue: number;
  ratingCount: number;
}) => {
  return (
    <div className="flex-row items-center">
      <FiveStar size={14} value={ratingValue} />
    </div>
  );
};

export const FiveStar = ({
  size,
  value = 5,
}: {
  size?: number;
  value?: number;
}) => {
  return (
    <div className="flex-row mx-[0px]">
      {splitNumberToArray(value).map((i, _) =>
        i >= 1 ? (
          <FaStar
            key={_}
            size={size || 13}
            // name={i >= 1 ? "star" : i === 0 ? "star-o" : "star-half-full"}
            color={"orange"}
          />
        ) : i === 0 ? (
          <FaStar key={_} size={size || 13} color={""} />
        ) : (
          <FaStarHalfAlt
            key={_}
            size={size || 13}
            // name={i >= 1 ? "star" : i === 0 ? "star-o" : "star-half-full"}
            color={"orange"}
          />
        )
      )}
    </div>
  );
};
