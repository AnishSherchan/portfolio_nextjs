"use client";
import React, { use } from "react";
import TechStackCard from "../TechStackCard";
import { useRouter } from "next/navigation";

const TechStack = ({ techstackref }: { techstackref: any }) => {
  const router = useRouter();
  return (
    <div className=" w-full flex flex-row flex-wrap gap-5 lg:gap-8 justify-center ">
      {techstackref?.map((tech: any) => {
        return (
          <TechStackCard
            title={tech.name}
            description={tech.description}
            icon={tech.icon}
            key={tech._id}
            pinned={tech.pinned}
            handleClick={() => router.push(`/techstack/${tech.slug.current}`)}
          />
        );
      })}
    </div>
  );
};

export default TechStack;
