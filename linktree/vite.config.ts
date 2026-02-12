import nodeResolve from "@rollup/plugin-node-resolve";
import vue from "@vitejs/plugin-vue";
import autoprefixer from "autoprefixer";
import { defineConfig } from "vite";
import { qrcode } from "vite-plugin-qrcode";
import svgLoader from "vite-svg-loader";

export default defineConfig({
  plugins: [vue(), svgLoader(), nodeResolve(), qrcode(), svgLoader()],
  base: "/",
  server: {
    watch: { usePolling: true },
    host: true,
  },
  css: {
    postcss: {
      plugins: [autoprefixer({})],
    },
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ["legacy-js-api"],
      },
    },
  },
});
