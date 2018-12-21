/*
 * 本地模式
 */

const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // html模板指向
const merge = require("webpack-merge"); // 合并webpack
const FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin"); // webpack错误信息增强器
const VueLoaderPlugin = require("vue-loader/lib/plugin"); // Vue-loader15.x后必须携带
const webpackBaseConfig = require("./webpack.config.base.js");

const HOST = process.env.HOST;
const PORT = process.env.PORT && Number(process.env.PORT);

const modules = merge(webpackBaseConfig, {
  mode: "development", // 开发模式
  devtool: "eval-source-map",
  // 入口
  entry: {
    main: "./examples/app",
    vendors: ["vue", "vue-router"]
  },

  // 出口
  output: {
    path: path.join(__dirname, "../examples/dist"),
    publicPath: "/",
    filename: "[name].js",
    chunkFilename: "[name].chunk.js"
  },

  // webpack-server 配置
  devServer: {
    inline: true,
    compress: true, // 开启GZIP压缩
    clientLogLevel: "error", // 客户端控制台输出
    historyApiFallback: {
      index: "/index.html"
    }, // h5 中转器
    hot: true, // 热更新
    contentBase: path.join(__dirname, "../examples/dist"), // 告诉服务器从哪里提供内容
    host: HOST || "localhost", // 域名
    port: PORT || "8080", // 端口号
    open: true, // 是否自动打开浏览器
    overlay: { warnings: false, errors: true }, // 开启错误提醒
    publicPath: "/", // 打包文件可在浏览器中访问
    quiet: false, // 开启后控制台不在输出打包信息
    watchOptions: {
      // 与监视文件相关的控制选项
      poll: true
    }
  },

  resolve: {
    alias: {
      codeui: "../../src/index",
      vue: "vue/dist/vue.esm.js"
    }
  },
  // 插件
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      filename: path.join(__dirname, "../examples/dist/index.html"),
      template: path.join(__dirname, "../examples/index.html"),
      favicon: path.join(__dirname, "../assets/favicon@32.ico")
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new FriendlyErrorsPlugin()
  ]
});

module.exports = modules;
