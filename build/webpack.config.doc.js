/*
 * 生产环境
 */

const path = require("path");
const webapck = require("webpack");
const merge = require("webpack-merge"); // 合并webpack
const UglifyPlugin = require("uglifyjs-webpack-plugin"); // 压缩 JS 代码
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin; // bundle后每个包的信息
// const CompressionPlugin = require("compression-webpack-plugin"); // GIZP压缩
// const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpackBaseConfig = require("./webpack.config.base.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin"); // Vue-loader15.x后必须携带

const modules = merge(webpackBaseConfig, {
  mode: "production",
  devtool: "source-map",
  entry: {
    main: "./examples/app.js"
  },

  output: {
    path: path.resolve(__dirname, "../doc"),
    publicPath: "/",
    filename: "[name].[hash].js",
    chunkFilename: "chunk_[name].[chunkhash:8].js",
    libraryTarget: "umd"
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all",
          priority: 10
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ["vendor", "main"],
      template: "./examples/index.html",
      filename: "index.html",
      inject: true
    }),
    new UglifyPlugin({
      parallel: true,
      sourceMap: true
    }),
    new VueLoaderPlugin()
  ]
});

module.exports = modules;
