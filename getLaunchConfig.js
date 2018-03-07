const { existsSync } = require('fs-extra')

module.exports = () => {
  if (existsSync('./launch.json') || existsSync('./launch.js')) {
    return require('./launch')
  }
  return {}
}