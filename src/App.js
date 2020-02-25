import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents } from './api';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

class App extends Component {
  state = {
    events: [],
    page: null,
    lat: null,
    lon: null
  };
  componentDidMount() {
    this.updateEvents();
  }
  updateEvents = (lat, lon, page) => {
    if (lat && lon) {
      getEvents(lat, lon, this.state.page).then(events =>
        this.setState({ events, lat, lon })
      );
    } else if (page) {
      getEvents(this.state.lat, this.state.lon, page).then(events =>
        this.setState({ events, page })
      );
    } else {
      getEvents(this.state.lat, this.state.lon, this.state.page).then(events =>
        this.setState({ events })
      );
    }
  };

  render() {
    return (
      <div className="App">
        <Navbar className="brand">Meetup Api</Navbar>
        <Container>
          <CitySearch updateEvents={this.updateEvents} />
          <NumberOfEvents updateEvents={this.updateEvents}>
            <p>"How many events would you like to see?"</p>
          </NumberOfEvents>
          <EventList events={this.state.events} />
        </Container>
      </div>
    );
  }
}

export default App;
