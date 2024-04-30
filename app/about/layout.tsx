export default function ProjectLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className=" z-40 relative">
        <h1 className=" text-dark_heading font-bold text-3xl">
          My Story
          <span className=" text-3xl text-[#DDAC58] font-bold">.</span>
        </h1>
        <h3 className=" text-xl text-dark_text font-medium">
          Creative frontend developer, UI Designer and Jr. Backend Developer.
        </h3>
        <div className="flex flex-col lg:gap-[60px] gap-[30px] mt-[60px]">
          {children}
        </div>
      </div>
    </>
  );
}
