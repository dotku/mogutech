const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  devtool: "inline-source-map",
  plugins: [
    // new HtmlWebpackPlugin({
    //   title: "Development",
    // }),
  ],
  devServer: {
    compress: true,
    // inline: true,
    hot: true,
    // watchFiles: ["./public/*"],
  },
  mode: "development",
  // output: {
  //   filename: "main.js",
  //   path: path.resolve(__dirname, "dist"),
  // },
};
