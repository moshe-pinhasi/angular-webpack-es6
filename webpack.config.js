'use strict';

var webpack = require('webpack'),
	HtmlWebpackPlugin = require('html-webpack-plugin'),
	path = require('path');

module.exports = {
	debug: true,
	entry: {
		main: './app/index.js'
	},
	output: {
		path: path.join(__dirname, 'dist'),
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
				loader: "html-loader"
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
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './app/index.html'
		})
	]
};