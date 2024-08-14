"use client";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import React from "react";
import AnimatedDiv from "./AnimatedDiv";

const Timeline = () => {
  const Education = [
    {
      Date: "2021 - 2025",
      title: "Bachelor of Engineering CSE",
      School: "Chandigarh University",
      location: "Mohali, Punjab",
      description: "Graduated Matricuation",
      bg: "#F11A7B",
    },
    {
      Date: "2019 - 2021",
      title: "Intermediate - 12th",
      School: "Holy Child Public School",
      location: "Rewari, Haryana",
      description: "Graduated Matricuation",
      bg: "#387ADF",
    },
    {
      Date: "2018 - 2019",
      title: "Matriculation - 10th",
      School: "Holy Child Public School",
      location: "Rewari, Haryana",
      description: "Graduated Matricuation",
      bg: "#F57D1F",
    },
  ];

  return (
    <AnimatedDiv>
      <VerticalTimeline
        className="opacity-95"
        animate={false}
        lineColor="#262626"
      >
        {Education.map((e, i) => (
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
            <h3 className="vertical-timeline-element-title">{e.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{e.location}</h4>
            <p>{e.School}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </AnimatedDiv>
  );
};

export default Timeline;
