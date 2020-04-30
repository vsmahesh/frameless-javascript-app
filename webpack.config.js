const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },

  plugins: [
    new CopyWebpackPlugin([
      {
        from: "./src/assets",
        to: "assets",
      },
      {
        from: "./src/*.html",
        to: path.resolve(__dirname, "dist"),
        flatten: true,
      },
    ]),
  ],
};
