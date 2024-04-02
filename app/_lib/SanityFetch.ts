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
    console.error("Error fetching project data:", error);
    throw error;
  }
};
