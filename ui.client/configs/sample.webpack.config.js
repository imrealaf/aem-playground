const path = require("path");
const constants = require("../constants");

const NAME = "sample";
const BUILD_DIR = `${constants.CLIENTLIBS_PATH}/${NAME}`;

module.exports = {
  entry: [`${constants.APP_DIR}/components/${NAME}/index.ts`, `${constants.STYLE_DIR}/components/${NAME}/index.scss`],
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
        include: constants.APP_DIR,
        loader: "ts-loader",
        exclude: path.resolve("../node_modules")
      },
      {
        enforce: "pre",
        test: /\.js$/,
        include: constants.APP_DIR,
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
