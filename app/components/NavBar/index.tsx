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
      url: "",
      icon: "codicon:github",
    },
    {
      name: "X (Twitter)",
      url: "",
      icon: "ri:twitter-x-fill",
    },
    {
      name: "LinkedIn",
      url: "",
      icon: "ant-design:linkedin-outlined",
    },
    {
      name: "Instagram",
      url: "",
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
        isCollapsed ? "w-[88px]" : "w-64"
      } transition-width duration-500 z-10 sticky top-0 bg-dark_secondary_background min-h-screen h-full py-5 px-5`}
    >
      <div className="relative">
        <button
          onClick={() => setIsCollapsed((prev) => !prev)}
          className="text-dark_heading absolute right-[-30px] bg-dark_secondary_background rounded-full shadow-md ring-1 ring-dark_stroke"
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
      <div className="w-full flex flex-wrap justify-center mb-[30px]">
        <span>
          <Image
            src={isCollapsed ? Collapsed : Main_Logo}
            alt="Anish Sherchan"
          />
        </span>
      </div>

      <p
        className={`${navClassNames}  ${
          isCollapsed ? "text-center" : ""
        } text-[#ABABAB]  font-medium text-base`}
      >
        Menu
      </p>

      <div className="flex  flex-col gap-1 mt-3">
        {navItems.map((item, index) => (
          <Link key={index} href={item.url}>
            <div className="flex relative  flex-wrap flex-row  px-[15px] py-2 items-center">
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
                className={`transition-all duration-500  absolute left-12 text-base ${
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
        className="h-[1px] mb-5 rounded-full bg-dark_stroke text-dark_stroke"
      />

      <p
        className={`${navClassNames} ${
          isCollapsed ? "text-center" : ""
        } text-[#ABABAB]  font-medium text-base`}
      >
        Connect
      </p>

      <div className="flex flex-col gap-1 mt-3">
        {social.map((item, index) => (
          <Link key={index} href={item.url}>
            <div className="flex relative flex-wrap flex-row gap-4 px-[15px] py-2 items-center">
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
                className={`transition-all text-base duration-500  absolute left-12 ${
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
    </div>
  );
};

export default NavBar;
