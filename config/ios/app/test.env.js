var merge = require('webpack-merge')
var testEnv = require('../../test.env')

module.exports = merge(testEnv, {
  PLATFORM: '"IOS_APP"',
  THEME: '"ios"'
})
