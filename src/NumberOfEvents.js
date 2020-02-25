import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    number: 10
  };

  handleInputChanged = event => {
    const value = event.target.value;
    this.setState({ number: value });
    this.props.updateEvents(null, null, value);
  };

  render() {
    return (
      <div className="NumberOfEvents">
        <input
          type="number"
          className="eventsShown"
          placeholder="Number of events"
          value={this.state.number}
          onChange={this.handleInputChanged}
        />
      </div>
    );
  }
}

export default NumberOfEvents;
