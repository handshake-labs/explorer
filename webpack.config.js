const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const PROD_MODE = process.env.NODE_ENV === "production";
const SRC_DIR = path.join(__dirname, "src");
const DIST_DIR = path.join(__dirname, "dist");

const config = {
  mode: PROD_MODE ? "production" : "development",
  entry: [path.join(SRC_DIR, "index.tsx"), path.join(SRC_DIR, "index.css")],
  target: "web",
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
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
        use: [
          PROD_MODE ? MiniCssExtractPlugin.loader : "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              sourceMap: false,
              url: false,
            },
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
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(SRC_DIR, "index.html"),
    }),
  ],
  devServer: {
    contentBase: DIST_DIR,
    historyApiFallback: true,
    port: 9000,
    compress: true,
    hot: true,
  },
};

if (PROD_MODE) {
  config.plugins.unshift(
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" })
  );
}

module.exports = config;
