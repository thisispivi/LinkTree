<script setup lang="ts">
import {
  ApexChartsIcon,
  AxiosIcon,
  AzureIcon,
  BunnyCDNIcon,
  ChartJSIcon,
  DockerIcon,
  EJSIcon,
  ESLintIcon,
  ExpressIcon,
  FastAPIIcon,
  FormikIcon,
  GSAPIcon,
  I18nextIcon,
  KerasIcon,
  NPMIcon,
  NodeJSIcon,
  PandasIcon,
  PassportIcon,
  PillowIcon,
  PlotlyIcon,
  PNPMIcon,
  PolarsIcon,
  PrettierIcon,
  PythonIcon,
  ReactIcon,
  ReactRouterIcon,
  ReactSimpleMapsIcon,
  RedisIcon,
  ReduxIcon,
  SassIcon,
  SciKitLearnIcon,
  SequelizeIcon,
  SocketIOIcon,
  StripeIcon,
  TensorFlowIcon,
  TypeScriptIcon,
  ViteIcon,
  VueIcon,
} from "../../../assets";

const { tech } = defineProps<{ tech: string }>();
</script>

<template>
  <ApexChartsIcon v-if="tech === 'apexcharts'" v-tooltip="'ApexCharts'" />
  <AxiosIcon v-else-if="tech === 'axios'" v-tooltip="'Axios'" />
  <AzureIcon v-else-if="tech === 'azure'" v-tooltip="'Azure'" />
  <BunnyCDNIcon v-else-if="tech === 'bunnycdn'" v-tooltip="'BunnyCDN'" />
  <ChartJSIcon v-else-if="tech === 'chartjs'" v-tooltip="'ChartJS'" />
  <DockerIcon v-else-if="tech === 'docker'" v-tooltip="'Docker'" />
  <EJSIcon v-else-if="tech === 'ejs'" v-tooltip="'EJS'" />
  <ESLintIcon v-else-if="tech === 'eslint'" v-tooltip="'ESLint'" />
  <ExpressIcon v-else-if="tech === 'express'" v-tooltip="'Express'" />
  <FastAPIIcon v-else-if="tech === 'fastapi'" v-tooltip="'FastAPI'" />
  <FormikIcon v-else-if="tech === 'formik'" v-tooltip="'Formik'" />
  <GSAPIcon v-else-if="tech === 'gsap'" v-tooltip="'GSAP'" />
  <I18nextIcon v-else-if="tech === 'i18next'" v-tooltip="'i18next'" />
  <KerasIcon v-else-if="tech === 'keras'" v-tooltip="'Keras'" />
  <NPMIcon v-else-if="tech === 'npm'" v-tooltip="'NPM'" />
  <NodeJSIcon v-else-if="tech === 'nodejs'" v-tooltip="'NodeJS'" />
  <PandasIcon v-else-if="tech === 'pandas'" v-tooltip="'Pandas'" />
  <PassportIcon v-else-if="tech === 'passport'" v-tooltip="'Passport'" />
  <PillowIcon v-else-if="tech === 'pillow'" v-tooltip="'Pillow'" />
  <PlotlyIcon v-else-if="tech === 'plotly'" v-tooltip="'Plotly'" />
  <PNPMIcon v-else-if="tech === 'pnpm'" v-tooltip="'PNPM'" />
  <PolarsIcon v-else-if="tech === 'polars'" v-tooltip="'Polars'" />
  <PrettierIcon v-else-if="tech === 'prettier'" v-tooltip="'Prettier'" />
  <PythonIcon v-else-if="tech === 'python'" v-tooltip="'Python'" />
  <ReactIcon v-else-if="tech === 'react'" v-tooltip="'React'" />
  <ReactRouterIcon
    v-else-if="tech === 'react-router'"
    v-tooltip="'React Router'"
  />
  <ReactSimpleMapsIcon
    v-else-if="tech === 'react-simple-maps'"
    v-tooltip="'React Simple Maps'"
  />
  <RedisIcon v-else-if="tech === 'redis'" v-tooltip="'Redis'" />
  <ReduxIcon v-else-if="tech === 'redux'" v-tooltip="'Redux'" />
  <SassIcon v-else-if="tech === 'sass'" v-tooltip="'Sass'" />
  <SciKitLearnIcon
    v-else-if="tech === 'scikit-learn'"
    v-tooltip="'SciKit Learn'"
  />
  <SequelizeIcon v-else-if="tech === 'sequelize'" v-tooltip="'Sequelize'" />
  <SocketIOIcon v-else-if="tech === 'socket.io'" v-tooltip="'Socket.IO'" />
  <StripeIcon v-else-if="tech === 'stripe'" v-tooltip="'Stripe'" />
  <TensorFlowIcon v-else-if="tech === 'tensorflow'" v-tooltip="'TensorFlow'" />
  <TypeScriptIcon v-else-if="tech === 'typescript'" v-tooltip="'TypeScript'" />
  <ViteIcon v-else-if="tech === 'vite'" v-tooltip="'Vite'" />
  <VueIcon v-else-if="tech === 'vue'" v-tooltip="'Vue'" />
</template>

<style lang="scss"></style>
