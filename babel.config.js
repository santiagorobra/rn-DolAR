module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    'import-glob',
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ios.js', '.android.js', '.js', '.jsx', '.ts', '.tsx', '.json'],
        alias: {
          '@components': './src/components',
          '@constants': './src/constants',
          '@interfaces': './src/interfaces',
          '@screens': './src/screens',
          '@utils': './src/utils',
          '@services': './src/services',
          '@redux': './src/redux',
        },
      },
    ],
  ],
};
