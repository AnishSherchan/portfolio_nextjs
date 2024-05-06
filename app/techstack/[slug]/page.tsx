import React from "react";
import { BackButton } from "@/app/components/Button";
import Image from "next/image";
import NoDataSvg from "@/public/undraw_empty_re_opql.svg";
import {
  GetRefrenceProjectData,
  GetSingleTechStackData,
} from "@/app/_lib/SanityFetch";
import Icon from "@/app/components/Icon";
import ProjectCard from "@/app/components/ProjectCard";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Tech Stack | Anish Sherchan",
  description: "Tools i used for creating web applications.",
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

const TechStackData = async ({ params }: { params: { slug: string } }) => {
  const data = await GetSingleTechStackData(params.slug);
  const projectData = (await GetRefrenceProjectData(data[0]._id)) || [];
  const { icon, description, name, _id, pinned } = data[0];
  return (
    <div className="flex flex-col lg:gap-[60px] gap-[30px]">
      <div className="flex flex-col gap-[10px]">
        <BackButton href="/techstack" icon="ep:back" title="All Tech Stack" />
        <h1 className=" text-white font-bold text-3xl">{name}</h1>
      </div>
      <div className="flex w-full flex-col gap-[35px] p-3">
        <div className="flex flex-col md:flex-row gap-[20px] md:gap-[50px]  justify-between">
          <div className="flex justify-center md:justify-normal">
            <Icon icon={icon} width="150" />
          </div>
          <p className=" text-white text-base">{description}</p>
        </div>
        <h2 className=" text-white text-2xl mt-10 font-semibold">
          Projects in {name}
        </h2>
        {projectData.length > 0 ? (
          <div className="w-full flex flex-row flex-wrap gap-5 lg:gap-[70px] justify-center">
            {projectData.map((project: any) => (
              <ProjectCard
                key={project._id}
                img={project.image}
                name={project.name}
                desc={project.description}
                _createdAt={project._createdAt}
                icon={project.techstackref}
                slug={project.slug.current}
              />
            ))}
          </div>
        ) : (
          <div className=" w-full flex flex-col items-center gap-10 mt-8">
            <Image
              src={NoDataSvg}
              alt="Project Image"
              className=" w-64 h-auto"
            />
            <p className=" text-white text-xl">
              No Projects on <span className=" font-semibold">{name}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TechStackData;
