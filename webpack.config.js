const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

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
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(SRC_DIR, "index.html"),
    }),
    new webpack.DefinePlugin({
      API_ORIGIN: JSON.stringify(
        PROD_MODE ? "https://" : "http://localhost:8000"
      ),
    }),
    new webpack.ProvidePlugin({
      React: "react",
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
  config.optimization = {
    minimize: true,
    minimizer: [new TerserPlugin()],
  };
}

module.exports = config;
