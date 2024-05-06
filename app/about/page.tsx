import React from "react";
import { GetAboutData } from "../_lib/SanityFetch";
import Image from "next/image";
import { BuildImageUrl } from "../_lib/ImageBuilder";
import { Button } from "../components/Button";
import Link from "next/link";
import PortableTextReact from "../components/PortableText";

const About = async () => {
  const aboutData = (await GetAboutData()) || [];
  const { title, email, profile_photo, story } = aboutData[0];
  return (
    <div className=" px-[28px] py-[21px] border-2 border-dark_stroke rounded-[17px] flex flex-col gap-[20px]">
      <div className=" space-y-[20px]">
        <div className=" w-full h-full flex justify-center">
          <div className="relative w-[250px] h-[250px] overflow-hidden">
            <Image
              className=" w-full h-auto rounded-[5px] object-cover"
              src={BuildImageUrl(profile_photo)}
              alt="User Image"
              fill={true}
            />
          </div>
        </div>
        <h1 className=" text-3xl text-center font-bold text-white">{title}</h1>
      </div>
      <div className=" text-white">
        <PortableTextReact description={story} />
      </div>
      <div className=" flex gap-4 w-full">
        <Link href="/contact">
          <Button type="Secondary" icon="fa:paper-plane" title="Message me" />
        </Link>
        <a href={`mailto:${email}`}>
          <Button type="Secondary" title="Email" icon="ion:mail-outline" />
        </a>
      </div>
    </div>
  );
};

export default About;
