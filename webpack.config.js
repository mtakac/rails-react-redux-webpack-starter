var webpack = require('webpack');
var path = require('path');

var srcPath = path.join(__dirname, 'client/src');
var distPath = path.join(__dirname, 'app/assets/javascripts');

module.exports = {

	// The base directory for resolving 'entry' (must be absolute path)
	context: srcPath,

	entry: {
		App: [
			'webpack-dev-server/client?http://localhost:8080/javascripts',
			'webpack/hot/only-dev-server',
			srcPath + '/main.js',
		]
	},

	output: {
		path: distPath,
		publicPath: 'http://localhost:8080/javascripts',
		filename: 'bundle.js'
	},

	plugins: [
		// Expose global variables (this way every module can access for example lodash)
		new webpack.ProvidePlugin({
			_: 'lodash'
		}),
		new webpack.HotModuleReplacementPlugin(),
	],

	// Enable loading modules relatively to root (without the ../../ prefix)
	resolve: {
		root: [srcPath],
		extensions: ['', '.js', '.jsx']
	},

	module: {
		preLoaders: [
			{
				test: /\.jsx?$/,
				loader: 'eslint-loader',
				include: srcPath
			}
		],
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: /(node_modules|bower_components)/,
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	},

	eslint: {
		configFile: './eslintrc'
	},

	devtool: '#inline-source-map'
};
