import { client } from "./client";

export const GetProjectData = async () => {
  const PROJECT_QUERY = `*[_type == "projects"] { "plaintextBody": pt::text(content), name, _id, content }
    `;
  const projectData: [
    { name: string; _id: string; content: [any]; plaintextBody: string }
  ] = await client.fetch(PROJECT_QUERY);
  return projectData;
};
