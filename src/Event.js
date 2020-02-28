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
    const { event } = this.props;
    return (
      <Container>
        <div className="Event">
          <p className="name">Event: {event.name}</p>
          <p className="date">Date: {event.local_date}</p>
          <p className="time">Time: {event.local_time}</p>
          <p className="attendeeNumber">
            Number Attending: {event.yes_rsvp_count}
          </p>
          <div className="expandedDetails">
            {this.state.showDetails && (
              <p
                className="description"
                dangerouslySetInnerHTML={{ __html: event.description }}
              />
            )}
          </div>
          <Button
            className="btn details-btn"
            onClick={() => this.handleShowDetails()}>
            More Details
          </Button>
        </div>
      </Container>
    );
  }
}

export default Event;
