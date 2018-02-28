var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin'); //will create external css files
var HtmlWebpackPlugin = require('html-webpack-plugin');         //will create a new html 
var CleanWebpackPlugin = require('clean-webpack-plugin');       //will cleare the dist folder everytime

var webpack = require('webpack');
//Create a new instance to set the name
var extractPlugin = new ExtractTextPlugin({
   filename: 'main.css'
});

module.exports = {
    entry: './src/js/app.js',       //where the journey begins
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        // publicPath: '/dist'      //since index.html is with the other files
    },
    module: {
        rules: [
//load es6
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015']
                        }
                    }
                ]
            },
//Extracting the loaded scss modules
            {
                test: /\.scss$/,
                use: extractPlugin.extract({
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
//usage of the file-loader, for copying images
            {
                test: /\.(jpg|png)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'img/',
                            publicPath: 'img/'
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                        }

                    }
                ],
             //We do not want to copy over base index.html   
                exclude: path.resolve(__dirname,"src/index.html")
            }
        ]
    },
    plugins: [
//We map the imported js files together    
        new webpack.ProvidePlugin({
            $:'jquery',
            jQuery:'jquery'
        }),
        extractPlugin,
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new CleanWebpackPlugin(['dist'])
    ]
};