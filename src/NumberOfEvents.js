import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    amount: 10
  };

  handleInputChanged = event => {
    const value = event.target.value;
    this.setState({ amount: value });
  };

  render() {
    return (
      <div className="NumberOfEvents">
        <input
          type="text"
          className="eventsShown"
          placeholder="Number of events"
          value={this.state.amount}
          onChange={this.handleInputChanged}
        />
      </div>
    );
  }
}

export default NumberOfEvents;
