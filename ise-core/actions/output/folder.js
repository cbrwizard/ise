"use strict";

const fs = require('fs-extra-promise');

/*
 Creates an output folder
 */
class Folder {
  constructor(path) {
    this.path = path;
  }

  * run() {
    return yield this._createFolder();
  }

  * _createFolder() {
    yield fs.mkdirsAsync(this.path);
    console.log(
      `A folder with path ${this.path} now exists if it didn't`
    );
    return true;
  }
}

module.exports = Folder;
