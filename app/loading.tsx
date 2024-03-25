import React from "react";
import { LampContainer } from "./components/LampContainer";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-dark_primary_background z-50 text-dark_heading">
      <LampContainer>
        <h1 className=" text-3xl text-dark_heading font-medium">
          Your page is Loading...
        </h1>
      </LampContainer>
    </div>
  );
};

export default Loading;
