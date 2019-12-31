'use strict'

const REGEXP = /[-_.]+([A-z])/g

module.exports = function camelize (string) {
  return string.replace(REGEXP, (full, match) => match.toUpperCase())
}
