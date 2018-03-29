var merge = require('webpack-merge')
var prodEnv = require('../../prod.env')

module.exports = merge(prodEnv, {
  PLATFORM: '"IOS_APP"',
  THEME: '"ios"'
})
