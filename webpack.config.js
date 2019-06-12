const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const outputPath = path.resolve('c:/project/mytable', 'dist');

module.exports = {
    entry: {
        bundle: './main.js'
    },

    output: {
        path: outputPath,
        filename: 'js/[name].js'
    },

    mode: 'development',

    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(ttf|woff)$/,
                use: [
                    {
                        loader:'url-loader'
                    }
                ]
            }
        ]
    },

    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.html',
            filename: path.resolve(outputPath, 'index.html')
        }),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, 'js/standard/vue.js'),
                to: path.resolve(outputPath, 'js/standard/vue.js')
            }
        ])
    ]
}