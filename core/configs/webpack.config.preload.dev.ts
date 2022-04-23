import webpack from 'webpack';
import merge from 'webpack-merge';
import baseConfig from './webpack.config.base';
import path from 'path';
import webpackPaths from './webpack.paths';

const configPreloadDev: webpack.Configuration = {
  devtool: 'inline-source-map',
  mode: 'development',
  target: 'electron-preload',
  entry: path.join(webpackPaths.srcPreloadPath, 'index.ts'),
};

export default merge(baseConfig, configPreloadDev);
