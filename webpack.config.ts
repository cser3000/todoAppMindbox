import path from "path"
import 'webpack-dev-server';


import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

type Env = {
    mode: 'development' | 'production';
    port: number
};


export default (env: Env) => {

    const dev = env.mode === "development"

    const config: any = {
        mode: env.mode ?? "development",
        entry: path.resolve(__dirname, "src", "index.tsx"),
        output: {
            path: path.resolve(__dirname, "build"),
            filename: "[name].[contenthash:6].js",
            clean: true
        },
        plugins: [
            new HtmlWebpackPlugin({template: path.resolve(__dirname, 'public', 'index.html')}),
            new MiniCssExtractPlugin({
                filename: 'css/[name].[contenthash:6].css',
            }),
        ],
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.css$/,
                    exclude: /\.module.css$/,
                    use: [MiniCssExtractPlugin.loader, 'css-loader'],
                },
                {
                    test: /\.module.css$/,
                    use: [MiniCssExtractPlugin.loader, 'css-loader'],
                },
            ]
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        devtool: dev && 'inline-source-map',
        devServer: dev ? {
            port: env.port ?? 3000,
            open: true
        } : undefined
    }
    return config
}