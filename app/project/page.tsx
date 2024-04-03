import React from "react";
import { Metadata } from "next";
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
      <ProjectShowCase trimProjectCard={false} projectData={projectData} />
    </>
  );
};

export default Project;
