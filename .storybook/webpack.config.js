const path = require('path');

module.exports = async ({ config, mode }) => {

  config.module.rules.push({
    test: /\.scss$/,
    loaders: ['style-loader', 'css-loader', 'sass-loader']
  });

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [['react-app', { flow: false, typescript: true }]],
    },
  });
  
  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};