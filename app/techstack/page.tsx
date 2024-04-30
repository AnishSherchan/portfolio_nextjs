import React from "react";
import { Metadata } from "next";
import TechStackCard from "../components/TechStackCard";
import { GetTechStackData } from "../_lib/SanityFetch";

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
  const techStackData: any = (await GetTechStackData()) || [];

  return (
    <>
      <div className=" py-[10px] flex flex-col gap-[15px]" id="frontend_stack">
        <h2 className=" text-white text-2xl">Frontend tools</h2>
        <div className="w-full flex flex-row flex-wrap lg:gap-[30px] justify-center">
          {techStackData
            ?.filter((stack: any) => stack.development_format === "frontend")
            .map((tech: any) => {
              return (
                <TechStackCard
                  title={tech.name}
                  description={tech.description}
                  icon={tech.icon}
                  key={tech._id}
                  pinned={tech.pinned}
                />
              );
            })}
        </div>
      </div>

      <div className=" py-[10px] flex flex-col gap-[15px]" id="backend_stack">
        <h2 className=" text-white text-2xl">Backend tools</h2>
        <div className="w-full flex flex-row flex-wrap lg:gap-[30px] justify-center">
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
                />
              );
            })}
        </div>
      </div>
    </>
  );
};

export default TechStack;
