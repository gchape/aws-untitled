import { createBuilder, defineConfig } from "vite";

export default defineConfig({
  base: "/answer",
  server: {
    host: "0.0.0.0",
    port: 5173,
  },
});
