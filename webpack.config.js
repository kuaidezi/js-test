const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/myComponent/index.jsx",
  output: {
    filename: "my-library.min.js",
    path: path.resolve(__dirname, "dist"),
    library: "myLibrary",
    libraryTarget: "umd",
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
