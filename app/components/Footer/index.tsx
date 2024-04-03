"use client";
import Link from "next/link";
import React from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import MainLogo from "../../../public/Main_Logo.svg";

const footer = () => {
  return (
    <div
      className={`w-full hidden lg:block transition-all duration-700  z-10 py-5
       bg-dark_secondary_background text-white px-10`}
    >
      <div className="flex flex-col lg:flex-row flex-wrap lg:justify-between lg:items-center">
        <Image src={MainLogo} alt="Anish Sherchan" />
        <div className="flex justify-center lg:justify-end space-x-3 lg:space-x-5">
          <Link href="/">
            <p className="flex items-center cursor-pointer text-white text-xl">
              Explore{" "}
            </p>
          </Link>
          <Link href="/project">
            <p className="flex items-center cursor-pointer text-white text-xl">
              Project{" "}
            </p>
          </Link>
          <Link href="/techstack">
            <p className="flex items-center cursor-pointer text-white text-xl">
              Tech Stack{" "}
            </p>
          </Link>
          <Link href="/service">
            <p className="flex items-center cursor-pointer text-white text-xl">
              Service{" "}
            </p>
          </Link>
          <Link href="/about">
            <p className="flex items-center cursor-pointer text-white text-xl">
              About{" "}
            </p>
          </Link>
          <Link href="/contact">
            <p className="flex items-center cursor-pointer text-white text-xl">
              Contact{" "}
            </p>
          </Link>
        </div>
      </div>
      <hr className=" hidden lg:block border-t bg-white my-3"></hr>
      <div className="flex lg:flex-row flex-col  justify-between items-center">
        <div>
          <p className="text-white text-center lg:text-left text-xl">
            All Rights Reserved &copy; 2021
          </p>
          <p className="text-white text-base pt-2 text-center lg:text-left">
            <span className=" text-blue-dot">~</span> Innovate Design
          </p>
        </div>
        <div className="flex justify-evenly items-center pt-6 lg:pt-0 space-x-5">
          <a
            href="https://github.com/AnishSherchan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon="codicon:github" width="18px" height="18px" />
          </a>
          <a
            href="https://twitter.com/AnishSherchan06"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon="ri:twitter-x-fill" width="18px" height="18px" />
          </a>
          <a
            href="https://www.linkedin.com/in/anish-sherchan-aba3801b0/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              icon="ant-design:linkedin-outlined"
              width="18px"
              height="18px"
            />
          </a>
          <a
            href="https://www.instagram.com/anishsherchan146/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              icon="radix-icons:instagram-logo"
              width="18px"
              height="18px"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default footer;
