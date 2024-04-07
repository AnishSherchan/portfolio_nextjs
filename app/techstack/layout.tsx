import { WavyBackground } from "../components/WaveBackground";

export default function ProjectLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Include shared UI here e.g. a header or sidebar */}
      {/* <WavyBackground /> */}
      <div className=" z-40 relative">
        <h1 className=" text-dark_heading font-bold text-3xl">
          Tech Stack
          <span className=" text-3xl text-[#DDAC58] font-bold">.</span>
        </h1>
        <h3 className=" text-xl text-dark_text font-medium">
          Tools and resources which I use for developing Web applications.
        </h3>
        <div className="flex flex-col lg:gap-[60px] gap-[30px] mt-[60px]">
          {children}
        </div>
      </div>
    </>
  );
}
