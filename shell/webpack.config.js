const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = () => ({
  entry: "./src/index.tsx",
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
    port: 9000,
    historyApiFallback: true,
  },
});
