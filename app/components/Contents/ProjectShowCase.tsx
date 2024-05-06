"use client";
import React from "react";
import { Button } from "../Button";
import { useRouter } from "next/navigation";
import ProjectCard from "../ProjectCard";

const ProjectShowCase = ({
  projectData,
  trimProjectCard,
}: {
  projectData: any;
  trimProjectCard: boolean;
}) => {
  const router = useRouter();
  return (
    <div
      id="projects"
      className=" z-10 relative flex flex-col flex-wrap gap-[15px] mt-[15px]"
    >
      <div>
        <div className=" flex flex-wrap justify-between items-center">
          <h2 className=" text-dark_heading text-2xl">Latest Projects</h2>
          {/* ? Add onClick Event */}
          {trimProjectCard && (
            <Button
              onClick={() => router.push("/project")}
              title="View all"
              type="Secondary"
            />
          )}
        </div>
        <h3 className=" text-dark_text text-xl">
          Some recent project which i have finished and is on production.{" "}
        </h3>
      </div>
      <div className="w-full flex flex-row flex-wrap gap-5 lg:gap-[70px] justify-center">
        {(trimProjectCard ? projectData.slice(0, 2) : projectData).map(
          (project: any) => (
            <ProjectCard
              key={project._id}
              img={project.image}
              name={project.name}
              desc={project.description}
              _createdAt={project._createdAt}
              icon={project.techstackref}
              slug={project.slug.current}
            />
          )
        )}
      </div>
    </div>
  );
};

export default ProjectShowCase;
