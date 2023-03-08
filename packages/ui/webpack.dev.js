const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    open: false,
    hot: true,
    compress: true,
    port: 8082,
    historyApiFallback: true,
    liveReload: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    }
  },
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "auto",
  },
});
