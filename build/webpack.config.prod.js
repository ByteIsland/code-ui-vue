/*
* 生产环境
*/

const path = require("path");
const webapck = require("webpack");
const merge = require("webpack-merge"); // 合并webpack
const UglifyPlugin = require("uglifyjs-webpack-plugin"); // 压缩 JS 代码
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin; // bundle后每个包的信息
const CompressionPlugin = require("compression-webpack-plugin"); // GIZP压缩
const webpackBaseConfig = require("./webpack.config.base.js");
const VueLoaderPlugin = require("vue-loader/lib/plugin"); // Vue-loader15.x后必须携带

const modules = merge(webpackBaseConfig, {
  mode: "production",
  devtool: "source-map",
  entry: {
    main: "./src/index.js"
  },

  output: {
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/dist/",
    filename: "codeui.min.js",
    library: "codeui",
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  externals: {
    vue: {
      root: "Vue",
      commonjs: "vue",
      commonjs2: "vue",
      amd: "vue"
    }
  },
  plugins: [
    new BundleAnalyzerPlugin(),
    new VueLoaderPlugin(),
    new webapck.DefinePlugin({
      "process.env.NODE_ENV": '"production"'
    }),
    new UglifyPlugin({
      parallel: true,
      sourceMap: true
    }),
    new CompressionPlugin({
      filename: "[path].gz[query]", //目标资源名称。[file] 会被替换成原资源。[path] 会被替换成原资源路径，[query] 替换成原查询字符串
      algorithm: "gzip", // gzip算法
      test: new RegExp(
        "\\.(js|css)$" //压缩 js 与 css
      ),
      threshold: 10240, //只处理比这个值大的资源。按字节计算
      minRatio: 0.8 //只有压缩率比这个值小的资源才会被处理
    })
  ]
});

module.exports = modules;
