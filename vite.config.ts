import type { UserConfig } from "vite";
import eslint from "vite-plugin-eslint";

export default {
  base: process.env.REPO_NAME || "/repo-name/",
  plugins: [eslint()],
} satisfies UserConfig;
