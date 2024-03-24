"use client";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Image from "next/image";
import React from "react";
import Main_Logo from "../../../public/Main_Logo.svg";
import { usePathname } from "next/navigation";
import { Divider } from "antd";

const NavBar = () => {
  const pathname = usePathname();
  const navItems: {
    name: string;
    url: string;
    icon: string;
  }[] = [
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
    <div className=" w-64 sticky top-0 bg-dark_secondary_background h-screen py-5 px-4">
      <div className=" w-full flex flex-wrap justify-center mb-[30px]">
        <span>
          <Image src={Main_Logo} alt="Anish Sherchan" />
        </span>
      </div>

      <span className={`${navClassNames} text-dark_text  font-medium`}>
        Menu
      </span>

      <div className=" flex flex-col gap-2 mt-3">
        {navItems.map((item, index) => {
          return (
            <Link key={index} href={item.url}>
              <div className=" flex flex-wrap flex-row gap-4 px-[15px] py-2 content-center">
                <Icon
                  id={item.name}
                  icon={item.icon}
                  className={`
                  ${
                    pathname == item.url
                      ? "text-dark_active_link"
                      : " text-dark_text"
                  }`}
                  width="20px"
                  height="20px"
                />
                <span
                  className={`${navClassNames}
                  
                  ${
                    pathname == item.url
                      ? "text-dark_active_link"
                      : " text-dark_text"
                  }`}
                >
                  {item.name}
                </span>
              </div>
            </Link>
          );
        })}
      </div>

      <Divider
        type="horizontal"
        className=" h-[1px] mb-5 rounded-full bg-dark_stroke text-dark_stroke"
      />
      <span className={`${navClassNames} text-dark_text  font-medium`}>
        Connect
      </span>
    </div>
  );
};

export default NavBar;
