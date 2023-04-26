const { getDefaultConfig } = require('expo/metro-config');
const withNativewind = require('nativewind/metro');

module.exports = (() => {
  // used so we can import svg files and use them as react components
  const config = getDefaultConfig(__dirname);

  const { transformer, resolver } = config;

  config.transformer = {
    ...transformer,
  };
  config.resolver = {
    ...resolver,
  };

  return withNativewind(config);
})();
