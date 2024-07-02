import { useState } from "react";

export const AmazingFeatures = () => {
  const [showingAmazingFeatures, setShowingAmazingFeatures] = useState(true);
  return (
    <div
      className="col-xl-6 border border-gray-300 p-change "
      id="amazingFeaturesId"
    >
      <div className="flex w-full py-4">
        <AmazingFeaturesTopBtn
          isActive={showingAmazingFeatures}
          onPress={() => setShowingAmazingFeatures(true)}
          label="Amazing Features"
        />
        <AmazingFeaturesTopBtn
          isActive={!showingAmazingFeatures}
          onPress={() => setShowingAmazingFeatures(false)}
          label="More Amazing Features"
        />
      </div>
      <div>
        {showingAmazingFeatures ? (
          <>
            <AmazingFeaturesItem
              title="Question and Answer"
              subtitle="You can ask questions and relevant answers from your colleague under
          the teacher's moderation."
              icon="fa fa-question-circle"
            />
            <AmazingFeaturesItem
              title="Scoped Announcement"
              subtitle="You can receive messages disseminated by instructor on any updated, news, or events. School-wide or class-wide."
              icon="fa fa-bullhorn"
            />
            <AmazingFeaturesItem
              title="Integrated Forms"
              subtitle="Information can be collected using form feature to gather data, facilitate surveys or manage various processes like registration or feedback submission."
              icon="fa fa-poll-h"
            />
            <AmazingFeaturesItem
              title="Integrated Polls"
              subtitle="Polls enable you to share your opinion on different issues, topics etc. from which decisions can be made"
              icon="fa fa-poll"
            />
          </>
        ) : (
          <>
            <AmazingFeaturesItem
              title="Quizzes and Exam"
              subtitle="These are challenges or tests on our platform that help you learn faster by providing you practice questions on what you’ve studied"
              icon="fa fa-question-circle"
            />
            <AmazingFeaturesItem
              title="Grading"
              subtitle="Your quizzes and exams gets evaluated after practice. you get scores and feedback on how well you’ve performed"
              icon="fa fa-question-circle"
            />
            <AmazingFeaturesItem
              title="Scaled Reports"
              subtitle="Status updates on your performances in your course is made available to you on weekly basis. You also see how you are ranking with other student’s on board"
              icon="fa fa-question-circle"
            />
            <AmazingFeaturesItem
              title="Feedback"
              subtitle="Receive valuable and informative feedback on your performance. AI recommendation is also at your beckon"
              icon="fa fa-question-circle"
            />
          </>
        )}
      </div>
    </div>
  );
};

const AmazingFeaturesTopBtn = ({
  isActive,
  label,
  onPress,
}: {
  isActive: boolean;
  label: string;
  onPress?: () => void;
}) => {
  return (
    <div
      className={`${
        isActive ? "bg-[#1F4497]" : "bg-[#EBF1FF]"
      } rounded-2xl px-4 py-3 mr-3 cursor-pointer max-sm:!py-4 max-sm:!px-2`}
      onClick={onPress}
    >
      <p
        className={`${
          isActive ? "text-white" : "text-black"
        } text-xl font-semibold p-0 m-0 max-sm:!text-sm`}
      >
        {label}
      </p>
    </div>
  );
};

const AmazingFeaturesItem = ({
  title,
  subtitle,
  icon,
}: {
  title: string;
  subtitle: string;
  icon: string;
}) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <div>
        <p className="text-lg font-semibold text-[#1F4497]">{title}</p>
        <p className="">{subtitle}</p>
      </div>
      <div
        className="px-3 py-[10px] m-1 bg-[#1F44971F] rounded-lg"
        style={{ color: "#1F4497", fontSize: 26 }}
      >
        <span aria-hidden="true" className={`${icon}`}></span>
      </div>
    </div>
  );
};
