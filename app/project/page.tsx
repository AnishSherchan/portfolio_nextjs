"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { LampContainer } from "../components/LampContainer";

const Project = () => {
  return (
    <div>
      <h1 className=" text-dark_heading">
        <Link href="/">Home</Link>
      </h1>
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className=" text-dark_heading"
        >
          Build lamps <br /> the right way
        </motion.h1>
      </LampContainer>
    </div>
  );
};

export default Project;
