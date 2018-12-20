/**
 * 公共配置
 *
 */
// const path = require("path");
const webpack = require("webpack");
const pkg = require("../package.json");
const { resolve } = require("./config.js"); // 公用文件

// const isDev = process.env.NODE_ENV === "development";

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
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      },
      /* 字体图标 & 图片 */
      {
        test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
        loader: "url-loader?limit=8192"
      },
      /* html模板优化 */
      {
        test: /\.(html|tpl)$/,
        loader: "html-loader"
      }
    ]
  },
  /* 快捷目录 */
  resolve: {
    extensions: [".js", ".vue"],
    alias: {
      lib: resolve("lib"),
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
