import React from "react";
import NotFoundSvg from "@/public/undraw_startled_-8-p0r.svg";
import Link from "next/link";
import { Button } from "./components/Button";
import Image from "next/image";

const NotFound = () => {
  return (
    <div className=" w-full md:mt-20 gap-8 mb-20 h-[70vh] md:h-[45vh] flex flex-col items-center justify-center">
      <h1 className=" text-3xl text-white font-semibold">Oops!</h1>
      <Image src={NotFoundSvg} alt="Page not found" className=" w-96 h-auto" />
      <h2 className=" text-white text-2xl">{`We couldn't find the page you were looking for`}</h2>
      <Link href="/">
        <Button title="Go explore" type="Secondary" icon="ep:back" />
      </Link>
    </div>
  );
};

export default NotFound;
