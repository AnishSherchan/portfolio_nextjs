import React from "react";

const CardContainer = ({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) => {
  return (
    <div
      className={`p-[14px] cursor-pointer w-full border-2 border-dark_stroke rounded-[17px] ${className}`}
    >
      {children}
    </div>
  );
};

export default CardContainer;
