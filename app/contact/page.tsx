import React from "react";
import { Button } from "../components/Button";
import { GetAboutData } from "../_lib/SanityFetch";
import Form from "../components/Form";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact me | Anish Sherchan",
  description: "I design and code interface that fascinate users.",
  keywords: [
    "Anish Sherchan",
    "frontend development",
    "React Js",
    "Next Js",
    "Anish Sherchan",
    "Sherchan",
    "Anish",
  ],
};

const ContactPage = async () => {
  const aboutData = (await GetAboutData()) || [];
  const { email } = aboutData[0];
  return (
    <>
      <div className=" z-40 relative">
        <h1 className=" text-dark_heading font-bold text-3xl">
          Get in touch with me
          <span className=" text-3xl text-[#DDAC58] font-bold">.</span>
        </h1>
        <h3 className=" text-xl text-dark_text font-medium">
          We’ll find your business the right plan and development, discuss your
          requirements, and give you a demonstration of our web application.
        </h3>
        <div className="flex flex-col lg:gap-[60px] gap-[30px] mt-[60px]">
          <div className=" flex gap-2 flex-col">
            <h3 className=" text-white font-normal text-2xl">
              {" "}
              Contact me in my email.
            </h3>
            <a href={`mailto:${email}`}>
              <Button type="Primary" title="Email" icon="ion:mail-outline" />
            </a>
          </div>
          <Form />
        </div>
      </div>
    </>
  );
};

export default ContactPage;
