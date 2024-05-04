import { GetSpecificProjectData } from "@/app/_lib/SanityFetch";
import { BackButton, Chip, Button } from "@/app/components/Button";
import Image from "next/image";
import { BuildImageUrl } from "@/app/_lib/ImageBuilder";
import moment from "moment";
import PortableTextReact from "@/app/components/PortableText";
import TechStackCard from "@/app/components/TechStackCard";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Page = async ({ params }: { params: { slug: string } }) => {
  const projectData = (await GetSpecificProjectData(params.slug)) || [];
  const router = useRouter();
  const {
    Tag,
    name,
    content,
    techstackref,
    _id,
    _createdAt,
    github_url,
    image,
    preview_url,
    pinned,
  } = projectData[0];
  return (
    <>
      <div className="flex flex-col gap-[10px]">
        <BackButton href="/project" icon="ep:back" title="All Projects" />
        <h1 className=" text-white font-bold text-3xl">{name}</h1>
        <h3 className=" text-xl text-white">
          Published at: {moment(_createdAt).format("MMMM Do YYYY")}
        </h3>
      </div>
      <div className=" flex flex-col gap-[35px]">
        <div className="flex flex-col w-full gap-[10px] p-[10px]">
          <div className=" relative min-h-[250px] md:min-h-[490px] w-auto">
            <Image
              className=" w-full h-auto rounded-[10px] object-cover"
              src={BuildImageUrl(image)}
              alt="Project Image"
              fill={true}
            />
          </div>
          <div className=" flex flex-wrap gap-[10px]">
            {Tag.map((tag: string, index: number) => (
              <Chip title={tag} key={`${tag} ${index}`} />
            ))}
          </div>
        </div>
        <div className=" md:px-[130px] ">
          <PortableTextReact description={content} />
        </div>
        <div className=" flex flex-col gap-[15px]">
          <h2 className=" text-white text-2xl">Tech Stack Used</h2>
          <div className=" w-full flex flex-row flex-wrap gap-5 lg:gap-8 justify-center ">
            {techstackref?.map((tech: any) => {
              return (
                <TechStackCard
                  title={tech.name}
                  description={tech.description}
                  icon={tech.icon}
                  key={tech._id}
                  pinned={tech.pinned}
                  handleClick={() =>
                    router.push(`/techstack/${tech.slug.current}`)
                  }
                />
              );
            })}
          </div>
        </div>
        <div className=" flex gap-4 w-full">
          <Link href={github_url} target="_blank">
            <Button type="Secondary" icon="codicon:github" title="GitHub" />
          </Link>
          {preview_url && (
            <Link href={preview_url} target="_blank">
              <Button type="Secondary" title="Live" icon="ph:globe" />
            </Link>
          )}
        </div>
      </div>
    </>
  );
};
export default Page;
