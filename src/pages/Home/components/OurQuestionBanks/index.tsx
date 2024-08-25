/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import { useCallback, useEffect, useState } from "react";
import { ERROR_POLICY } from "../../../../contracts";
import { FaStar } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import { BsQuestionCircle } from "react-icons/bs";
import { frontendUrl } from "../../../../services/graphqlClient";
import QuestionBankService from "../../../../graphql/hooks/questionBank";
import { ITestObj } from "../../../../contracts/questionBank";
import { TruncateText } from "../../../../libs";

function HomeOurQuestionBank() {
  const [loading, setLoading] = useState(false);
  const [allQuestionBanks, setAllQuestionBanks] = useState<ITestObj[] | null>(
    null
  );

  const { useGetQuestionBanks } = QuestionBankService;
  const { getQuestionBanks } = useGetQuestionBanks({});

  const fetchAllQuestionBanks = useCallback(() => {
    setLoading(true);
    getQuestionBanks({
      variables: { page: 1, perPage: 9 },
      errorPolicy: ERROR_POLICY.ALL,
      onCompleted(data) {
        if (data) {
          setAllQuestionBanks(data.tests.tests);
        }
        console.log(data, "data");
      },
      onError(error) {
        console.log(error, "err");
      },
    }).finally(() => {
      setLoading(false);
    });
  }, [getQuestionBanks]);

  useEffect(() => {
    fetchAllQuestionBanks();
  }, [fetchAllQuestionBanks]);

  if (loading) {
    return <p>Loading</p>;
  }

  if (allQuestionBanks) {
    return (
      // <!-- Start QuestionBank Area -->
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
          {/* <!-- Start QuestionBanks Area --> */}
          {/* <div className="row g-5"> */}
          <div className="flex max-phone:flex-col items-center justify-between flex-wrap">
            {allQuestionBanks.map((questionBank) => (
              <SingleQuestionBankItem questionBank={questionBank} />
            ))}
          </div>
          {/* <!-- End QuestionBanks Area --> */}
        </div>
      </div>
      /* <!-- End QuestionBank Area --> */
    );
  } else {
    return <p>No Data</p>;
  }
}

export default HomeOurQuestionBank;

const SingleQuestionBankItem = ({
  questionBank,
}: {
  questionBank: ITestObj;
}) => {
  return (
    <a
      href={`${frontendUrl}/quiz/quiz/MOCK/${questionBank.id}`}
      target="_blank"
      rel="noreferrer"
      className="shadow-md w-[32%] max-tablet:w-[48%] max-phone:w-[90%] h-[450px] mb-10 p-10 rounded-xl"
    >
      <div className="h-[236px] bg-[#1F4497] flex flex-col justify-center items-center rounded-xl">
        <div className="h-[110px] w-[110px] max-miniphone:h-[90px] max-miniphone:w-[90px] bg-white mx-auto rounded-full flex justify-center items-center">
          <p className="text-[64px] max-miniphone:text-5xl text-black">
            {questionBank?.name[0]}
          </p>
        </div>
        <p className="text-white text-center mt-3">{questionBank?.name}</p>
      </div>
      <div className="mt-4">
        <div className="flex items-center! justify-between">
          <p
            className="font-semibold text-[#1F4497] max-miniphone:text-[13px]"
            style={{ margin: 0, padding: 0 }}
          >
            {TruncateText(questionBank?.name)}
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
                <MdAccessTime color="white" size={19} />
              </div>
              <p className="text-black font-medium">Time Limit:</p>
            </div>
            <p className="text-black font-medium">
              {questionBank?.timeAlloted} mins
            </p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center">
              <div className="px-2 mr-2 bg-[#1F4497] rounded-full">
                <BsQuestionCircle color="white" size={19} />
              </div>
              <p className="text-black font-medium">Total Questions:</p>
            </div>
            <p className="text-black font-medium max-miniphone:text-sm">
              {questionBank?.noOfQuestions}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
};
