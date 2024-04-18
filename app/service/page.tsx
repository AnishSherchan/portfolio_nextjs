import React from "react";
import { GetServiceData } from "../_lib/SanityFetch";
import ServicesCard from "../components/ServicesCard";

const Services = async () => {
  // Fetch service data asynchronously
  const serviceData = (await GetServiceData()) || [];
  console.log(serviceData);

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
