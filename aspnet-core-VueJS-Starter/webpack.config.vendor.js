var webpack = require('webpack');
var path = require('path');
var CompressionWebpackPlugin = require('compression-webpack-plugin');
var isDevBuild = process.env.NODE_ENV != 'production';


const outputFilename = (isDevBuild) ? '[name].js' : '[name].[hash].js';
const dllLibName = (isDevBuild) ? '[name]' : '[name]_[hash]'
const VENDOR_LIBS = [
	'vue', 'vue-router', 'vuex', 'jquery', 'bootstrap'
];


module.exports = {
	entry: {
		vendor: VENDOR_LIBS // Everyting in VENDOR_LIBS - bundle it and place it in the output as 'vendor.js'
	},
	output: {
		path: path.join(__dirname, 'wwwroot/dist'), // Tells webpack the absolute path of the output directory. __dirname is a Node.js constant.
		filename: outputFilename, // [name] references the entry section of the configuration; it uses the 'Object.key' as the output filename.
		publicPath: '/dist/', // every file emitted to your output.path directory will be referenced from the output.publicPath location. Assests.
		library: dllLibName,
	},
	plugins: [
		new CompressionWebpackPlugin({
			asset: '[path].gz[query]',
			algorithm: 'gzip',
			test: /\.js$|\.css$/,
			threshold: 0,
			minRatio: 0.8
		}),
		new webpack.ProvidePlugin({// Maps these identifiers to the jQuery package (because Bootstrap expects it to be a global variable)
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery':
			'jquery',
			Popper: ['popper.js', 'default']
		}),
		new webpack.DllPlugin({
			path: path.join(__dirname, 'wwwroot', 'dist', '[name]-manifest.json'),
			name: dllLibName
		})
	].concat((isDevBuild) ? [
	] : [
			new webpack.DefinePlugin({ // this plugin is used to create global constants which can be configured at compile time. 
				// we do not need to set the process.env in newer versions of Webpack 2 as Webpack already sets this variable for us.
				// the process.env.NODE_ENV allows plugins such as Vue or React to make use of this and adjust their settings 
				// (e.g., switch between development mode to production mode)
				'process.env': {
					NODE_ENV: '"production"'
				}
			})
		])
}