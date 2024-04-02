import { GetProjectData, GetTechStackData } from "./_lib/SanityFetch";
import { TypewriterEffect as TypewriterEffectSmooth } from "./components/TypeWriter";
import { Button } from "./components/Button";
import { BackgroundBeams } from "./components/BackGroundBeams";
import ProjectCard from "./components/ProjectCard";
import TechStackCard from "./components/TechStackCard";
import Head from "next/head";
import ProjectShowCase from "./components/Contents/ProjectShowCase";

export default async function Home() {
  const projectData: any = await GetProjectData();
  const techStackData: any = await GetTechStackData();
  console.log(techStackData.slice(0, 4));

  const words = [
    {
      text: "Welcome",
      className: "lg:text-3xl font-medium tracking-wide text-dark_heading",
    },
    {
      text: "to",
      className: "lg:text-3xl font-medium tracking-wide text-dark_heading",
    },
    {
      text: "My",
      className: "lg:text-3xl font-medium tracking-wide text-dark_heading",
    },
    {
      text: "Digital",
      className: "lg:text-3xl font-bold tracking-wide text-dark_active_link",
    },
    {
      text: "World.",
      className: "lg:text-3xl font-bold tracking-wide text-dark_active_link",
    },
  ];
  return (
    <div className="lg:flex lg:flex-col gap-[60px]">
      <BackgroundBeams className=" hidden md:block" />
      <main className="z-10">
        <h1 className=" text-dark_heading lg:text-3xl tracking-wide font-bold">
          Anish Sherchan
          <span className=" lg:text-3xl text-[#DDAC58] font-bold">.</span>
        </h1>
        <TypewriterEffectSmooth words={words} />
        <div className="flex flex-col gap-[8px] mt-[12px]">
          <h2 className=" lg:text-2xl text-dark_text">
            Designing and Crafting the Web is in our DNA_
          </h2>
          <h2 className=" lg:text-2xl text-dark_text max-w-[750px]">
            I am an energetic and enthusiastic computer science student with a
            strong desire to learn and train with professionals in UI/UX and
            Frontend development. {projectData && projectData[0]?.name}
          </h2>
        </div>
        <div className=" mt-[30px] flex flex-wrap gap-[25px]">
          {/* ? Add onClick Event */}
          <Button type="Primary" icon="fa:paper-plane" title="Contact Me" />
          <Button type="Secondary" icon="uil:user" title="About" />
        </div>
      </main>

      <ProjectShowCase projectData={projectData} />

      <div
        id="TechStack"
        className=" z-10 relative flex flex-col flex-wrap gap-[15px] mt-[15px]"
      >
        <div>
          <h2 className=" text-dark_heading">Tech Stack</h2>
          <h3 className=" text-dark_text">
            Tools and resources which I use for developing Web applications.
          </h3>
        </div>
        <div className="w-full flex flex-wrap gap-[30px]  justify-between">
          {techStackData?.slice(1, 5).map((tech: any) => {
            return (
              <TechStackCard
                title={tech.name}
                description={tech.description}
                icon={tech.icon}
                key={tech._id}
                pinned={tech.pinned}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
