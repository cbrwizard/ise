"use strict";

const fs = require('fs-extra-promise');

/**
 * Asynchronously reads a file from given path
 * @param path {String}
 */
function* readFile(path) {
  return yield fs.readFileAsync(path, 'utf8');
}

module.exports = readFile;
