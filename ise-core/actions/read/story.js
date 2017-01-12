"use strict";

const fs = require('fs-extra-promise');

/*
 Reads story file contents
 */
class StoryReader {
  constructor(path) {
    this.path = path;
  }

  * run() {
    return yield this._getStoryContent();
  }

  * _getStoryContent() {
    let storyObject = yield fs.readJsonAsync(this.path);

    const contents = storyObject.contents;
    const element = contents[0]; //iterate later

    return this._handleContentOfKind(element.kind, element.content);
  }

  _handleContentOfKind(kind, content) {
    switch (kind) {
      case 'chapter':
        console.log('Found a chapter');
        return content; //here it should do the actual parsing using another
      // class ChapterReader with missing data catching

      default:
        return false;
    }
  }
}

module.exports = StoryReader;
