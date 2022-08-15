import React from "react";
import { MenuIcon, ArrowNarrowRightIcon } from "@heroicons/react/solid";
const Navbar = () => {
  return (
    <div className="sticky p-3 bg-white w-full">
      <div className="sticky flex justify-between items-center md:hidden">
        <div>
          <h3 className="font-lobster text-4xl">Jatin</h3>
        </div>
        <div className="flex items-center gap-7">
          <h4 className="border-b-2 border-black hover:border-b-0">
            Hire Me
          </h4>
          <span className=" w-6 h-5 ">
            <MenuIcon />
          </span>
        </div>
      </div>

{/* navbar for different size*/}

      <div className="md:flex items-center justify-between hidden">
        <div className="group h-[6rem] ">
          <h3 className="font-lobster text-3xl group-hover:border-b-2 border-black p-1">Jatin</h3>

          <h4 className="border-b-2 border-black hover:border-b-0 w-[7.5rem] group-hover:hidden p-1">
            Show Creativity
          </h4>
        </div>
        <div className="flex gap-7 items-center justify-between w-[20rem]">
          <button className="bg-black text-white px-6 py-2 rounded-xl items-center hover:bg-gray-700">
            Hire Me
          </button>
          <div className="group items-center ">
            <button className="flex items-center gap-3 m-2 p-2 border-b-2 border-black group-hover:border-b-0">
              Contact Me
              <span className="">
                <ArrowNarrowRightIcon className="w-5 h-5 items-center group-hover:block hidden" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
