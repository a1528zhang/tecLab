/**
 * Created by az on 2017/7/11.
 */
module.exports = {
    devtool: 'source-map',
    entry: __dirname+'/src/index.tsx',
    output: {
        path: __dirname+'/dist',
        filename: 'bundle.js',
    },
    resolve: {
        extensions: [".js", ".json", ".jsx", ".css", ".ts", ".tsx"],
    },
    devServer: {
        contentBase:  __dirname+"/dist",
        compress: true,
        port: 5000,
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: '/assets/image/',
                }
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: ['env', 'es2015', 'react']
                }
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                loader: "ts-loader",
            },
            {
                test: /\.s?css$/,
                use: ['style', 'css', 'sass']
            }
        ]
    }
};
