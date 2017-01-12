"use strict";
//require("babel-register"); // temporary to not to deal with webpack now;
import Timeline from './components/timeline'
import Block from './components/block'

console.log('in ise-example body');

import React, { Image, ScrollView, StyleSheet, Text, TextInput, Touchable, View } from 'react-native-web'

const Example = () => (
  <View style={styles.root}>
    <Text style={styles.text}>
      React Native for Web
    </Text>
    <Timeline>
      <Block />
      <Block />
      <Block />
    </Timeline>
  </View>
)

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    backgroundColor: '#05A5D1',
    padding: 20
  },
  text: {
    color: '#fff',
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    fontSize: 64
  }
})

// -----------------------------------

const root = document.getElementById('root')
React.render(<Example />, root)

//const iseCore = require('ise-core');
//
//const stupidComponent = iseCore.component;
//console.log(stupidComponent);


//
//const readMarkdownFile = require('./lib/readMarkdownFile');
//
//let introductionPath = 'ise-example-contents/texts/introduction.md';
//let introductionMarkdown = readMarkdownFile(introductionPath);
//
////console.log(introductionMarkdown);
//
