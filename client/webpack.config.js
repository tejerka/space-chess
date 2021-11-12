const path = require('path');

module.exports = (_env, argv) => ({
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        cacheDirectory: true,
                        cacheCompression: false,
                        envName: argv.mode === "production" ? "production" : "development",
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            }
        ]
    },
    resolve: {
        alias: {
            "@client": path.resolve(__dirname, "./src/"),
        },
        extensions: [".js", ".jsx"]
    }
});