const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        global: './src/apps/global/global.js',
        home: './src/apps/home/home.js',
        blogs: './src/apps/blogs/blogs.js',
        'add-blog' : './src/apps/add-blog/add-blog.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]/index.js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }, {
                test: /\.(sc|sa)ss$/,
                use: [
                {
                    loader: MiniCssExtractPlugin.loader
                },{
                    loader: "css-loader"
                }, {
                    loader: "postcss-loader"
                }, {
                    loader: "sass-loader",
                    options: {
                        implementation: require('sass')
                    }
                }]
            }, {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        outputPath: 'images'
                    }
                }]
            }, {
                test: /\.(woff|woff2|ttf|otf|eot)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        outputPath: 'fonts'
                    }
                }]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name]/index.css"
        }),
        new CopyPlugin({
            patterns: [{
                from: './src/*.html',
                to: path.resolve(__dirname, 'dist/[name]/index.html'),
            }]
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 9000
    }
}