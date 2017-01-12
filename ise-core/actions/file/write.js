"use strict";

const fs = require('fs-extra-promise');

/**
 * Asynchronously writes to a file at given path
 * @param path {String}
 */
function* writeToFile(path, content) {
  yield fs.outputFileAsync(path, content);
}

module.exports = writeToFile;
