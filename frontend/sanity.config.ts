import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision"
import { schemaTypes } from "./schemas";

export default defineConfig({
  name: "default",
  title: "booking",

  projectId: "utiiab3a",
  dataset: "production",

  basePath: "/studio",

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
