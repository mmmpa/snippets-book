module.exports = async (
  {
    config,
    mode,
  },
) => {
  config.module.rules.push({
    test: /\.sass$/,
    use: [
      'style-loader',
      'css-loader',
      'sass-loader',
    ],
  });

  config.module.rules.push({
    test: /\.tsx?$/,
    use: [
      { loader: 'ts-loader' },
    ],
  });

  config.module.rules.push({
    test: /\.tsx?$/,
    loader: 'eslint-loader',
    options: {
      formatter: require('eslint-friendly-formatter'),
      emitWarning: true,
      // fix: true,
    },
  });

  console.log(config)

  config.resolve.extensions.push('tsx')
  config.resolve.extensions.push('ts')

  return config;
};
