import React from "react";
import CardContainer from "../CardContainer";
import PortableTextReact from "../PortableText";
import { Button } from "../Button";
import Link from "next/link";

const ServicesCard = ({ data }: { data: any }) => {
  // Define custom components for PortableText

  return (
    <CardContainer>
      <h2 className=" text-white text-2xl mb-3 font-bold">{data.title}</h2>
      <PortableTextReact description={data.description} />
      <Link href="/contact">
        <Button type="Secondary" title="Get Started" />
      </Link>
    </CardContainer>
  );
};

export default ServicesCard;
