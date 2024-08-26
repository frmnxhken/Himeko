const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'himeko_validation.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'Himeko',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
