var webpack = require('webpack');

module.exports = {
	entry: "./src/main.js",
	output: {
		path: __dirname + "/public_html/build",
		publicPath: 'build/',
		filename: 'bundle.js'
	},

	module: {
		rules: [
			{
				test: /\.(css)$/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					'file-loader'
				]
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [
					'file-loader'
				]
			},

			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			},
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			}

		]
	},

	resolve: {
		modules: ['node_modules'],
		extensions: [".js", ".json", ".jsx", ".css"]
	},
	plugins: [],
};