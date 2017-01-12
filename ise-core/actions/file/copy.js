"use strict";

const fs = require('fs-extra-promise');

/**
 * Asynchronously copies a file to a given path
 * @param file {String}
 * @param path {String}
 */
function* copyFile(file, path) {
  yield fs.copyAsync(file, path);
}

module.exports = copyFile;
