"use client";
import { Icon } from "@iconify/react";
import React from "react";

const TechStackCard = ({
  title,
  description,
  icon,
  pinned,
}: {
  title: string;
  description: string;
  icon: string;
  pinned: boolean;
}) => {
  return (
    <div className=" p-[14px] cursor-pointer max-w-[470px] w-[470px] gap-[10px] border-2 border-dark_stroke rounded-[17px] flex justify-between items-center">
      <div id="Description" className=" flex flex-col flex-wrap gap-1">
        <div className=" flex flex-wrap gap-1 items-center">
          <h2 className=" text-dark_heading font-medium text-2xl">{title}</h2>
          {pinned && (
            <Icon
              icon="material-symbols-light:star"
              width="20px"
              className=" text-dark_heading"
            />
          )}
        </div>
        <div className="flex flex-wrap">
          <p className=" text-dark_text text-base">
            {description?.length > 90
              ? `${description?.slice(0, 90)}...`
              : description}
          </p>
        </div>
      </div>
      <div id="icons">
        <Icon icon={icon} width={40} />
      </div>
    </div>
  );
};

export default TechStackCard;
