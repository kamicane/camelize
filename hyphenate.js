'use strict'

const REGEXP = /([A-Z])/g

module.exports = function hyphenate (string, char = '-') {
  return string.replace(
    REGEXP, (full, match) => `${char}${match.toLowerCase()}`
  )
}
