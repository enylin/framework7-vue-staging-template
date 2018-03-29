var merge = require('webpack-merge')
var stagEnv = require('../../stag.env')

module.exports = merge(stagEnv, {
  PLATFORM: '"IOS_WEB"',
  THEME: '"ios"'
})
