import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  state = {
    number: 32
  };

  handleInputChanged = event => {
    const value = event.target.value;
    this.setState({ number: value });
    this.props.updateEvents(null, null, value);

    if (value < 1) {
      this.setState({
        infoText: 'Please enter a number of 1 or greater'
      });
    } else if (value > 74) {
      this.setState({
        infoText: "Whoa Nelly, that's a lot of scrolling you're gonna do!"
      });
    } else {
      this.setState({
        infoText: ''
      });
    }
  };

  render() {
    return (
      <div className="NumberOfEvents">
        <ErrorAlert text={this.state.infoText} />
        <Container>
          <span>Show</span>
          <input
            type="number"
            className="eventsShown"
            placeholder="32"
            value={this.state.number}
            onChange={this.handleInputChanged}
          />
          <span>Results</span>
        </Container>
      </div>
    );
  }
}

export default NumberOfEvents;
