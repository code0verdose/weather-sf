import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default function buildPlugins({ paths, isDev }) {
	return [
		new webpack.ProgressPlugin(),
		new HtmlWebpackPlugin({
			template: paths.html,
		}),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:8].css',
			chunkFilename: 'css/[name].[contenthash:8].css',
		}),
		new webpack.DefinePlugin({
			__IS_DEV__: JSON.stringify(isDev),
		}),
		new webpack.HotModuleReplacementPlugin(),
	];
}
