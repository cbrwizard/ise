import React from 'react-native-web'

class Timeline extends React.Component {
  constructor(props) {
    this.props = props;
  }

  render() {
    // we might need to take react-native-web tags here
    <section>
      Hello from timeline!
      <div>
        {this.props.children}
      </div>
    </section>
  }
}

Timeline.propTypes = {

};

export default Timeline;
