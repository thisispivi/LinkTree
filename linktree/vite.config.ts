import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import svgr from "vite-plugin-svgr";
import nodeResolve from "@rollup/plugin-node-resolve";
import { qrcode } from "vite-plugin-qrcode";
import autoprefixer from "autoprefixer";

export default defineConfig({
  plugins: [vue(), svgr(), nodeResolve(), qrcode()],
  base: "/",
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
