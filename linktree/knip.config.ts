import type { KnipConfig } from "knip";

const config: KnipConfig = {
  project: ["src/**/*.{ts,vue}"],
  ignoreDependencies: ["lint-staged"],
  ignoreBinaries: ["depcheck", "ncu"],
};

export default config;
