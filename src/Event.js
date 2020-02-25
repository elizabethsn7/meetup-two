import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

class Event extends Component {
  state = {
    events: [],
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
      <Container>
        <div className="Event">
          <div className="detailsOverview">
            <p className="name">Event: {this.props.event.name}</p>
            <p className="date">Date: {this.props.event.local_date}</p>
            <p className="time">Time: {this.props.event.local_time}</p>
            <p className="attendeeNumber">
              Number Attending: {this.props.event.yes_rsvp_count}
            </p>
            <Button
              className="btn details-btn"
              onClick={() => this.handleShowDetails()}>
              More Details
            </Button>
          </div>
          {showDetails && (
            <div className="expandedDetails">
              <p className="description">{this.props.event.description}</p>
            </div>
          )}
        </div>
      </Container>
    );
  }
}

export default Event;
