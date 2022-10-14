import { defineConfig } from "vite";

import vue from "@vitejs/plugin-vue2";
import path from "path";
import { fileURLToPath } from "url";

const filename = fileURLToPath(import.meta.url);

const dirname = path.dirname(filename);

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      "@": path.resolve(dirname, "./src"),
    },
  },
  lintOnSave: true,
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
      exclude: ["node_modules/lodash-es/**"],
    },
  },
});
