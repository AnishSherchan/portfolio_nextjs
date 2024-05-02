import React from "react";
import { Metadata } from "next";
import { WavyBackground } from "../components/WaveBackground";

import ProjectShowCase from "../components/Contents/ProjectShowCase";
import { GetProjectData } from "../_lib/SanityFetch";

export const metadata: Metadata = {
  title: "Showcase work | Anish Sherchan",
  description: "I design and code interface that fascinate users.",
  keywords: [
    "Anish Sherchan",
    "frontend development",
    "React Js",
    "Next Js",
    "Anish Sherchan",
    "Sherchan",
    "Anish",
  ],
};

const Project = async () => {
  const projectData: any = (await GetProjectData()) || [];

  return (
    <>
      <WavyBackground />
      <div className=" z-40 relative">
        <h1 className=" text-dark_heading font-bold text-3xl">
          Showcase work
          <span className=" text-3xl text-[#DDAC58] font-bold">.</span>
        </h1>
        <h3 className=" text-xl text-dark_text font-medium">
          I design and code interface that fascinate users.{" "}
        </h3>
        <div className="flex flex-col lg:gap-[60px] gap-[30px] mt-[60px]">
          <ProjectShowCase trimProjectCard={false} projectData={projectData} />
        </div>
      </div>
    </>
  );
};

export default Project;
