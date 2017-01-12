"use strict";

const fs = require('fs-extra-promise');
const handlebars = require('handlebars');

const readFile = require('./../file/read');
const writeToFile = require('./../file/write');
const copyFile = require('./../file/copy');

/**
 * Takes a given templateStore, reads template from it, compiles it using
 * Handlebars and outputs it into the file.
 */
function* compileTemplate(templateStore, path, templateData) {
  /**
   * Returns rendered template contents as a string.
   *
   * @param templateStore {Object}
   * @param templateData {Object}
   * @returns {String}
   */
  function* getContentFromTemplateStore(templateStore, templateData) {
    let mergedData = Object.assign(templateStore.templateData, templateData);
    let templateContent = yield readFile(templateStore.templatePath);
    let fullTemplateOutputPath =
      `${mergedData.outputJsPath}/${templateStore.outputDataFilePath}`;

    yield _registerPartials(templateStore.usedPartials);
    yield _copyUsedComponents(templateStore.usedComponents, mergedData.outputJsPath);
    yield writeToFile(fullTemplateOutputPath, JSON.stringify(mergedData));

    let compileTemplate = handlebars.compile(templateContent);
    return compileTemplate(mergedData);
  }

  /**
   * Copies files used by a template
   * @param components {Array}
   * @param outputRoot {String}
   * @private
   */
  function *_copyUsedComponents(components, outputRoot) {
    /**
     * Copies a single file
     * @param component {Object}
     * @private
     */
    function* _copyUsedComponent(component) {
      /**
       * Returns a file name from a given full file path
       * @param path {String}
       * @returns {String}
       */
      function fileNameFromPath(path) {
        return path.substr(path.lastIndexOf('/') + 1)
      }

      /**
       * Copies a file used by a component
       * @param fullDestinationFolder {String}
       * @param filePath {String}
       */
      function* copyComponentFile(fullDestinationFolder, filePath) {
        return yield copyFile(
          filePath,
          `${fullDestinationFolder}/${fileNameFromPath(filePath)}`
        );
      }

      let fullDestinationFolder =
        `${outputRoot}/${component.destinationFolder}`;

      yield copyComponentFile(fullDestinationFolder, component.source);
      yield copyComponentFile(fullDestinationFolder, component.style);
    }

    yield components.map(_copyUsedComponent);
  }

  /**
   * Iterates over each partial and registers it within Handlebars so it's
   * accessible in templates.
   * @param partials {Array}
   * @private
   */
  function* _registerPartials(partials) {
    /**
     * Registers a given partial within Handlebars.
     * @param partial {Object}
     */
    function* registerPartial(partial) {
      let partialContent = yield readFile(partial.path);
      handlebars.registerPartial(partial.name, partialContent);
    }

    yield partials.map(registerPartial);
  }

  let contentToSaveInFile = yield getContentFromTemplateStore(
    templateStore, templateData
  );
  yield writeToFile(path, contentToSaveInFile);

  console.log(
    `Successfully compiled a template`
  );

  return true;
}

module.exports = compileTemplate;
