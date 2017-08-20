const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    TS_LOADER: {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    },
    SCSS_LOADER: function (isProd) {
        var cssConfig = isProd ? ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader'],
            publicPath: '/dist'
        }) : [
            'style-loader',
            'css-loader?sourceMap',
            'sass-loader'
        ]
        return {
            test: /\.scss$/,
            use: cssConfig,
        }
    }
}