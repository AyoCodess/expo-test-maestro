module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', 'nativewind/babel'],
    plugins: [
      [
        'module-resolver',
        {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
          alias: {
            '@ui': ['./src/app/ui'],
            '@': ['./src/app']
          }
        }
      ],
      [
        'react-native-reanimated/plugin',
        {
          relativeSourceLocation: true
        }
      ]
    ]
  };
};


