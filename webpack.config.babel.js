import path from 'path';

const bundle = 'index.js';
const entryFile = path.resolve(__dirname, 'src', 'ui', bundle);
const devDir = 'dist';
const devDestination = path.resolve(__dirname, devDir);

export default {
  name: 'client',
  entry: entryFile,
  output: {
    path: devDestination,
    filename: 'client.js',
    publicPath: `${devDir}/`,
    libraryTarget: 'umd',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
          plugins: ['syntax-class-properties', 'transform-class-properties'],
        },
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  externals: {
    React: 'React',
    ReactDOM: 'ReactDOM',
  },
};
