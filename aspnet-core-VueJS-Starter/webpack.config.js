var WebpackMerge = require('webpack-merge');
var commonWebpackConfig = require('./webpack.config.common.js');
var devWebpackConfig = require('./webpack.config.dev.js');
var prodWebpackConfig = require('./webpack.config.prod.js');
var isDevBuild = process.env.NODE_ENV != 'production';

module.exports = WebpackMerge(
	commonWebpackConfig,
	(isDevBuild) ? devWebpackConfig : prodWebpackConfig
);