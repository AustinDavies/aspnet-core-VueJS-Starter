var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		bundle: './ClientApp/index.js' // Everyting in src/index.js - bundle it and place it in the output as 'bundle.js'
	},
	resolve: {
		extensions: ['.js', '.vue']
	},
	output: {
		path: path.join(__dirname, 'wwwroot/dist'), // Tells webpack the absolute path of the output directory. __dirname is a Node.js constant.
		publicPath: '/dist/' // every file emitted to your output.path directory will be referenced from the output.publicPath location. Assests.
	},
	module: { // Module deals with parsing of files on an individual file basis.
		rules: [
			{
				use: 'babel-loader', // The webpack loader. Remember to look at associated configuration files (e.g., .babelrc)
				test: /\.js$/, // RegEx test all files associated with any imports found in the entry points.
				exclude: /node_modules/ // Excludes parsing of all files in the node_modules directory
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				//options: {
				//	loaders: {
				//		'scss': 'vue-style-loader!css-loader!sass-loader',
				//		'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
				//	}
				//}
			},
			{
				use: ExtractTextPlugin.extract({
					use: ['css-loader', 'sass-loader']
				}), // loaders are executed from right-to-left and bottom-to-top
				test: /\.scss$/
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/,
				use: [
					{
						loader: 'url-loader',
						options: { limit: 40000 }/** 40kB or 40000B */
					},
					'image-webpack-loader'
				]
			}
		]
	}
};
