const { mergeConfig } = require('vite');

module.exports = (config) => {
  // Important: always return the modified config
  return mergeConfig(config, {
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  });
};
export default {
  optimizeDeps: {
    exclude: ['path', 'fs', 'url', 'source-map-js', 'postcss', 'sanitize-html']
  }
}
