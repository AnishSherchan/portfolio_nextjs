import React from "react";
import { Metadata } from "next";
import { GetTechStackData } from "../_lib/SanityFetch";
import TechStackParticular from "../components/Contents/TechStackParticular";

export const metadata: Metadata = {
  title: "Tech Stack | Anish Sherchan",
  description: "Tools i used for creating web applications.",
  keywords: [
    "Anish Sherchan",
    "frontend development",
    "React Js",
    "Tech Stack",
    "Next Js",
    "Anish Sherchan",
    "Sherchan",
    "Anish",
  ],
};

const TechStack = async () => {
  // const router = useRouter();
  const techStackData: any = (await GetTechStackData()) || [];

  return (
    <>
      <div className=" z-40 relative">
        <h1 className=" text-dark_heading font-bold text-3xl">
          Tech Stack
          <span className=" text-3xl text-[#DDAC58] font-bold">.</span>
        </h1>
        <h3 className=" text-xl text-dark_text font-medium">
          Tools and resources which I use for developing Web applications.
        </h3>
        <div className="flex flex-col lg:gap-[60px] gap-[30px] mt-[60px]">
          <TechStackParticular
            title="Frontend tools"
            filter="frontend"
            techStackData={techStackData}
          />

          <TechStackParticular
            title="Backend tools"
            filter="backend"
            techStackData={techStackData}
          />
        </div>
      </div>
    </>
  );
};
export default TechStack;
