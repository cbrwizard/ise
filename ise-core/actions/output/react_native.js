"use strict";

const spawn = require('child_process').spawn;

/*
 Creates a react native app
 TODO: allow users to respond to props
 */
class ReactNative {
  constructor(path, name) {
    this.path = path;
    this.name = name;
  }

  run() {
    return this._createProject();
  }

  _createProject() {
    return new Promise((resolve, reject) => {
        console.log('Starting to create a React Native project.');

        const shellScript = this._reactNativeCommand();
        shellScript.stdout.on('data', (data) => {
          console.log('React Native: ' + data);
          if (String(data).startsWith('prompt')) {
            shellScript.kill('SIGKILL');
            shellScript.stdout.removeAllListeners();
            reject('Resolve a React Native prompt and repeat :[');
          }
        });
        shellScript.stdout.on('end', function (data, signal) {
          console.log('React Native app created');
          resolve();
        });

        shellScript.stderr.on('data', function (data, signal) {
          console.log('stderr:' + data);
        });
      }
    )
  }

  _reactNativeCommand() {
    return spawn('react-native', ['init', this.name], {cwd: this.path});
  }
}

module.exports = ReactNative;
