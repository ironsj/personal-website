import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import schemas from "./sanity/schemas";
import { codeInput } from "@sanity/code-input";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION!;

const config = defineConfig({
  projectId,
  dataset,
  title: "Personal Website",
  apiVersion,
  basePath: "/admin",
  plugins: [deskTool(), visionTool(), codeInput()],
  schema: { types: schemas },
});

export default config;
