const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

const PROD_MODE = process.env.NODE_ENV === "production";
const SRC_DIR = path.join(__dirname, "src");
const DIST_DIR = path.join(__dirname, "dist");

const config = {
  mode: PROD_MODE ? "production" : "development",
  entry: path.join(SRC_DIR, "index.tsx"),
  target: "web",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    modules: [path.join(__dirname, "node_modules"), SRC_DIR],
    // webpack 5 no longer polyfills node core modules automatically.
    // bns/bcrypto/binet need these in the browser: buffer, assert (which also
    // needs `process`, see ProvidePlugin below) and path (bns parses zone
    // records at load time). `os` is only used behind a feature check.
    fallback: {
      buffer: require.resolve("buffer/"),
      assert: require.resolve("assert/"),
      os: false,
      path: require.resolve("path-browserify"),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "babel-loader",
        exclude: "/node_modules/",
      },
      {
        test: /\.css$/,
        exclude: path.join(SRC_DIR, "css"),
        use: [
          PROD_MODE ? MiniCssExtractPlugin.loader : "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: {
                mode: "local",
                localIdentName: "[path]__[name]__[local]",
              },
            },
          },
          {
            loader: "postcss-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        include: path.join(SRC_DIR, "css"),
        use: [
          PROD_MODE ? MiniCssExtractPlugin.loader : "style-loader",
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
          },
        ],
      },
    ],
  },
  output: {
    filename: PROD_MODE ? "[name].[contenthash].js" : "[name].js",
    path: DIST_DIR,
    publicPath: "/",
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: path.join(SRC_DIR, "icons", "logo.svg"),
      template: path.join(SRC_DIR, "index.html"),
    }),
    new webpack.DefinePlugin({
      API_ORIGIN: JSON.stringify(
        PROD_MODE ? "https://api.hnsnetwork.com" : "http://localhost:8000"
      ),
    }),
    new webpack.ProvidePlugin({
      _prh: ["preact", "h"],
      _prf: ["preact", "Fragment"],
      Buffer: ["buffer", "Buffer"],
      process: "process/browser",
    }),
    new BundleAnalyzerPlugin({ openAnalyzer: false }),
  ],
  devServer: {
    static: DIST_DIR,
    historyApiFallback: true,
    port: 9000,
    compress: true,
    hot: true,
  },
};

if (PROD_MODE) {
  config.plugins.unshift(
    new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" })
  );
}

module.exports = config;
