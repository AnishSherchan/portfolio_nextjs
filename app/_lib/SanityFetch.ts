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
