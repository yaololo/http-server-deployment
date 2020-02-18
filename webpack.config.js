const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); //installed via npm
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
  entry: {
    polyfills: "./src/polyfills.js",
    index: "./src/index.js"
  },
  devtool: "inline-source-map", // debugging
  mode: "development",
  output: {
    filename: devMode ? '[name].js' : '[name].[hash].js',
    chunkFilename: devMode ? '[name].js' : '[name].[chunkhash].js', // For non-entry files
    // filename: "[name].bundle.js",
    // chunkFilename: "[name].bundle.js",
    publicPath: "dist/",
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    contentBase: "./dist"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader, // Avoid duplicate css bundle
            options: {
              publicPath: "/public/path/to/"
            }
          },
          "css-loader"
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(csv|tsv)$/,
        use: ["csv-loader"]
      },
      {
        test: /\.xml$/,
        use: ["xml-loader"]
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: "all" // Extract common dependency to a separate bundle
    }
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "index.html" }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: devMode ? "[name].css" : "[name].[hash].css",
      chunkFilename: devMode ? "[id].css" : "[id].[hash].css"
    })
  ]
};
