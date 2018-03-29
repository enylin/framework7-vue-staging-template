const env = require('yargs').argv.env

function platform () {
  if (env.android) { return 'android' }
  else if (env.ios) { return 'ios' }
  else { return 'auto'}
}

function userAgent () {
  if (env.web) { return 'web' }
  else if (env.app) { return 'app' }
  else {
    console.error('[--web/--app]')
    process.exit(1)
  }
}

function buildType () {
  if (env.dev) { return 'dev' }
  else if (env.staging) { return 'stag' }
  else if (env.production) { return 'prod' }
  else {
    console.error('[--staging/--production]')
    process.exit(1)
  }
}

module.exports = {
  buildType: buildType(),
  platform: platform(),
  userAgent: userAgent()
}
