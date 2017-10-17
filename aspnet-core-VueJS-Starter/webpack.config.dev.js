var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CompressionWebpackPlugin = require('compression-webpack-plugin');

module.exports = {
	devtool: 'inline-source-map',
	output: {
		filename: '[name].js', // [name] references the entry section of the configuration; it uses the 'Object.key' as the output filename.
	},
	plugins: [ // Plugins deal with parsing of the full-scope of the input and output from webpack; not just the individual files.
		new webpack.optimize.CommonsChunkPlugin({
			// Name tells the commonchunk plugin to place all common modules in our app code into a file called 'vendor.js'
			// Manifest will better tell the browser if the vendor.js ACTUALLY got changed. For instance, Without the manifest,
			// webpack might pick-up a change in our app code and mistakenly think that the vendor.js changed as well.
			names: ['vendor', 'manifest']
		}),
		new HtmlWebpackPlugin({
			inject: false,
			template: 'Views/Shared/_DevLayoutTemplate.cshtml', // Points the HtmlWepackPlugin to the HTML template it should use as reference.
			filename: '../../Views/Shared/_Layout.cshtml'
		}),
		new webpack.DllReferencePlugin({
			context: __dirname,
			manifest: require("./wwwroot/dist/vendor-manifest.json"),
		}),
		new ExtractTextPlugin('styles.css'),
		new webpack.DefinePlugin({ // this plugin is used to create global constants which can be configured at compile time. 
			// we do not need to set the process.env in newer versions of Webpack 2 as Webpack already sets this variable for us.
			// the process.env.NODE_ENV allows plugins such as Vue or React to make use of this and adjust their settings 
			// (e.g., switch between development mode to production mode)
		})
	]
};