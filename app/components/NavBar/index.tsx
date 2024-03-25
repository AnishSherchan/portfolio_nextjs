"use client";
import { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Image from "next/image";
import React from "react";
import Main_Logo from "../../../public/Main_Logo.svg";
import Collapsed from "../../../public/collapsed_Logo.svg";
import { usePathname } from "next/navigation";
import { Divider } from "antd";

const NavBar = () => {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const social = [
    {
      name: "Github",
      url: "https://github.com/AnishSherchan",
      icon: "codicon:github",
    },
    {
      name: "X (Twitter)",
      url: "https://twitter.com/AnishSherchan06",
      icon: "ri:twitter-x-fill",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/anish-sherchan-aba3801b0/",
      icon: "ant-design:linkedin-outlined",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/anishsherchan146/",
      icon: "radix-icons:instagram-logo",
    },
  ];

  const navItems = [
    {
      name: "Explore",
      url: "/",
      icon: "material-symbols:explore-outline",
    },
    {
      name: "Project",
      url: "/project",
      icon: "ant-design:fund-projection-screen-outlined",
    },
    {
      name: "Tech Stack",
      url: "/techstack",
      icon: "ant-design:code-outlined",
    },
    {
      name: "Service",
      url: "/service",
      icon: "material-symbols:laptop-chromebook-outline-rounded",
    },
    {
      name: "About",
      url: "/about",
      icon: "uil:user",
    },
    {
      name: "Contact",
      url: "/contact",
      icon: "fa:paper-plane",
    },
  ];

  const navClassNames = " text-base font-bold";

  return (
    <div
      className={`${
        isCollapsed ? "lg:w-[88px]" : "lg:w-64"
      } transition-width duration-500 lg:block z-10 lg:sticky lg:top-0 bg-dark_secondary_background lg:min-h-screen lg:h-full lg:overflow-visible lg:py-5 lg:px-5 fixed bottom-0 sm:bottom-2 sm:rounded-3xl lg:rounded-none right-0 left-0 flex mx-auto overflow-x-scroll sm:w-[450px]  px-2 py-2`}
    >
      <div className="lg:relative hidden lg:block">
        <button
          onClick={() => setIsCollapsed((prev) => !prev)}
          className="text-dark_heading absolute top-1 right-[-30px] bg-dark_primary_background rounded-full shadow-md ring-2 ring-dark_secondary_background"
        >
          <Icon
            icon={isCollapsed ? "mingcute:right-line" : "mingcute:left-line"}
            height={20}
          />
        </button>
      </div>

      {/* <div
        className={`transition-opacity duration-300 ${
          isCollapsed ? "opacity-0" : "opacity-100"
        }`}
      > */}
      <div className="w-full lg:flex hidden flex-wrap justify-center mb-[30px]  ">
        <span>
          <Image
            src={isCollapsed ? Collapsed : Main_Logo}
            alt="Anish Sherchan"
          />
        </span>
      </div>

      <p
        className={`${navClassNames} lg:block hidden  ${
          isCollapsed ? "text-center" : ""
        } text-[#ABABAB]  font-medium text-base`}
      >
        Menu
      </p>
      <div className="flex md:w-max lg:w-auto justify-center lg:justify-normal lg:flex-col gap-1 lg:mt-3 mx-auto">
        {navItems.map((item, index) => (
          <Link key={index} href={item.url} prefetch={true}>
            <div className="flex relative  flex-wrap w-max lg:w-auto flex-col lg:flex-row  px-[15px] gap-[1px] py-2 items-center">
              <Icon
                id={item.name}
                icon={item.icon}
                className={`${
                  pathname == item.url
                    ? "text-dark_active_link"
                    : "text-dark_text"
                }`}
                width="18px"
                height="18px"
              />
              <span
                className={`transition-all  duration-500  lg:absolute left-12 text-sm lg:text-base ${
                  isCollapsed ? "opacity-0" : "opacity-100"
                } ${
                  pathname === item.url
                    ? "text-dark_active_link"
                    : "text-dark_text"
                }`}
              >
                {item.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
      {/* </div> */}

      <Divider
        type="horizontal"
        className="hidden lg:block h-[1px] mb-5 rounded-full bg-dark_stroke text-dark_stroke"
      />

      <p
        className={`${navClassNames} lg:block hidden ${
          isCollapsed ? "text-center" : ""
        } text-[#ABABAB]  font-medium text-base`}
      >
        Connect
      </p>
      <div className="flex md:w-max lg:w-auto justify-center lg:justify-normal lg:flex-col gap-1 lg:mt-3 mx-auto">
        {social.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex relative  flex-wrap w-max lg:w-auto flex-col lg:flex-row  px-[15px] gap-[1px] py-2 items-center"
          >
            <Icon
              id={item.name}
              icon={item.icon}
              className={`${
                pathname == item.url
                  ? "text-dark_active_link"
                  : "text-dark_text"
              }`}
              width="18px"
              height="18px"
            />
            <span
              className={`transition-all  duration-500  lg:absolute left-12 text-sm lg:text-base ${
                isCollapsed ? "opacity-0" : "opacity-100"
              } ${
                pathname === item.url
                  ? "text-dark_active_link"
                  : "text-dark_text"
              }`}
            >
              {item.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
