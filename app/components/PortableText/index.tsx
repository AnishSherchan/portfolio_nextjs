import React from "react";
import { PortableText } from "@portabletext/react";

const PortableTextReact = ({ description }: { description: any }) => {
  const components = {
    listItem: ({ children }: { children: React.ReactNode }) => (
      <li className="list-disc ml-5 text-white">{children}</li>
    ),
    bulletList: ({ children }: { children: React.ReactNode }) => (
      <li className="list-disc ml-5">{children}</li>
    ),
    orderedList: ({ children }: { children: React.ReactNode }) => (
      <ol className="list-decimal ml-5">{children}</ol>
    ),

    block: {
      // Ex. 1: customizing common block types
      normal: ({ children }: { children: React.ReactNode }) => (
        <p className="mb-4 text-white">{children}</p>
      ),
    },
  };
  return (
    <>
      <PortableText
        value={description}
        // @ts-ignore
        components={components}
      />
    </>
  );
};

export default PortableTextReact;
