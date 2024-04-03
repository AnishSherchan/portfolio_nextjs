import { GetProjectData, GetTechStackData } from "./_lib/SanityFetch";
import { TypewriterEffect as TypewriterEffectSmooth } from "./components/TypeWriter";
import { Button } from "./components/Button";
import { BackgroundBeams } from "./components/BackGroundBeams";
import type { Metadata } from "next";
import ProjectShowCase from "./components/Contents/ProjectShowCase";
import TechStackShowCase from "./components/Contents/TechStackShowCase";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Explore - Anish Sherchan's Portfolio",
  description:
    "Welcome to Explore - Anish Sherchan's Portfolio. Discover projects, articles, and insights in frontend development.",
  keywords: [
    "Anish Sherchan",
    "frontend development",
    "React Js",
    "Next Js",
    "Anish Sherchan",
    "Sherchan",
    "Anish",
  ],
};

export default async function Home() {
  const projectData: any = (await GetProjectData()) || [];
  const techStackData: any = await GetTechStackData();
  // console.log(projectData);
  const words = [
    {
      text: "Welcome",
      className:
        " text-2xl lg:text-3xl font-medium tracking-wide text-dark_heading",
    },
    {
      text: "to",
      className:
        " text-2xl lg:text-3xl font-medium tracking-wide text-dark_heading",
    },
    {
      text: "My",
      className:
        " text-2xl lg:text-3xl font-medium tracking-wide text-dark_heading",
    },
    {
      text: "Digital",
      className:
        " text-2xl lg:text-3xl font-bold tracking-wide text-dark_active_link",
    },
    {
      text: "World.",
      className:
        " text-2xl lg:text-3xl font-bold tracking-wide text-dark_active_link",
    },
  ];
  return (
    <>
      <div className="flex flex-col lg:gap-[60px] gap-[30px]">
        <BackgroundBeams />
        <main className="z-10">
          <h1 className=" text-dark_heading text-3xl  tracking-wide font-bold">
            Anish Sherchan
            <span className=" text-3xl text-[#DDAC58] font-bold">.</span>
          </h1>
          <TypewriterEffectSmooth words={words} />
          <div className="flex flex-col gap-[10px] mt-[12px]">
            <h2 className=" text-2xl text-dark_text">
              Designing and Crafting the Web is in our DNA_
            </h2>
            <h3 className=" text-xl  text-dark_text max-w-[750px]">
              I am an energetic and enthusiastic computer science student with a
              strong desire to learn and train with professionals in UI/UX and
              Frontend development. {projectData && projectData[0]?.name}
            </h3>
          </div>
          <div className=" mt-[30px] flex flex-wrap gap-[25px]">
            {/* ? Add onClick Event */}
            <Link href="/contact">
              <Button type="Primary" icon="fa:paper-plane" title="Contact Me" />
            </Link>
            <Link href="/about">
              <Button type="Secondary" icon="uil:user" title="About" />
            </Link>
          </div>
        </main>

        <ProjectShowCase projectData={projectData} trimProjectCard={true} />

        <TechStackShowCase techStackData={techStackData} />
      </div>
    </>
  );
}
