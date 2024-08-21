import React from "react";
import HomeHeader from "./components/HomeHeader/index";
import HomeAdvanceTabs from "./components/AdvanceTabs";
import HomeOurCoreFeatures from "./components/OurCoreFeatures/index";
import HomeFeaturesList from "./components/FeaturesList/index";
// import HomeSwipeableLeftTab from "./components/SwipeableLeftTab/index";
import HomeAccordionArea from "./components/AccordionArea";
// import HomeCallToAction from "./components/CallToAction";
import HomeTestimonial from "./components/HomeTestimonial";
import HomeWhyChooseUs from "./components/WhyChooseUs";
import HomeOurCourses from "./components/OurCourses";

function HomePage() {
  return (
    <>
      <HomeHeader />
      <HomeOurCoreFeatures />
      <HomeAdvanceTabs />
      {/* <HomeSwipeableLeftTab /> */}
      <HomeOurCourses />
      <HomeWhyChooseUs />
      <HomeFeaturesList />
      <HomeTestimonial />
      <HomeAccordionArea />
      {/* <HomeCallToAction /> */}
    </>
  );
}

export default HomePage;
