import Socials from "./Socials";
import dynamic from "next/dynamic";
import Link from "next/link";
import { GoArrowDown } from "react-icons/go";

const Clock = dynamic(() => import("../components/Clock"), { ssr: false });

interface Props {
  className?: string;
}

const Footer = ({ className }: Props) => {
  return (
    <footer
      className={`${className} text-xs
     bottom-0 z-20 w-full p-4 border-gray-200 shadow md:p-6 border-0 `}
    >
      <p className=" text-gray-500 text-center  dark:text-gray-400">
        © 2024{" "}
        <a href="https://github.com/JATINKUMAR1008" className="hover:underline">
          Jatin Kumar
        </a>
        . All Rights Reserved.
      </p>
      {/* <div className="flex flex-wrap items-center mt-3  font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <Socials />
      </div> */}
    </footer>
  );
};

export default Footer;
