/**
 *  boostrap.webpack.config.js
 *
 *  @type webpack configuration
 *  @desc dev and build configurations for boostrap custom sass build
 */

const fs = require("fs");
const EventHooksPlugin = require("event-hooks-webpack-plugin");
const constants = require("../constants");

const NAME = "bootstrap";
const BUILD_DIR = `${constants.CLIENTLIBS_PATH}/vendor/${NAME}`;

module.exports = {
  entry: [`${constants.STYLE_DIR}/vendor/${NAME}/index.scss`],
  output: {
    path: BUILD_DIR
  },
  module: {
    rules: [
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
  },
  plugins: [
    new EventHooksPlugin({
      "done": () => {
        // delete unwanted js file
        fs.unlink(`${BUILD_DIR}/main.js`, () => {
            console.log("main.js deleted");
        });
      }
    })
  ]
};
