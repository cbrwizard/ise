"use strict";

const fs = require('fs-extra-promise');

const FolderOutputAction = require('./../output/folder');
const ReactNativeAction = require('./../output/react_native');
const StoryReaderAction = require('./../read/story');
const deleteFile = require('./../file/delete');
const createFile = require('./../file/create');
const compileTemplate = require('./template');
const iOSIndexTemplateStore = require('./../../template_stores/ios/index');

/**
 Compiles into iOS app
 */
class IosCompiler {
  constructor(appOptions) {
    this.appOptions = appOptions;
  }

  * run() {
    return yield this._compile();
  }

  * _compile() {
    const compilationOutput = this.appOptions.get('compilation').output;
    const projectName = this.appOptions.get('name');
    const storyPath = this.appOptions.get('story').path;
    const outputJsPath = `${compilationOutput}/${projectName}/`;

    yield this._createFolder(compilationOutput);
    // Uncomment this for real stuff. comment when tired of compilation
    // yield this._createReactNativeApp(compilationOutput, projectName);

    const iOSGeneratedFile = 'index.ios.js';
    const filePath =`${outputJsPath}/${iOSGeneratedFile}`;
    yield deleteFile(filePath);
    yield createFile(`${compilationOutput}/${projectName}`, iOSGeneratedFile);

    let content = yield this._readStory(storyPath);

    let templateData = {
      projectName: projectName,
      outputJsPath: outputJsPath,
      chapter: content.text
    };
    yield compileTemplate(iOSIndexTemplateStore, filePath, templateData);

    return content;
  }

  * _createFolder(compilationOutput) {
    const folderOutputAction = new FolderOutputAction(compilationOutput);
    return yield folderOutputAction.run();
  }

  * _createReactNativeApp(compilationOutput, projectName) {
    const reactNativeAction = new ReactNativeAction(compilationOutput, projectName);
    return yield reactNativeAction.run()
  }

  * _readStory(storyPath) {
    const storyReaderAction = new StoryReaderAction(storyPath);
    return yield storyReaderAction.run();
  }
}

module.exports = IosCompiler;
