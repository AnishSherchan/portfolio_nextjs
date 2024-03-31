import { GetProjectData } from "./_lib/SanityFetch";
import { TypewriterEffect as TypewriterEffectSmooth } from "./components/TypeWriter";
import { Button } from "./components/Button";
import { BackgroundBeams } from "./components/BackGroundBeams";

export default async function Home() {
  const projectData: any = await GetProjectData();
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
  console.log(projectData);
  return (
    <div className="lg:flex lg:flex-col gap-[60px]">
      {/* <BackgroundBeams className=" hidden md:block" /> */}
      <main className=" z-10">
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
            Frontend development. {projectData && projectData[0].name}
          </h2>
        </div>
        <div className=" mt-[30px] flex flex-wrap gap-[25px]">
          <Button type="Primary" icon="fa:paper-plane" title="Contact Me" />
          <Button type="Secondary" icon="uil:user" title="About" />
        </div>
      </main>

      {/* <div>
        <h2 className=" text-white">Latest Projects</h2>
      </div> */}
    </div>
  );
}
