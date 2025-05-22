import React from "react";
import Timeline from "../components/Timeline";
import WorkTimeline from "../components/Timeline-wrok";

const TimelinePage = () => {
  return (
    <div className="p-6 mt-[4rem]">
      {/* <p className="text-xs opacity-45 text-center mb-4">{`(This page is still in development. Content may not be accurate.)`}</p> */}
      <div className="grid grid-cols-1 gap-5">
        <div>
          <h2
            className={`text-center font-bold text-sm text-[#F11A7B] uppercase tracking-wider mb-6`}
          >
            About
          </h2>
          <p className="text-center text-2xl sm:text-3xl mb-6 font-extrabold  md:no-underline underline-offset-8 decoration-[#F11A7B]">
            Education
          </p>

          <Timeline />
        </div>
        <div className="mt-5">
          <p className="text-center text-2xl sm:text-3xl mb-6 font-extrabold  md:no-underline underline-offset-8 decoration-[#F11A7B]">
            Work Experience
          </p>
          <WorkTimeline/>
        </div>
      </div>
    </div>
  );
};

export default TimelinePage;
