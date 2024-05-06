"use client";
import React from "react";
import { Button } from "../Button";
import TechStackCard from "../TechStackCard";
import { useRouter } from "next/navigation";

const TechStackShowCase = ({ techStackData }: { techStackData: any }) => {
  const router = useRouter();
  const pinnedFrontendTech = techStackData?.filter((stack: any) => {
    return stack.pinned === true && stack.development_format === "frontend";
  });
  const pinnedBackendTech = techStackData?.filter((stack: any) => {
    return stack.pinned === true && stack.development_format === "backend";
  });
  return (
    <div
      id="TechStack"
      className=" z-10 relative flex flex-col flex-wrap gap-[15px] mt-[15px]"
    >
      <div className=" flex flex-col flex-wrap gap-3 lg:gap-0">
        <div className=" flex justify-between items-center ">
          <h2 className=" text-dark_heading text-2xl">Tech Stack</h2>
          <Button
            onClick={() => router.push("/techstack")}
            title="View all"
            type="Secondary"
          />
        </div>
        <h3 className=" text-dark_text text-xl">
          Tools and resources which I use for developing Web applications.
        </h3>
      </div>
      <>
        <div className="w-full flex flex-row flex-wrap gap-5 lg:gap-10 justify-center">
          {pinnedFrontendTech?.map((tech: any) => {
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
        <div className="w-full flex flex-row flex-wrap gap-5 lg:gap-10 justify-center">
          {pinnedBackendTech?.map((tech: any) => {
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
      </>
    </div>
  );
};

export default TechStackShowCase;
