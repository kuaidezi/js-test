const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  mode: "production", // 或者 'development'， production 根据需要选择
  entry: "./webpackTest/EventListeners.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "EventListeners.min.js",
    // libraryTarget: "umd",
    // library: "EventListeners",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: true,
          output: {
            comments: false,
          },
        },
      }),
    ],
  },
};
