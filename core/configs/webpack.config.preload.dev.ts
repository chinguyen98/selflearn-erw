import webpack from 'webpack';
import merge from 'webpack-merge';
import baseConfig from './webpack.config.base';

const configPreloadDev: webpack.Configuration = {
  devtool: 'inline-source-map',
  mode: 'development',
  target: 'electron-preload',
};

export default merge(baseConfig, configPreloadDev);
