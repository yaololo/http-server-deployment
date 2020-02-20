const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); //installed via npm
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = env => {
  const devMode = env.NODE_ENV !== "production";
  const loaderPath = path.resolve(__dirname, "src");
  const port = process.env.PORT;

  return {
    entry: {
      polyfills: "./src/polyfills.js",
      index: "./src/index.js"
    },
    devtool: "inline-source-map", // debugging
    mode: devMode ? "development" : "production",
    output: {
      filename: devMode ? "[name].js" : "[name].[chunkhash].js",
      chunkFilename: devMode ? "[name].js" : "[name].[chunkhash].js", // For non-entry files
      // publicPath: "/",
      path: path.resolve(__dirname, "dist")
    },
    devServer: {
      contentBase: "./dist",
      port: port ? port : 3000
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          include: loaderPath,
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
          include: loaderPath,
          use: ["file-loader"]
        },
        {
          test: /\.js$/,
          include: path.resolve(__dirname, "src"),
          loader: "babel-loader"
        },
        // {
        //   test: /\.tsx?$/,
        //   use: [
        //     {
        //       loader: "ts-loader",
        //       options: {
        //         transpileOnly: true,
        //         experimentalWatchApi: true
        //       }
        //     }
        //   ]
        // }
      ]
    },
    optimization: {
      splitChunks: {
        // It's for splitting vendor code and your code
        chunks: "all", // Extract common dependency to a separate bundle
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all"
          }
        }
      },
      runtimeChunk: "single" // Split runtime code into a separate chunk using, the bare minimum file to get the app running, other thing into chunks
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
};
