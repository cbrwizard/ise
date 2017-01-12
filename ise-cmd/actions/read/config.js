"use strict";

const nconf = require('nconf');
const fs = require('fs-extra-promise');

/*
 Reads config contents
 */
class ConfigReader {
  constructor(defaultConfigPath) {
    this.defaultConfigPath = defaultConfigPath;
  }

  * run() {
    return yield this._getConfig();
  }

  * _getConfig() {
    const defaultConfigObject = yield fs.readJsonAsync(this.defaultConfigPath);
    nconf.argv()
      .env()
      .file({file: process.cwd() + '/config/default.json'})
      .defaults(defaultConfigObject);
    return nconf;
  }
}

module.exports = ConfigReader;
