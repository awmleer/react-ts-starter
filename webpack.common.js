const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// TODO add tree shaking feature

module.exports = {

  entry: {
    index: './src/index.tsx',
    // widget: './src/widget.tsx',
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'Output Management',
    }),
  ],

  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist')
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          'awesome-typescript-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif|jpeg)$/,
        use: [
          'file-loader'
        ]
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      // { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
    ]
  }

};
