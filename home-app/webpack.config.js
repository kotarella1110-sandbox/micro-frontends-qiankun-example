const HtmlWebpackPlugin = require("html-webpack-plugin");
const { name } = require("./package.json");

module.exports = (_, argv) => {
  const isProduction = argv.mode == "production";
  return {
    entry: "./src/index",
    output: {
      library: `${name}-[name]`,
      libraryTarget: "umd",
      chunkLoadingGlobal: `webpackJsonp_${name}`,
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: {
            loader: "swc-loader",
            options: {
              sourceMaps: true,
              minify: isProduction,
              jsc: {
                parser: {
                  syntax: "typescript",
                },
              },
            },
          },
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
  };
};
