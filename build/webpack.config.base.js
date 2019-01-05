/**
 * 公共配置
 *
 */
// const path = require("path");
const webpack = require("webpack");
const pkg = require("../package.json");
const { resolve } = require("./config.js"); // 公用文件
const hljs = require("highlight.js");

/* 基础配置 */
const modules = {
  module: {
    rules: [
      /* vue配置 */
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          loaders: {
            css: [
              "vue-style-loader",
              {
                loader: "css-loader",
                options: { sourceMap: true }
              }
            ],
            sass: [
              "vue-style-loader",
              {
                loader: "css-loader",
                options: { sourceMap: true }
              },
              {
                loader: "sass-loader",
                options: { sourceMap: true }
              }
            ]
          },
          postLoaders: {
            html: "babel-loader?sourceMap"
          },
          sourceMap: true // 开启Map图查询
        }
      },
      /* JS配置 */
      {
        test: /\.js$/,
        loader: "babel-loader",
        options: { sourceMap: true },
        exclude: /node_modules/
      },
      /* css配置 */
      {
        test: /\.css$/,
        loaders: [
          {
            loader: "style-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "postcss-loader"
          }
        ]
      },
      /* sass配置 */
      {
        test: /\.scss$/,
        loaders: [
          {
            loader: "style-loader"
          },
          {
            loader: "fast-css-loader"
          },
          {
            loader: "postcss-loader"
          },
          {
            loader: "fast-sass-loader"
          }
        ]
      },
      /* 字体图标 */
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: "url-loader?limit=8192"
      },
      /* 图片 */
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: "url-loader"
      },
      /* html模板优化 */
      {
        test: /\.(html|tpl)$/,
        loader: "html-loader"
      },
      /* md文件转义 */
      {
        test: /\.md$/,
        exclude: /node_modules/,
        use: [
          "vue-loader",
          {
            loader: "markdown-to-vue-loader",
            options: {
              languages: [], // 语言种类
              preClass: "hljs", // 代码高亮所需必须的类名
              markdownItOptions: {
                highlight(str, lang) {
                  if (lang && hljs.getLanguage(lang)) {
                    try {
                      return hljs.highlight(lang, str).value;
                    } catch (__) {}
                  }

                  return "";
                }
              }
            }
          }
        ]
      }
    ]
  },
  /* 快捷目录 */
  resolve: {
    extensions: [".js", ".vue"],
    alias: {
      assets: resolve("assets"),
      "@": resolve("src")
    }
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.DefinePlugin({
      "process.env.VERSION": `'${pkg.version}'`
    })
  ]
};

module.exports = modules;
