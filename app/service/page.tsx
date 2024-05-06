import React from "react";
import { GetServiceData } from "../_lib/SanityFetch";
import ServicesCard from "../components/ServicesCard";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Service | Anish Sherchan",
  description: "Services which i provide for building web applications.",
  keywords: [
    "Anish Sherchan",
    "frontend development",
    "backend development",
    "Services",
    "React Js",
    "Next Js",
    "Anish Sherchan",
    "Sherchan",
    "Anish",
  ],
};
const Services = async () => {
  // Fetch service data asynchronously
  const serviceData = (await GetServiceData()) || [];

  return (
    <div className=" text-dark_text flex flex-col gap-[60px]">
      {serviceData?.map((data: any, index: number) => {
        return (
          //
          <ServicesCard key={index} data={data} />
        );
      })}
    </div>
  );
};

export default Services;
