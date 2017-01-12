#! /usr/bin/env node
"use strict";

const co = require('co');
//
//const ConfigReaderAction = require('./actions/read/config');
const iseCore = require('ise-core');

//const defaultConfigPath = __dirname + '/config/default.json';
//const configReaderAction = new ConfigReaderAction(defaultConfigPath);
const appOptions = new Map();

console.log('in ise-cmd body');
co(function*() {
  console.log('got inside ise-cmd main func');
  //const nconf = yield configReaderAction.run();
  //appOptions.set('name', nconf.get('name'));
  //appOptions.set('story', nconf.get('story'));
  //appOptions.set('compilation', nconf.get('compilation'));
  //
  yield iseCore(appOptions);
  console.log('Compilation successful');
}).catch((err) => {
  console.log(`Error: ${err.stack}`);
});
