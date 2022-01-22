
const extract_css = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  watch: true,
  output: {
    path: path.resolve(__dirname, './public/pub'),
    filename: `app.js`
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          extract_css.loader,
          {
              loader: 'css-loader',
              options: { url: false }
          },
          'postcss-loader',
          'sass-loader'
        ],
      },
      {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: 'babel-loader'
      },
    ],
  },
  plugins: [
    new extract_css({
      filename: `app.css`,
      chunkFilename: 'chunk.css',
    })
  ],
  resolve: {
    alias: {
      "react": "preact-compat",
      "react-dom": "preact-compat"
    }
  }
};
