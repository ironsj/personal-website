import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";
import { codeInput } from "@sanity/code-input";

const config = defineConfig({
    projectId: "zo1e4sf7",
    dataset: "production",
    title: "Personal Website",
    apiVersion: "2023-08-29",
    basePath: "/admin",
    plugins: [deskTool(), codeInput()],
    schema: { types: schemas }
});

export default config;