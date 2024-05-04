import React from "react";
import { BackButton } from "@/app/components/Button";
import { useRouter } from "next/navigation";
import {
  GetRefrenceProjectData,
  GetSingleTechStackData,
} from "@/app/_lib/SanityFetch";
import Icon from "@/app/components/Icon";
import ProjectPArticular from "@/app/components/Contents/ProjectPArticular";

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
        <h2 className=" text-white text-2xl">Projects in {name}</h2>
        {projectData.length > 0 ? (
          <ProjectPArticular projectData={projectData} />
        ) : (
          <p className=" text-white">No data</p>
        )}
      </div>
    </div>
  );
};

export default TechStackData;
