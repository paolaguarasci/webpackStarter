const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    // Alow multiple entry point
    main: "./app.js"
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "js/bundle.js"
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        // ES6+
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env"]
          }
        }
      },
      {
        // SASS and CSS
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        // IMG
        test: /\.(png|svg|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "img/[name].[ext]"
          }
        }
      },
      {
        // HTML
        test: /\.(html|htm)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]"
          }
        }
      }
    ] // end rules
  }, // end modules
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css"
    })
  ] // end plugins
};
