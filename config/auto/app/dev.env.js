var merge = require('webpack-merge')
var devEnv = require('../../dev.env')

module.exports = merge(devEnv, {
  PLATFORM: '"AUTO_APP"'
})
