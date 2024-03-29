const path = require("path");

module.exports = {
    mode: "development", //production para gerar códigos menores | development para gerar códigos mais detalhados
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "public", "assets", "js"),
        filename: "bundle.js"
    },
    module: {
        rules:[{
            exclude: /node_modules/,
            test: /\.js$/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["@babel/env"]
                }
            }
        }, {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
        }]
    },
    devtool: "source-map"
}