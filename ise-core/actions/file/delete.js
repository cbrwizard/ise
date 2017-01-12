"use strict";

const fs = require('fs-extra-promise');

function* deleteFile(filePath) {
  yield fs.removeAsync(filePath);

  console.log(
    `A file at ${filePath} is now removed.`
  );

  return true;
}

module.exports = deleteFile;
