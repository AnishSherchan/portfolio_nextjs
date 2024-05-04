"use client";
import React from "react";
import TechStackCard from "../TechStackCard";
import { useRouter } from "next/navigation";

const TechStackParticular = ({
  techStackData,
  title,
  filter,
}: {
  techStackData: any;
  title: string;
  filter: string;
}) => {
  const router = useRouter();
  return (
    <div className=" py-[10px] flex flex-col gap-[15px]" id="frontend_stack">
      <h2 className=" text-white text-2xl">{title}</h2>
      <div className="w-full flex flex-row flex-wrap gap-5 lg:gap-[30px] justify-center">
        {techStackData
          ?.filter((stack: any) => stack.development_format === filter)
          .map((tech: any) => {
            return (
              <TechStackCard
                title={tech.name}
                description={tech.description}
                icon={tech.icon}
                key={tech._id}
                pinned={tech.pinned}
                handleClick={() =>
                  router.push(`/techstack/${tech.slug.current}`)
                }
              />
            );
          })}
      </div>
    </div>
  );
};

export default TechStackParticular;
