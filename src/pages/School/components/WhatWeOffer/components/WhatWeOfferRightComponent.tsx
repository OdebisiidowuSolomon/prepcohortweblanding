import React from "react";

function WhatWeOfferRightComponent() {
  return (
    <div
      className="col-xl-6 justify-center items-center max-2xl:mt-10"
      id="amazingFeaturesId"
    >
      <div className="flex flex-wrap gap-3 justify-center about-one__contento">
        <WhatWeOfferRightComponentItem
          title="Reusable Resources"
          subtitle="Courses, quizzes, forms, polls, etc. become reusable assets that can be
        used across different classes/groups. While still allowing the resources
        contents used to evolve overtime without loosing historical status"
          iconName="recycle"
        />
        <WhatWeOfferRightComponentItem
          title="Question Bank System"
          subtitle="Schools can use existing question bank available in the platform created by other schools or create their own question bank for their student's practice sessions."
          iconName="unlock"
        />
        <WhatWeOfferRightComponentItem
          title="Grouping system"
          subtitle="Maximize course organization with Prepcohort’s flexibility, allowing educators to create and manage multiple classes/groups."
          iconName="users"
        />
        <WhatWeOfferRightComponentItem
          title="Teaching Tools"
          subtitle="Access a diverse array of innovative teaching tools. Our suite of tools is designed to amplify your teaching effectiveness and provide a dynamic learning experience."
          iconName="wrench"
        />
      </div>
      {/* <!-- about content end--> */}
    </div>
  );
}

export default WhatWeOfferRightComponent;

const WhatWeOfferRightComponentItem = ({
  title,
  subtitle,
  iconName,
}: {
  title: string;
  subtitle: string;
  iconName: string;
}) => {
  return (
    <div className="max-md:w-[100%] w-[46%] !bg-white p-3 rounded-lg flex flex-col shadow-md">
      <div
        className="px-3 py-[10px] m-1 bg-[#1F44971F] rounded-lg self-start"
        style={{ color: "#1F4497", fontSize: 26 }}
      >
        <span aria-hidden="true" className={`fa fa-${iconName}`}></span>
      </div>
      <p className="m-0 p-0 text-2xl font-semibold my-3 text-[#062335]">
        {title}
      </p>
      <p className="p-0 m-0 text-[#666666] font-normal my-2">{subtitle}</p>
    </div>
  );
};
