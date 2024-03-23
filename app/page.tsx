import { GetProjectData } from "./_lib/SanityFetch";
export default async function Home() {
  const projectData: [
    {
      name: string;
      _id: string;
      content: [any];
      plaintextBody: string;
    }
  ] = await GetProjectData();
  console.log(projectData);
  return (
    <>
      <h1 className="text-3xl">Anish Sherchan</h1>
      <h1 className="text-2xl">
        Designing and Crafting the Web is in our DNA_
      </h1>
      <h1 className="text-xl">h3</h1>
      <h1 className="text-base">
        Embark on a seamless and organized journey with my Full Stack To-Do
        Application, meticulously crafted using the powerful MERN (MongoDB,
        Express.js, React, Node.js) stack. This applic...
      </h1>
      <h1 className=" cursor-default text-base font-bold">Explore</h1>
    </>
  );
}
