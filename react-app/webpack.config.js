const HtmlWebpackPlugin = require("html-webpack-plugin");
const { name } = require("./package.json");

module.exports = () => ({
  entry: "./src/index.tsx",
  output: {
    library: `${name}-[name]`,
    libraryTarget: "umd",
    chunkLoadingGlobal: `webpackJsonp_${name}`,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".js", ".tsx", ".jsx", ".ts"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    historyApiFallback: true,
    hot: true,
    liveReload: false,
  },
});
