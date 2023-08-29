import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

const config = defineConfig({
    projectId: "zo1e4sf7",
    dataset: "production",
    title: "Personal Website",
    apiVersion: "2023-08-29",
    basePath: "/admin",
    plugins: [deskTool],
    
});

export default config;