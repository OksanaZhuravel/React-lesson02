const path = require("path");
/*const webpack = require("webpack");*/
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry:
      path.join(__dirname,"src", "index.js"),


    output: {
        path: path.join(__dirname, "build"),
        filename: "bundle.js",
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /.(css)$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
/*            {
                loader: "babel-loader",
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"]
                }
            },*/

        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: path.join(__dirname, "src", "index.html"),
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css",
        }),
    ],

};