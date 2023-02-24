module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          screens: './src/screens',
          components: './src/components',
          navigation: './src/navigation',
          assets: './src/assets',
        },
      },
    ],
  ],
  plugins: ['react-native-reanimated/plugin'],
};
