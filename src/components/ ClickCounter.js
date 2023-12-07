import React, { Component } from 'react';

class ClickCounter extends Component {
  // Initializing state in the constructor
  constructor(props) {
    super(props);
    this.state = {
      clickCount: 0,
    };
  }

  // Function to handle button click
  handleButtonClick = () => {
    // Update the clickCount state
    this.setState(prevState => ({
      clickCount: prevState.clickCount + 1,
    }));
  };

  render() {
    return (
      <div>
        {/* Display the click count */}
        <p>Button clicked {this.state.clickCount} times</p>

        {/* Button that triggers the handleButtonClick function */}
        <button onClick={this.handleButtonClick}>Click me</button>
      </div>
    );
  }
}

export default ClickCounter;
