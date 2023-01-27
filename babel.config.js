module.exports = {
  loaders: [
    {test: /\.js$/, loader: 'babel', option: {generatorOpts: {compact: false}}},
  ],
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@app': './src',
        },
      },
    ],
  ],
};
