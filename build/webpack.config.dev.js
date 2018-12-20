/*
 * 本地模式
 */

const path = require('path');
const webapck = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin'); // html模板指向
const merge = require('webpack-merge'); // 合并webpack
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin'); // webpack错误信息增强器
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; // bundle后每个包的信息
const VueLoaderPlugin = require('vue-loader/lib/plugin') // Vue-loader15.x后必须携带
const webpackBaseConfig = require('./webpack.config.base.js')


const modules = merge(webpackBaseConfig, {
	mode:	"development", // 开发模式
	devtool: "eval-source-map", 
	// 入口
	entry: {
		main: './examples/app',
		vendors: ['vue', 'vue-router']
	},

	// 出口
	output: {
		path: path.join(__dirname, '../examples/dist'),
		publicPath: '',
		filename: '[name].js',
		chunkFilename: '[name].chunk.js'
	},

	resolve: {
		alias: {
			codeui: '../../src/index',
			vue: 'vue/dist/vue.esm.js'
		}
	},

	// splitChunks: {
	// 	chunks: "async",
	// 	minSize: 30000,
	// 	minChunks: 1,
	// 	maxAsyncRequests: 5,
	// 	maxInitialRequests: 3,
	// 	automaticNameDelimiter: '~',
	// 	name: true,
	// 	splitChunks: {
	// 		chunk: 'all'
	// 	},
	// 	runtimeChunk: {
	// 		name: 'runtime'
	// 	},
	// 	cacheGroups: {
	// 		vendors: {
	// 				test: /[\\/]node_modules[\\/]/,
	// 				priority: -10
	// 		},
	// 		default: {
	// 				minChunks: 2,
	// 				priority: -20,
	// 				reuseExistingChunk: true
	// 		}
	// 	}
	// },

	// 插件
	plugins: [
		new VueLoaderPlugin(),
		// new BundleAnalyzerPlugin(),
		new HtmlWebpackPlugin({
			inject: true,
			filename: path.join(__dirname, '../examples/dist/index.html'),
			template: path.join(__dirname, '../examples/index.html'),
			favicon: path.join(__dirname, '../assets/favicon@32.ico')
		}),
		new FriendlyErrorsPlugin()
	]
})

module.exports = modules