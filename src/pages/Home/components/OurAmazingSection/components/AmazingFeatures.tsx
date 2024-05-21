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
          label="More amazing Features"
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
              subtitle="Integrated Polls"
              icon="fa fa-poll"
            />
          </>
        ) : (
          <>
            <AmazingFeaturesItem
              title="Question and Answer"
              subtitle="You can ask questions and relevant answers from your colleague under
          the teacher's moderation."
              icon="fa fa-question-circle"
            />
            <AmazingFeaturesItem
              title="Question and Answer"
              subtitle="You can ask questions and relevant answers from your colleague under
          the teacher's moderation."
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
      } rounded-2xl px-4 py-3 mr-3 cursor-pointer`}
      onClick={onPress}
    >
      <p
        className={`${
          isActive ? "text-white" : "text-black"
        } text-xl font-semibold p-0 m-0`}
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
        style={{ color: "#1F4497", fontSize:26 }}
      >
        <span aria-hidden="true" className={`${icon}`}></span>
      </div>
    </div>
  );
};
