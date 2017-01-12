"use strict";

const fs = require('fs-extra-promise');

function* createFile(path, name) {
  yield fs.ensureFileAsync(`${path}/${name}`);

  console.log(
    `A file ${name} at ${path} is now created if it didn't exist.`
  );

  return true;
}

module.exports = createFile;
