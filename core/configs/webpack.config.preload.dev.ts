import webpack from 'webpack';
import merge from 'webpack-merge';
import baseConfig from './webpack.config.base';
import path from 'path';
import webpackPaths from './webpack.paths';

const configPreloadDev: webpack.Configuration = {
  devtool: 'inline-source-map',
  mode: 'development',
  target: 'electron-preload',
  entry: path.join(webpackPaths.srcPreloadPath, 'preload.ts'),

  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
    }),

    new webpack.LoaderOptionsPlugin({
      debug: true,
    }),
  ],

  watch: true,
};

export default merge(baseConfig, configPreloadDev);
