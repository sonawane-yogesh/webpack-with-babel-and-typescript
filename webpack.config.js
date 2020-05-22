const {
    resolve
} = require("path");
const {
    readFileSync
} = require("fs");

module.exports = {
    entry: {
        "index-page": "./public/dist/scripts/index-page.js"
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env"]
                }
            }
        }]
    },
    devServer: {
        contentBase: resolve(__dirname, "public"),
        publicPath: '/scripts/',
        https: true,
        key: readFileSync('./public/certificates/device.key'),
        cert: readFileSync('./public/certificates/device.crt'),
        ca: readFileSync('./public/certificates/rootCA.pem'),
    },
    watch: true,
    watchOptions: {
        ignored: ['node_modules/**']
    },
    output: {
        filename: '[name].js',
        path: resolve(__dirname, "public/scripts")
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devtool: "source-map",
    mode: "development"
};