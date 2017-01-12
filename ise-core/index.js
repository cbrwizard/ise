#! /usr/bin/env node
"use strict";
//require("babel-register"); // temporary to not to deal with webpack now

console.log('in ise-core body');

//const IosCompiler = require('./actions/compile/ios');

const stupidComponent = require('./components/ios/text/paragraph/paragraph');

function* iseCore(appOptions) {
  console.log('got inside iseCore main func');
  //switch (appOptions.get('compilation').target) {
  //  case 'ios':
  //    const iosCompilation = new IosCompiler(appOptions);
  //
  //    let content = yield iosCompilation.run();
  //    console.log('iseCore succeeded with iOS compilation');
  //    return content;
  //
  //  default:
  //    throw Error('Compilation target not supported');
  //}
}

let result = {
  component: stupidComponent // TODO now: must be a React class
};

module.exports = result;
