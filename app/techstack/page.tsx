import React from "react";
import { GetTechStackData } from "../_lib/SanityFetch";
import TechStackCard from "../components/TechStackCard";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Tech Stack | Anish Sherchan",
  description: "Tools i used for creating web applications.",
  keywords: [
    "Anish Sherchan",
    "frontend development",
    "React Js",
    "Tech Stack",
    "Next Js",
    "Anish Sherchan",
    "Sherchan",
    "Anish",
  ],
};

const TechStack = async () => {
  // const router = useRouter();
  const techStackData: any = (await GetTechStackData()) || [];

  return (
    <>
      <div className=" z-40 relative">
        <h1 className=" text-dark_heading font-bold text-3xl">
          Tech Stack
          <span className=" text-3xl text-[#DDAC58] font-bold">.</span>
        </h1>
        <h3 className=" text-xl text-dark_text font-medium">
          Tools and resources which I use for developing Web applications.
        </h3>
        <div className="flex flex-col lg:gap-[60px] gap-[30px] mt-[60px]">
          <div
            className=" py-[10px] flex flex-col gap-[15px]"
            id="frontend_stack"
          >
            <h2 className=" text-white text-2xl">Frontend tools</h2>
            <div className="w-full flex flex-row flex-wrap gap-5 lg:gap-[30px] justify-center">
              {techStackData
                ?.filter(
                  (stack: any) => stack.development_format === "frontend"
                )
                .map((tech: any) => {
                  return (
                    <TechStackCard
                      title={tech.name}
                      description={tech.description}
                      icon={tech.icon}
                      key={tech._id}
                      pinned={tech.pinned}
                      slug={tech.slug.current}
                    />
                  );
                })}
            </div>
          </div>

          <div
            className=" py-[10px] flex flex-col gap-[15px]"
            id="frontend_stack"
          >
            <h2 className=" text-white text-2xl">Backend tools</h2>
            <div className="w-full flex flex-row flex-wrap gap-5 lg:gap-[30px] justify-center">
              {techStackData
                ?.filter((stack: any) => stack.development_format === "backend")
                .map((tech: any) => {
                  return (
                    <TechStackCard
                      title={tech.name}
                      description={tech.description}
                      icon={tech.icon}
                      key={tech._id}
                      pinned={tech.pinned}
                      slug={tech.slug.current}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TechStack;
