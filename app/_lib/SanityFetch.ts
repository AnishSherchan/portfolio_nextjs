import { client } from "./client";
// "plaintextBody": pt::text(content),
export const GetProjectData = async () => {
  const PROJECT_QUERY = `*[_type == "projects"] {  name, _id, content, pinned,preview_url,Tag,image,github_url,_createdAt,_updatedAt,slug,description,"techstackref":techstackref[]->{icon} }`;
  try {
    const projectData = await client.fetch(PROJECT_QUERY);

    return projectData;
  } catch (error) {
    console.error("Error fetching project data:", error);
    throw error;
  }
};

export const GetTechStackData = async () => {
  const TechStack_QUERY = `*[_type == "tech_Stack"] {  name, _id, description, pinned,development_format,_createdAt,_updatedAt,slug,icon } `;
  try {
    const TeckStackData = await client.fetch(TechStack_QUERY);

    return TeckStackData;
  } catch (error) {
    console.error("Error fetching Tech stack data:", error);
    throw error;
  }
};

export const GetServiceData = async () => {
  const Service_QUERY = `*[_type == "service"] {slug, description,
"plaintextBody": pt::text(description),
    
    title}`;
  try {
    const ServiceData = await client.fetch(Service_QUERY);
    return ServiceData;
  } catch (error) {
    console.error("Error fetching Service data:", error);
    throw error;
  }
};

export const GetAboutData = async () => {
  const About_Query = `*[_type == "my_story"] 
  { title, email, profile_photo, story }`;
  try {
    const AboutData = await client.fetch(About_Query);
    return AboutData;
  } catch (error) {
    console.error("Error fetching About data:", error);
    throw error;
  }
};

export const GetSpecificProjectData = async (slug: string) => {
  const ProjectData = `*[_type == "projects" && slug.current == "${slug}"] 
  {_createdAt,Tag,image,name,content,slug,preview_url,"techstackref":techstackref[]->{...},_id,_createdAt,pinned,github_url}`;
  try {
    const Project = await client.fetch(ProjectData);
    return Project;
  } catch (error) {
    console.error("Error fetching About data:", error);
    throw error;
  }
};
