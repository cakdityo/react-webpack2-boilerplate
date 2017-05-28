const webpack = require('webpack');
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');
const path =  require('path');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = Merge(CommonConfig, {
    entry: {
        main: './index.js'
    },

    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].[chunkhash].js'
    },

    plugins: [
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: {
                screw_ie8: true,
                keep_fnames: true
            },
            compress: {
                screw_ie8: true
            },
            comments: false
        }),
        new ManifestPlugin()
    ]
});