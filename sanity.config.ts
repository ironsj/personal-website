import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import post from "./sanity/schemas/post-schema";

const config = defineConfig({
    projectId: "zo1e4sf7",
    dataset: "production",
    title: "Personal Website",
    apiVersion: "2023-08-29",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: { types: [post] }
});

export default config;