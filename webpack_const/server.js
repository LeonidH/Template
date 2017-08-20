module.exports = {
    devServer: function (contentBase) {
        return {
            contentBase: contentBase,
            compress: true,
            historyApiFallback: true,
            host: 'localhost',
            port: 9000,
            stats: {
                cached: true,
                cachedAssets: true,
                chunks: true,
                chunkModules: false,
                colors: true,
                hash: false,
                reasons: true,
                timings: true,
                version: false,
            },
            open: true,
        }
    },
    
}