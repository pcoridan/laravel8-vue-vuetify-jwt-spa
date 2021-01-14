const mix = require('laravel-mix');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');

const webpackConfig = {
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            '@': __dirname + '/resources/js',
        },
        plugins: [
            new DirectoryNamedWebpackPlugin({honorIndex: true}),
        ],
    },
    output: {
        chunkFilename: 'js/chunks/[name][chunkhash].js',
    }
};

mix.sourceMaps();

mix.webpackConfig(webpackConfig).js('resources/js/app.js', 'public/js').vue({ version: 2 })
    .sass('resources/sass/app.scss', 'public/css');
