import solid from "vite-plugin-solid";
import { defineConfig } from "vitest/config";

export default defineConfig({
  base: "/theSlantedRoomSolid/",
  plugins: [solid()],
  resolve: {
    conditions: ["development", "browser"],
  },
});
