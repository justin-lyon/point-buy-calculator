const path = require('path');
const webpack = require("webpack");
const merge = require("webpack-merge");

const baseConfig = require("./webpack.config");

module.exports = merge(baseConfig, {

	devtool: '#eval-source-map',
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: true,
			compress: {
				warnings: false
			}
		}),
		new webpack.LoaderOptionsPlugin({
			minimize: true
		}),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		})
	]
});