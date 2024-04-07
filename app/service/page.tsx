import React from "react";
import { GetServiceData } from "../_lib/SanityFetch";
import { PortableText } from "@portabletext/react";

const Services = async () => {
  // Fetch service data asynchronously
  const serviceData = (await GetServiceData()) || [];
  console.log(serviceData[0]);

  // Define custom components for PortableText
  const components = {
    listItem: ({ children }: { children: React.ReactNode }) => (
      <li className="list-disc">{children}</li>
    ),
    bulletList: ({ children }: { children: React.ReactNode }) => (
      <li className="list-disc">{children}</li>
    ),
    orderedList: ({ children }: { children: React.ReactNode }) => (
      <ol className="list-decimal">{children}</ol>
    ),

    block: {
      // Ex. 1: customizing common block types
      normal: ({ children }: { children: React.ReactNode }) => (
        <p className="mb-4">{children}</p>
      ),
    },
  };

  return (
    <div className="text-white">
      <h1 className="text-white">Services</h1>
      <PortableText
        value={serviceData[0].description}
        // @ts-ignore
        components={components}
      />
    </div>
  );
};

export default Services;
