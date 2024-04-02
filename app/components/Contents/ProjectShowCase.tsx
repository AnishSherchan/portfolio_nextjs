"use client";
import React from "react";
import { Button } from "../Button";
import { useRouter } from "next/navigation";
import ProjectCard from "../ProjectCard";

const ProjectShowCase = ({ projectData }: { projectData: any }) => {
  const router = useRouter();
  return (
    <div
      id="projects"
      className=" z-10 relative flex flex-col flex-wrap gap-[15px] mt-[15px]"
    >
      <div className=" flex flex-wrap justify-between items-center">
        <h2 className=" text-dark_heading">Latest Projects</h2>
        {/* ? Add onClick Event */}
        <Button
          onClick={() => router.push("/project")}
          title="View all"
          type="Secondary"
        />
      </div>
      <div className="w-full flex flex-row flex-wrap gap-[30px] justify-between">
        {projectData.slice(0, 2).map((project: any) => {
          return (
            <ProjectCard
              key={project._id}
              img={project.image}
              name={project.name}
              desc={project.description}
              _createdAt={project._createdAt}
              icon={project.techstackref}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectShowCase;
