const React = require('react-native');
const {Text} = React;
const styles = require('./styles.js');

const Paragraph = React.createClass({
  getDefaultProps: function() {
    return {
      text: 'React'
    }
  },

  render: function () {
    return (
      <Text style={styles.paragraph}>
        {this.props.text}
      </Text>
    );
  }
});

module.exports = Paragraph;
