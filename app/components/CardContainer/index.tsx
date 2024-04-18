import React from "react";

const CardContainer = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="p-[14px] cursor-pointer w-full border-2 border-dark_stroke rounded-[17px]">
      {children}
    </div>
  );
};

export default CardContainer;
