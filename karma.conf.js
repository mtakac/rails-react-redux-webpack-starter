var path = require('path');

var srcPath = path.join(__dirname, 'client/src');

module.exports = function(config) {

	config.set({
		basePath: '',

		plugins: [
			require('karma-webpack'),
      'karma-jasmine',
      'karma-clear-screen-reporter',
      'karma-mocha-reporter',
      'karma-chrome-launcher'
		],

		frameworks: ['jasmine'],

		webpack: {
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
			}
		},

		files: ['client/test/test.js'],

		preprocessors: {
      'client/test/test.js': ['webpack']
    },

    reporters: ['clear-screen', 'mocha'],

    mochaReporter: {
      output: 'minimal'
    },

    colors: true,
    watch: true,
    logLevel: config.LOG_WARN,
    browsers: ['Chrome'],
    singleRun: false
	})

};
