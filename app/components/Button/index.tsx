"use client";
import { Icon } from "@iconify/react";
import Spinner from "../Spinner";
import Link from "next/link";

export const Button = ({
  title,
  onClick,
  style,
  loading,
  icon,
  type,
}: {
  title: string;
  onClick?: any;
  style?: string;
  loading?: boolean;
  icon?: string;
  type: string;
}) => {
  let classNames = "";
  switch (type) {
    case "Primary":
      classNames =
        "bg-dark_primary_btn rounded-[10px] hover:bg-[#ccc] px-[25px] cursor-pointer  py-[8px] text-base";
      break;
    case "Secondary":
      classNames =
        "bg-dark_secondary_background cursor-pointer hover:bg-[#1f1f1f] rounded-[10px] text-white px-[25px] border-2 border-dark_stroke  py-[8px] text-base";
      break;
    default:
      classNames =
        "bg-dark_active_link cursor-pointer hover:bg-[#0062d1] rounded-[10px] text-white px-[25px] py-[10px] text-base";
      break;
  }
  return (
    <button
      className={`${classNames} transition-colors flex flex-warp items-center gap-[8px] `}
      disabled={loading}
      onClick={onClick}
    >
      {loading && <Spinner />}{" "}
      {icon && <Icon icon={icon} height={18} width={18} />}
      {title}
    </button>
  );
};

export const BackButton = ({
  href,
  icon,
  title,
}: {
  href: string;
  icon: string;
  title: string;
}) => {
  return (
    <Link href={href}>
      <div className="flex flex-wrap gap-[8px] text-dark_text cursor-pointer items-center">
        {" "}
        <Icon
          icon={icon}
          height={18}
          width={18}
          className="text-dark_text"
        />{" "}
        {title}
      </div>
    </Link>
  );
};

export const Chip = ({ title }: { title: string }) => {
  return (
    <div className=" bg-[#3B82F6] px-[14px] flex justify-center items-center py-[4px] w-fit rounded-full cursor-pointer">
      <span className=" text-white text-sm">{title}</span>
    </div>
  );
};
