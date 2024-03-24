import { Suspense } from "react";
import Link from "next/link";
import { GetProjectData } from "./_lib/SanityFetch";

export default async function Home() {
  const projectData: any = await GetProjectData();
  console.log(projectData);
  return (
    <div>
      <Link href="/project">
        <h1 className=" text-dark_heading text-3xl">Projects</h1>
      </Link>
      <p className=" text-dark_heading">
        Dolor irure cillum sit excepteur Lorem consequat quis. Velit est culpa
        non aliqua non dolor excepteur ex qui id. Ea sint cupidatat aute labore
        magna enim excepteur incididunt velit quis nulla qui enim. Nisi qui
        irure non reprehenderit. Esse aliquip non Lorem aute Lorem enim do
        ullamco ipsum do ut. Et velit elit do eu eu nisi eu dolore voluptate
        dolor dolor adipisicing. Nisi cillum ullamco qui ipsum aliquip labore
        consequat. Ad nulla magna eiusmod elit. Fugiat do consequat incididunt
        ex pariatur ullamco minim minim. Et aliqua consequat dolore nulla.
        Occaecat ut anim esse excepteur incididunt labore ut ullamco ipsum
        ullamco pariatur mollit. Magna deserunt eiusmod in qui officia ullamco
        labore amet laboris. Aliquip esse labore enim ipsum sint id eu tempor.
        Ullamco ut cillum qui incididunt. Nostrud reprehenderit et do ad.
        Eiusmod adipisicing amet consectetur est do nostrud amet eu officia.
        Velit exercitation ullamco aute ullamco. Anim laborum id exercitation ut
        nulla.
      </p>
    </div>
  );
}
