"use client";
import React from "react";
import { Icon } from "@iconify/react";

const index = ({
  icon,
  width,
  className,
}: {
  icon: string;
  width: string;
  className?: string;
}) => {
  return <Icon icon={icon} width={width} className={className} />;
};

export default index;
