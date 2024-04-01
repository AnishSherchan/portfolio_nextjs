import { createClient } from "next-sanity";

export const client = createClient({
  // projectId: process.env.PROJECT_ID, // you can find this in sanity.json
  projectId: "epmhqi8e", // you can find this in sanity.json
  dataset: "production", // or the name you chose in step 1
  apiVersion: "2024-01-01",
  useCdn: false,
});
