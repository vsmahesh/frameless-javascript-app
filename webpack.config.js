const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
    gallery: "./src/gallery.js",
    contact: "./src/contact.js",
    settings: "./src/settings.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: {
          loader: "html-loader",
        },
      },
    ],
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
