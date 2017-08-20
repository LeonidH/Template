const rules = require('./webpack_const/rule');
const createServer = require('./webpack_const/server');
const plugin = require('./webpack_const/plugin');
const path = require('path');

module.exports = {
    entry: {
        app: './src/index.ts',
        vendor: ['jquery', "kendo-ui-core"],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js',
    },
    module: {
        rules: [
            rules.TS_LOADER,
            rules.SCSS_LOADER(process.env.NODE_ENV),
        ],
    },
    devServer: createServer.devServer(path.join(__dirname, 'dist')),
    plugins: [
        plugin.HotModuleReplacement,
        plugin.NamedModules,
        plugin.HtmlWebpack,
        plugin.CommonsChunk,
        plugin.ExtractText(process.env.NODE_ENV),
        // Make sure this is after ExtractTextPlugin!
        plugin.PurifyCSS,
    ],
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    devtool: 'inline-source-map',
}