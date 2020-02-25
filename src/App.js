import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents } from './api';
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
      <div>
        <Navbar bg="light" className="brand">
          Meetup Api
        </Navbar>
        <div className="App container-background">
          <CitySearch updateEvents={this.updateEvents} />
          <NumberOfEvents updateEvents={this.updateEvents} />
          <EventList events={this.state.events} />
        </div>
      </div>
    );
  }
}

export default App;
