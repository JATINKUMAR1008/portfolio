import React from "react";
import { MenuIcon, ArrowNarrowRightIcon } from "@heroicons/react/solid";
const Navbar = () => {
  return (
    <>
    <div className="flex justify-between items-center w-full h-20 text-white px-4 bg-black fixed">
      <div>
        <h1 className="text-5xl font-lobster ml-2">jatin</h1>
      </div>
      <ul className="flex">
        <li className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">home</li>
        <li className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">about</li>
        <li className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">portfolio</li>
        <li className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">experience</li>
        <li className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">contact me</li>
      </ul>
    </div>
    
    </>
  );
};

export default Navbar;
