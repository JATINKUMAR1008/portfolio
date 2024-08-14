import React from "react";
import { Button } from "@/components/ui/button";
import styles from "./navbar.module.css";
import Link from "next/link";
const NavBar = () => {
  return (
    <div
      className={`${styles.navbar} flex justify-between overflow-x-clip my-3 md:my-6 px-[1rem] sm:px-[2rem] lg:px-[9rem]`}
    >
      <Link href={"/"} className="font-extrabold text-2xl ml-1">
        jk
      </Link>
      <div className="flex gap-2">
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          <Button variant={"outline"} size={"sm"}>
            Resume
          </Button>
        </a>
        <a href="mailto:jatinkumar1008@outlook.com.com">
          <Button variant={"outline"} size={"sm"}>
            Contact
          </Button>
        </a>
      </div>
    </div>
  );
};

export default NavBar;
