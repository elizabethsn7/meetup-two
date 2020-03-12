import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from 'recharts';

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
  getRSVPData = () => {
    let rsvpCount = this.props.event.yes_rsvp_count;
    let rsvpLimit = this.props.event.rsvp_limit - rsvpCount;

    return [
      { name: 'Reservations', value: rsvpCount },
      { name: 'Open Spots', value: rsvpLimit }
    ];
  };

  render() {
    const { event } = this.props;
    let colors = ['#e63070', '#ff8a00'];
    return (
      <Container>
        <div className="Event">
          <div className="detailsOverview">
            <p className="eventName">Event: {event.name}</p>
            <p className="date">Date: {event.local_date}</p>
            <p className="time">Time: {event.local_time}</p>

            <Button
              className="btn details-btn"
              onClick={() => this.handleShowDetails()}>
              More Details
            </Button>
          </div>
          {this.state.showDetails && (
            <div className="expandedDetails">
              <p
                className="description"
                dangerouslySetInnerHTML={{ __html: event.description }}
              />
              <p className="rsvpCount">
                Number Attending: {event.yes_rsvp_count}
              </p>
              <p className="rsvpLimit">RSVP Limit: {event.rsvp_limit}</p>
              <ResponsiveContainer height={400}>
                <PieChart width={200} height={200}>
                  <Pie
                    data={this.getRSVPData()}
                    cx={200}
                    cy={200}
                    outerRadius={80}
                    fill="#82ca9d">
                    {this.getRSVPData().map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={colors[index]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>
      </Container>
    );
  }
}

export default Event;
