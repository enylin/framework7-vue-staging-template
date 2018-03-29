var merge = require('webpack-merge')
var prodEnv = require('../../prod.env')

module.exports = merge(prodEnv, {
  PLATFORM: '"ANDROID_APP"',
  THEME: '"md"'
})
