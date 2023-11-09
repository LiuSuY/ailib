import { fileURLToPath, URL } from "node:url";

import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import UnoCSS from "unocss/vite";
import { presetUno, presetAttributify, presetIcons } from "unocss";

const mode = process.env.MODE || "development";
const env = loadEnv(mode, process.cwd());
const VITE_APP_BASE_API = env.VITE_APP_BASE_API;
const VITE_APP_PROXY = env.VITE_APP_PROXY;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    UnoCSS({
      presets: [presetUno(), presetAttributify(), presetIcons()],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    proxy: {
      [VITE_APP_BASE_API]: {
        target: VITE_APP_PROXY,
        rewrite: (path) =>  path.replace(/^\/api/,"") ,
        // changeOrigin: true,
      },
    },
  },
});
