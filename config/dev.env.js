'use strict'
const merge = require('webpack-merge')
const stagEnv = require('./stag.env')

module.exports = merge(stagEnv, {
  NODE_ENV: '"development"',
  URLS: {
    BASE_URL: '"http://localhost:8081"'
  }
})
