import React, { Component } from 'react';

class Event extends Component {
  state = {
    showDetails: false
  };

  handleShowDetails = () => {
    if (this.state.showDetails === false) {
      this.setState({ showDetails: true });
    } else {
      this.setState({ showDetails: false });
    }
  };

  render() {
    const showDetails = this.state.showDetails;
    return (
      <div className="Event">
        <div className="detailsOverview">
          <p className="date">Date: {this.props.event.local_date}</p>
          <p className="time">Time: {this.props.event.local_time}</p>
          <p className="name">Event Name: {this.props.event.name}</p>
          <p className="group-name">
            Group Name: {this.props.event.group.name}
          </p>
          <p className="attendeeNumber">
            Number Attending: {this.props.event.yes_rsvp_count}
          </p>
          <button
            className="details-btn"
            onClick={() => this.handleShowDetails()}>
            More Details
          </button>
        </div>
        {showDetails && (
          <div className="expandedDetails">
            <p className="description">{this.props.event.description}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Event;