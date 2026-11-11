import vue from "@vitejs/plugin-vue";
import autoprefixer from "autoprefixer";
import { defineConfig } from "vite";
import { qrcode } from "vite-plugin-qrcode";
import svgLoader from "vite-svg-loader";

import { version } from "./package.json";

export default defineConfig({
  plugins: [vue(), svgLoader(), qrcode()],
  base: "/",
  define: { __APP_VERSION__: JSON.stringify(version) },
  server: {
    watch: { usePolling: true },
    host: true,
  },
  css: {
    postcss: {
      plugins: [autoprefixer({})],
    },
  },
});
