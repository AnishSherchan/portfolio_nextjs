"use client";
import { useRouter } from "next/navigation";
interface ProjectCardProps {
  img: string; // Assuming img is a string representing the image URL
  desc: string;
  name: string;
  icon: { icon: string }[];
  _createdAt: string; // Assuming _createdAt is a string representing the creation date
  slug: string;
}

import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import ProjectDefault from "../../../public/ProjectDefault.svg";
import moment from "moment";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/app/_lib/client";

const builder = imageUrlBuilder(client);
const ProjectCard: React.FC<ProjectCardProps> = ({
  img,
  desc,
  name,
  _createdAt,
  icon,
  slug,
}) => {
  const router = useRouter();
  return (
    <div
      className=" max-w-[470px] w-[470px] h-auto rounded-[17px] p-3 flex flex-col flex-wrap gap-3 cursor-pointer bg-dark_secondary_background border-2 border-dark_stroke"
      onClick={() => router.push(`/project/${slug}`)}
    >
      <div className=" relative max-w-[500px] h-[220px] overflow-hidden">
        <Image
          className=" w-full h-auto rounded-[5px] object-cover"
          src={img ? builder.image(img).quality(100).url() : ProjectDefault}
          alt="Project Image"
          fill={true}
          priority
        />
      </div>
      <div
        id="Desc_Project"
        className=" flex flex-col px-[10px] gap-[15px] flex-wrap"
      >
        <h2 className=" text-dark_heading text-2xl">{name}</h2>
        <p className=" text-dark_text text-base">
          {desc?.length > 180 ? `${desc?.slice(0, 180)}...` : desc}
        </p>
        <div className="flex flex-row flex-wrap justify-between">
          <div className=" flex gap-[10px] items-center ">
            {icon?.map((item, index) => {
              return <Icon icon={item.icon} key={index} width={18} />;
            })}
          </div>
          <p className=" text-dark_text text-sm">
            {" "}
            {moment(_createdAt).fromNow()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
