const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const glob = require('glob');
const PurifyCSSPlugin = require('purifycss-webpack');

module.exports = {
    HotModuleReplacement: new webpack.HotModuleReplacementPlugin(),
    NamedModules: new webpack.NamedModulesPlugin(),
    HtmlWebpack: new HtmlWebpackPlugin({
        title: 'Work',
        hash: true,
        minify: {
            collapseWhitespace: true,
        },
        template: './src/index.html',
    }),
    CommonsChunk: new webpack.optimize.CommonsChunkPlugin({
        names: ['vendor', 'manifest'],
    }),
    ExtractText: function (isProd) {
        return new ExtractTextPlugin({
            filename: '/css/[name].css',
            disable: !isProd,
            allChunks: true,
        })
    },
    PurifyCSS: new PurifyCSSPlugin({
        // Give paths to parse for rules. These should be absolute!
        paths: glob.sync(path.join(__dirname, 'src/*.html')),
    }),
}