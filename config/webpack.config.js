const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const ROOT = path.join(__dirname, "..");
const OUTPUT_ASSETS = "assets";
const VENDOR_LIBS = [
	"axios",
	"vue",
	"vue-router",
	"vuelidate",
	"vuetify",
	"vuex"
];

module.exports = {
	entry: {
		bundle: path.join(ROOT, "src", "main.js"),
		vendor: VENDOR_LIBS
	},
	output: {
		path: path.join(ROOT, "dist"),
		filename: OUTPUT_ASSETS + '/js/[name].[hash].js'
	},
	node: {
		fs: "empty"
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'vue-style-loader',
					'css-loader'
				],
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					buble: {
						objectAssign: "Object.assign",
					},
					extractCSS: true,
					loaders: {}
					// other vue-loader options go here
				}
			},
			{
				test: /\.js$/,
				loader: 'buble-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'file-loader',
				options: {
					name: OUTPUT_ASSETS + '/files/[name].[ext]?[hash]'
				}
			}
		]
	},
	plugins: [
		new ExtractTextPlugin(OUTPUT_ASSETS + "/css/style.css"),
		new webpack.optimize.CommonsChunkPlugin({
			names: ["vendor", "manifest"]
		}),
		new HtmlWebpackPlugin({
			template: path.join(ROOT, "index.html")
		})
	],
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.esm.js'
		},
		extensions: ['*', '.js', '.vue', '.json']
	}
};