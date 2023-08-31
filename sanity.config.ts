import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import schemas from "./sanity/schemas";
import { codeInput } from "@sanity/code-input";

const config = defineConfig({
  projectId: "zo1e4sf7",
  dataset: "develop",
  title: "Personal Website",
  apiVersion: "2021-10-21",
  basePath: "/admin",
  plugins: [deskTool(), visionTool(), codeInput()],
  schema: { types: schemas },
});

export default config;
