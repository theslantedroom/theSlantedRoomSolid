import { defineConfig } from "@solidjs/start/config";
export default defineConfig({
  ssr: true, // Enable server-side rendering
  server: {
    baseURL: process.env.BASE_PATH,
    preset: "static", // Use static server preset
  },
});
