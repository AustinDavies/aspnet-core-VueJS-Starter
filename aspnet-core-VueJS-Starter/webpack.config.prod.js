const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');

module.exports = {
	//entry: {
	//	vendor: VENDOR_LIBS // Everyting in VENDOR_LIBS - bundle it and place it in the output as 'vendor.js' 
	//},
	output: {
		filename: '[name].[chunkhash].js', // [name] references the entry section of the configuration; it uses the 'Object.key' as the output filename.
	},
	plugins: [ // Plugins deal with parsing of the full-scope of the input and output from webpack; not just the individual files.
		new CompressionWebpackPlugin({
			asset: '[path].gz[query]',
			algorithm: 'gzip',
			test: /\.js$|\.css$/,
			threshold: 0,
			minRatio: 0.8
		}),
		new webpack.optimize.CommonsChunkPlugin({
			// Name tells the commonchunk plugin to place all common modules in our app code into a file called 'vendor.js'
			// Manifest will better tell the browser if the vendor.js ACTUALLY got changed. For instance, Without the manifest,
			// webpack might pick-up a change in our app code and mistakenly think that the vendor.js changed as well.
			names: ['vendor', 'manifest']
		}),
		new webpack.DllReferencePlugin({
			context: __dirname,
			manifest: require("./wwwroot/dist/vendor-manifest.json"),
		}),
		new HtmlWebpackPlugin({
			inject: false,
			hash: false,
			template: 'Views/Shared/_ProdLayoutTemplate.cshtml', // Points the HtmlWepackPlugin to the HTML template it should use as reference.
			filename: '../../Views/Shared/_Layout.cshtml'
		}),
		new AddAssetHtmlPlugin({
			hash: false,
			filepath: path.resolve(__dirname, './wwwroot/dist/vendor.*.js'),
			includeSourcemap: false
		}),
		new ExtractTextPlugin('styles.css')
	]
};