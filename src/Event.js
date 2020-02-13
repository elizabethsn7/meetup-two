import React, { Component } from 'react';

class Event extends Component {
  state = {
    event: [],
    showDetails: false
  };

  handleShowDetails = () => {
    this.setState({ showDetails: true });
  };

  render() {
    const showDetails = this.state.showDetails;
    return (
      <div className="event">
        <div className="detailsOverview">
          <p className="eventName">Event Name: {this.props.event.name}</p>
          <p className="date">Date: {this.props.event.local_date}</p>
          <p className="attendeeNumber">
            Number Attending: {this.props.event.yes_rsvp_count}
          </p>
          <button onClick={() => this.handleShowDetails()}>More Details</button>
        </div>
        {showDetails && (
          <div className="expandedDetails">
            <p className="expandedDetails-description">
              {this.props.event.description}
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default Event;
