const path = require('path');
const merge = require("webpack-merge");

const baseConfig = require("./webpack.config");

module.exports = merge(baseConfig, {
	devServer: {
		historyApiFallback: true,
		noInfo: true,
		overlay: true
	},
	performance: {
		hints: false
	},
	devtool: '#eval-source-map'
});