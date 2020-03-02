import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import App from './App';

class NumberOfEvents extends Component {
  state = {
    number: 32
  };

  handleInputChanged = event => {
    const value = event.target.value;
    this.setState({ number: value });
    this.props.updateEvents(null, null, value);
  };
  render() {
    return (
      <div className="NumberOfEvents">
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
