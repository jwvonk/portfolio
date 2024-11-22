import type { UserConfig } from "vite";
import eslint from "vite-plugin-eslint";

export default {
  plugins: [eslint()],
} satisfies UserConfig;
