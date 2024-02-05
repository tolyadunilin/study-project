import webpack from "webpack";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildEnv, BuildPaths } from "./config/build/types/config";
import path from "path";

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
  };

  const PORT = env.port || 3000;
  const isDev = env.mode === 'development'

  const config: webpack.Configuration = buildWebpackConfig({
    mode: env.mode || "development",
    paths: paths,
    port: PORT,
    isDev,
  });

  return config;
};
