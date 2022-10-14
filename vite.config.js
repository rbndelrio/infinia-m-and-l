import { defineConfig, loadEnv } from "vite";

import vue from "@vitejs/plugin-vue2";
import path from "path";
import AutoImport from 'unplugin-auto-import/vite';
import { fileURLToPath } from "url";

const filename = fileURLToPath(import.meta.url);

const dirname = path.dirname(filename);

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      vue(),
      AutoImport({
        dirs: [
          './src/views',
          './src/layout/**',
          './src/components/**',
        ],
        imports: [
          'vue',
          'vue-router',
          'vuex',
          '@vueuse/core'
        ]
      }),
    ],
    resolve: {
      alias: {
        // eslint-disable-next-line no-undef
        "@": path.resolve(dirname, "./src"),
      },
    },
    define: {
      API_HOST: env?.APP_HOST || '"https://dummyjson.com"'
    },
    lintOnSave: true,
    build: {
      commonjsOptions: {
        transformMixedEsModules: true,
        exclude: ["node_modules/lodash-es/**"],
      },
    },
  }
});
