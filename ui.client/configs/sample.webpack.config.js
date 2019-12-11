const path = require("path");

const NAME = "sample";
const BUILD_DIR = path.resolve("./dist");
const APP_DIR = path.resolve("./src", "app");
const STYLE_DIR = path.resolve("./src", "styles");

module.exports = {
  entry: [`${APP_DIR}/components/${NAME}/index.ts`, `${STYLE_DIR}/components/${NAME}/index.scss`],
  resolve: {
    extensions: [".ts", ".js", ".json", ".tsx", ".jsx"]
  },
  output: {
    path: BUILD_DIR,
    filename: `js/${NAME}.js`
  },
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        include: APP_DIR,
        loader: "ts-loader",
        exclude: path.resolve("../node_modules")
      },
      {
        enforce: "pre",
        test: /\.js$/,
        include: APP_DIR,
        loader: "source-map-loader"
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: `${NAME}.css`,
              context: `${BUILD_DIR}/css`,
              outputPath: "css/",
              publicPath: "../"
            }
          },
          {
            loader: "extract-loader"
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: false
            }
          },
          {
            loader: "postcss-loader"
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: false
            }
          }
        ]
      }
    ]
  }
};
