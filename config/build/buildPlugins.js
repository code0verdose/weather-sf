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
			'process.env': {
				OW_API_KEY: JSON.stringify('f5d2d80eff349ead94bf4fa054dbef9c'),
				OW_API_URL_CURRENT: JSON.stringify(
					'https://api.openweathermap.org/data/2.5/weather'
				),
				OW_API_URL_FORECAST: JSON.stringify(
					'https://api.openweathermap.org/data/2.5/forecast'
				),
			},
		}),
		new webpack.EnvironmentPlugin({ ...process.env }),
		new webpack.HotModuleReplacementPlugin(),
	];
}
