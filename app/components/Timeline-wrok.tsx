"use client";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import React from "react";
import AnimatedDiv from "./AnimatedDiv";

const WorkTimeline = () => {
  const Experience = [
    {
      Date: "Sep 2023 - Feb 2024",
      title: "FullStack Developer Intern",
      School: "DarkHorse",
      location: "Remote",
      description: "Internship",
      bg: "#F11A7B",
    },
    {
      Date: "Feb 2024 - Present",
      title: "FullStack Developer",
      School: "TerraDX Technologies",
      location: "Remote",
      description: "Fulltime",
      bg: "#387ADF",
    },
  ];

  return (
    <AnimatedDiv>
      <VerticalTimeline
        className="opacity-95"
        animate={false}
        lineColor="#262626"
      >
        {Experience.map((e, i) => (
          <VerticalTimelineElement
            key={i}
            visible={true}
            className="vertical-timeline-element--work"
            contentStyle={{ background: e.bg, color: "#fff" }}
            contentArrowStyle={{ borderRight: `7px solid  ${e.bg}` }}
            date={e.Date}
            iconStyle={{ background: e.bg, color: "#fff" }}
            icon={""}
          >
            <div className="flex items-center justify-between w-full">
              <h3 className="vertical-timeline-element-title">{e.title}</h3>
              <p className=" vertical-timeline-element-title opacity-70 sm:flex hidden">
                {e.Date}
              </p>
            </div>
            <h4 className="vertical-timeline-element-subtitle">{e.location}</h4>
            <div className="flex items-center justify-between w-full">
              <p>{e.School}</p>
              <p className=" vertical-timeline-element-title opacity-70 sm:flex hidden">
                {e.description}
              </p>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </AnimatedDiv>
  );
};

export default WorkTimeline;
