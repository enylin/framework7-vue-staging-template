var merge = require('webpack-merge')
var devEnv = require('../../dev.env')

module.exports = merge(devEnv, {
  PLATFORM: '"ANDROID_APP"',
  THEME: '"md"'
})
