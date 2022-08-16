import React from "react";
import { ArrowNarrowRightIcon,ChevronRightIcon } from "@heroicons/react/solid";
import image from "../assets/me.png";
const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black to-gray-800 text-white h-screen"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">I'm a full Stack Developer</h2>
          <p className="text-gray-400 py-4 max-w-md">
            I have a year of experience building and designing software.
            currently, I love to work on web applications using technologies
            likw React, Tailwind, Next JS and Sanity io.
          </p>
          <div>
            <button className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer group">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <ChevronRightIcon className="w-5 h-5 ml-1" />
              </span>
            </button>
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#076585] to-[#fff] rounded-xl ">
          <img
            src={image}
            alt="Jatin-Image"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
