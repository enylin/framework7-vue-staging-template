var merge = require('webpack-merge')
var testEnv = require('../../test.env')

module.exports = merge(testEnv, {
  PLATFORM: '"AUTO_APP"'
})
