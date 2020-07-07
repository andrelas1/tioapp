const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

const webpackFinal = (config) => {
  config.resolve.extensions.push('.ts', '.tsx')
  if (config.resolve.plugins) {
    config.resolve.plugins.push(new TsconfigPathsPlugin())
  } else {
    config.resolve.plugins = [new TsconfigPathsPlugin()]
  }
  return config
}

module.exports = {
  "stories": [
    "../stories/**/*.stories.*"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-actions",
    "@storybook/addon-docs"
  ],
  webpackFinal
}
