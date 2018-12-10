module.exports = {
	entry: './js/magicblock-jsx.js',
	output: {
		path: __dirname,
		filename: 'js/magicblock.build.js',
	},
	module: {
		loaders: [
			{
				test: /.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
		],
	},
};