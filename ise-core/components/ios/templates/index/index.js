/**
 * TODO: check if able to use ES6 class
 */

const React = require('react-native');
const {ScrollView} = React;
const Paragraph = require('./../../text/paragraph/paragraph');
const defaultProps = require('./default_props.json');
const styles = require('./styles.js');

const Main = React.createClass({
  getDefaultProps: function () {
    return defaultProps;
  },

  render: function () {
    return (
      <ScrollView style={styles.view}>
        <Paragraph text={this.props.chapter}/>
        <Paragraph text={this.props.chapter}/>
        <Paragraph text={this.props.chapter}/>
      </ScrollView>
    );
  }
});

module.exports = Main;
