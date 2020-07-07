const main = require('../../../.storybook/main');

module.exports = {
  ...main,
  "stories": [
    "../**/*.stories.*"
  ],
  "addons": [
    ...main.addons
  ],
}
