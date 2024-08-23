/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useCallback, useEffect, useState } from "react";
import SubjectService from "../../../../graphql/hooks/subjects";
import { ERROR_POLICY } from "../../../../contracts";
import { ISubjectFull } from "../../../../contracts/subjects";
import { FaStar } from "react-icons/fa";
import { MdOutlinePeople } from "react-icons/md";
import { RiPercentFill } from "react-icons/ri";
import {
  formatCurrency,
  splitNumberToArray,
  TruncateText,
} from "../../../../libs";
import CustomAvatar from "../../../../components/CustomAvatar";
import { frontendUrl } from "../../../../services/graphqlClient";

function HomeOurQuestionBank() {
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

  //   useEffect(() => {
  //     fetchAllSubjects();
  //   }, [fetchAllSubjects]);

  //   if (loading) {
  //     return <p>Loading</p>;
  //   }

  //   if (allSubjects) {
  return (
    // <!-- Start Course Area -->
    <div className="rbt-course-area bg-color-extra2 rbt-section-gap">
      <div className="container">
        <div className="row mb--60">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <span className="subtitle bg-secondary-opacity">
                Top Popular Question Banks
              </span>
              <h2 className="title">
                Question Banks student <br />
                can pratice with.
              </h2>
            </div>
          </div>
        </div>
        {/* <!-- Start Courses Area --> */}
        {/* <div className="row g-5"> */}
        <div className="flex items-center! justify-between flex-wrap bg-yellow-300e">
          {/* {allSubjects.map((subject) => (
            ))} */}
          <SingleQuestionBankItem />
          <SingleQuestionBankItem />
          <SingleQuestionBankItem />
          <SingleQuestionBankItem />
          <SingleQuestionBankItem />
          <SingleQuestionBankItem />
          <SingleQuestionBankItem />
          <SingleQuestionBankItem />
          <SingleQuestionBankItem />
        </div>
        {/* <!-- End Courses Area --> */}
      </div>
    </div>
    /* <!-- End Course Area --> */
  );
  //   }
  //    else {
  //     return <p>No Data</p>;
  //   }
}

export default HomeOurQuestionBank;

const SingleQuestionBankItem = () => {
  return (
    <div className="bg-red-500w shadow-md w-[32%] h-[450px] mb-10 p-10 rounded-xl">
      <div className="h-[236px] bg-[#1F4497] flex flex-col justify-center items-center rounded-xl">
        <div className="h-[110px] w-[110px] bg-white mx-auto rounded-full flex justify-center items-center">
          <p className="text-[64px] text-black">M</p>
        </div>
        <p className="text-white mt-3">WAEC 2002 May/June</p>
      </div>
      <div className="mt-4">
        <div className="flex items-center! justify-between">
          <p
            className="font-medium text-[#1F4497]"
            style={{ margin: 0, padding: 0 }}
          >
            English Language
          </p>
          <div className="flex items-center">
            <FaStar size={13} color="orange" />
            <p className="ml-2 text-black font-semibold">4.5</p>
          </div>
        </div>
        <div className="">
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center">
              <div className="px-2 mr-2 bg-[#1F4497] rounded-full">
                <MdOutlinePeople color="white" size={19} />
              </div>
              <p className="text-black font-semibold">Total Attempt:</p>
            </div>
            <p className="text-black font-medium">12134</p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center">
              <div className="px-2 mr-2 bg-[#1F4497] rounded-full">
                <RiPercentFill color="white" size={19} />
              </div>
              <p className="text-black font-semibold">Average Score:</p>
            </div>
            <p className="text-black font-medium">100%</p>
          </div>
        </div>
      </div>
    </div>
  );
};
