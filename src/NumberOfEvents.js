import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    amount: ''
  };

  handleInputChanged = event => {
    const value = event.target.value;
    this.setState({ amount: value });
  };

  render() {
    return (
      <div className="NumberOfEvents">
        <input
          type="number"
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
