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
  I18nextIcon,
  KerasIcon,
  NPMIcon,
  NodeJSIcon,
  PandasIcon,
  PassportIcon,
  PillowIcon,
  PlotlyIcon,
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
  <ApexChartsIcon v-if="tech === 'apexcharts'" />
  <AxiosIcon v-else-if="tech === 'axios'" />
  <AzureIcon v-else-if="tech === 'azure'" />
  <BunnyCDNIcon v-else-if="tech === 'bunnycdn'" />
  <ChartJSIcon v-else-if="tech === 'chartjs'" />
  <DockerIcon v-else-if="tech === 'docker'" />
  <EJSIcon v-else-if="tech === 'ejs'" />
  <ESLintIcon v-else-if="tech === 'eslint'" />
  <ExpressIcon v-else-if="tech === 'express'" />
  <FastAPIIcon v-else-if="tech === 'fastapi'" />
  <FormikIcon v-else-if="tech === 'formik'" />
  <I18nextIcon v-else-if="tech === 'i18next'" />
  <KerasIcon v-else-if="tech === 'keras'" />
  <NPMIcon v-else-if="tech === 'npm'" />
  <NodeJSIcon v-else-if="tech === 'nodejs'" />
  <PandasIcon v-else-if="tech === 'pandas'" />
  <PassportIcon v-else-if="tech === 'passport'" />
  <PillowIcon v-else-if="tech === 'pillow'" />
  <PlotlyIcon v-else-if="tech === 'plotly'" />
  <PolarsIcon v-else-if="tech === 'polars'" />
  <PrettierIcon v-else-if="tech === 'prettier'" />
  <PythonIcon v-else-if="tech === 'python'" />
  <ReactIcon v-else-if="tech === 'react'" />
  <ReactRouterIcon v-else-if="tech === 'react-router'" />
  <ReactSimpleMapsIcon v-else-if="tech === 'react-simple-maps'" />
  <RedisIcon v-else-if="tech === 'redis'" />
  <ReduxIcon v-else-if="tech === 'redux'" />
  <SassIcon v-else-if="tech === 'sass'" />
  <SciKitLearnIcon v-else-if="tech === 'scikit-learn'" />
  <SequelizeIcon v-else-if="tech === 'sequelize'" />
  <SocketIOIcon v-else-if="tech === 'socket.io'" />
  <StripeIcon v-else-if="tech === 'stripe'" />
  <TensorFlowIcon v-else-if="tech === 'tensorflow'" />
  <TypeScriptIcon v-else-if="tech === 'typescript'" />
  <ViteIcon v-else-if="tech === 'vite'" />
  <VueIcon v-else-if="tech === 'vue'" />
</template>
