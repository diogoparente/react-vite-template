import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    exclude: ["node_modules"],
    setupFiles: "src/setupTests.ts",
  },
  define: {
    "process.env": "'process.env'",
    env: JSON.stringify(process.env),
  },
  plugins: [react()],
});
