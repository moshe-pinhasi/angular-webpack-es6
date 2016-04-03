'use strict';

const webpack = require('webpack'),
	HtmlWebpackPlugin = require('html-webpack-plugin'),
	WebpackNotifierPlugin = require('webpack-notifier'),
	path = require('path');

module.exports = {
	context: path.resolve(__dirname, 'app'),
	entry: {
		main: './index.js'
	},
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'app.js'
	},
	module: {
		loaders: [
			{
				test: /\.es6.js$/,
				loader: "babel-loader"
			},
			{
				test: /\.css$/,
				loader: "css-loader"
			},
			{
				test: /\.less$/,
				loader: "css-loader!less-loader"
			},
			{
				test: /\.html$/,
				loader: "html"
			}
			//{
			//	test: /\.css$/,
			//	loader: 'style!css?sourceMap'
			//},
			//{
			//	test: /\.less$/,
			//	loader: 'style!css?sourceMap!less?sourceMap'
			//}
		]
	},
	plugins: [
		new WebpackNotifierPlugin({alwaysNotify: true}),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './index.html'
		})
	]
};