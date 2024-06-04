import React from "react";

function WhyPrepCohortContent() {
  return (
    <div className="flex flex-wrap gap-3 justify-center about-one__contento">
      <WhyPrepCohortContentItem
        title="Interactive Courses"
        subtitle="Schools get empowered to craft engaging courses, provide students with dynamic and immersive learning experience that goes beyond traditional instruction methods"
        iconName="television"
      />
      <WhyPrepCohortContentItem
        title="Moderated Q/A"
        subtitle="Schools can facilitate engaging learning interactions with teacher-moderated question and answer sessions, allowing them to guide discussion and address queries"
        iconName="question-circle"
      />
      <WhyPrepCohortContentItem
        title="Social Reports"
        subtitle="You get insights into student’s individual and overall performance, facilitating data-driven teaching strategies for enhanced academic outcomes"
        iconName="line-chart"
      />
      <WhyPrepCohortContentItem
        title="Feedback"
        subtitle="Your students receive actionable suggestions on providing constructive and personalized feedback and recommendations"
        iconName="refresh"
      />
      <WhyPrepCohortContentItem
        title="Easy Communication"
        subtitle="Schools can facilitate seamless communication with communication tools, ensuring effortless and effective interaction with your students"
        iconName="comment-alt"
      />
      <WhyPrepCohortContentItem
        title="Rich Question Bank"
        subtitle="There are diverse array of practice questions for students to enhance their comprehension and preparation for examination"
        iconName="battery-full"
      />
      <WhyPrepCohortContentItem
        title="Time Saving"
        subtitle="Save valuable time with Prepcohort’s streamlined features, designed to allow more focus on teaching"
        iconName="hourglass"
        />
      <WhyPrepCohortContentItem
        title="AI- Assistance"
        subtitle="Your students receive actionable suggestions on providing constructive and personalized feedback and recommendations"
        iconName="check-square"
      />
    </div>
  );
}

export default WhyPrepCohortContent;

const WhyPrepCohortContentItem = ({
  title,
  subtitle,
  iconName,
}: {
  title: string;
  subtitle: string;
  iconName: string;
}) => {
  return (
    <div className="max-md:w-[100%] max-lg:w-[45%] max-2xl:w-[32%] w-[24%] !bg-white p-3 rounded-lg flex flex-col shadow-md">
      <div
        className="px-3 py-[10px] m-1 bg-[#1F44971F] rounded-lg self-start"
        style={{ color: "#1F4497", fontSize: 26 }}
      >
        <span aria-hidden="true" className={`fa fa-${iconName}`}></span>
        {/* <span aria-hidden="true" className={`fa fa-question-circle`}></span> */}
      </div>
      <p className="m-0 p-0 text-2xl font-semibold my-3 text-[#062335]">
        {title}
      </p>
      <p className="p-0 m-0 text-[#666666] font-normal my-2">{subtitle}</p>
    </div>
  );
};
