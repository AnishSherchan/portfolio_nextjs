"use client";
import React from "react";
import ProjectCard from "../ProjectCard";
import { useRouter } from "next/navigation";

const ProjectPArticular = ({ projectData }: { projectData: any }) => {
  const router = useRouter();
  return (
    <div className="w-full flex flex-row flex-wrap gap-5 lg:gap-[70px] justify-center">
      {projectData.map((project: any) => (
        <ProjectCard
          handleClick={() => router.push(`/project/${project.slug.current}`)}
          key={project._id}
          img={project.image}
          name={project.name}
          desc={project.description}
          _createdAt={project._createdAt}
          icon={project.techstackref}
        />
      ))}
    </div>
  );
};

export default ProjectPArticular;
