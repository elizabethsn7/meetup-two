import React, { Component } from 'react';

class Event extends Component {
  state = {
    event: {},
    showDetails: false
  };

  handleShowDetails = () => {
    this.setState({ showDetails: true });
  };

  render() {
    const showDetails = this.state.showDetails;
    return (
      <div className="event">
        <div className="collapsedDetails">
          <p className="eventName">{this.state.event.name}</p>
          <p className="date">{this.state.event.local_date}</p>
          <p className="localTime">{this.state.event.local_time}</p>
          <p className="attendeeNumber">{this.state.event.yes_rsvp_count}</p>
          <button onClick={() => this.handleShowDetails()}>More Details</button>
        </div>
        {showDetails && (
          <div className="expandedDetails">
            <p className="expandedDetails-description">
              {this.state.event.description}
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default Event;
