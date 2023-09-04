const path = require('path')
import { ProvidePlugin } from 'webpack';
import { Configuration as WebpackConfiguration } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';

interface Configuration extends WebpackConfiguration {
    devServer?: WebpackDevServerConfiguration;
}

import ESLintPlugin from 'eslint-webpack-plugin';

const config: Configuration = {
    entry: ['./i18n', './src/index.tsx'],
    output: {
        publicPath: '/',
    },

    // output: {
    //     path: path.resolve(__dirname, 'build'),
    //     filename: 'main-[hash].js'
    // }
    module: {
        rules: [
            {
                test: /\.(jpg|jpeg|png|svg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[hash].[ext]',
                        outputPath: 'static',
                    },
                },
            },
            {
                test: /\.(ts|js)x?$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', // require.resolve('babel-loader')
                    options: {
                        plugins: [process.env.NODE_ENV == 'development' && require.resolve('react-refresh/babel')].filter(Boolean),
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react',
                            '@babel/preset-typescript',
                        ],
                    },
                },
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
        alias: {
            '@app': path.resolve(__dirname, 'src/app/'),
            '@configs': path.resolve(__dirname, 'src/app/configs/'),
            '@helpers': path.resolve(__dirname, 'src/app/helpers/'),
            '@interfaces': path.resolve(__dirname, 'src/app/interfaces/'),
            '@components': path.resolve(__dirname, 'src/app/components/'),
            '@modules': path.resolve(__dirname, 'src/app/modules/'),
            '@pages': path.resolve(__dirname, 'src/app/pages/'),
            '@styles': path.resolve(__dirname, 'src/styles/'),
        },
        fallback: {
            os: false,
        },
    },
    plugins: [
        new ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
        }),
        new ESLintPlugin({
            extensions: ['js', 'jsx', 'ts', 'tsx'],
        }),
    ],
};

export default config;
