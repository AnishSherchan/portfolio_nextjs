
export default function ProjectSlugLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Include shared UI here e.g. a header or sidebar */}
      <div className="flex flex-col lg:gap-[60px] gap-[30px]">{children}</div>
    </>
  );
}
