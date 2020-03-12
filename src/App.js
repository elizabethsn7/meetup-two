import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents } from './api';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { WarningAlert } from './Alert';
import moment from 'moment';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

class App extends Component {
  state = {
    events: [],
    page: null,
    lat: null,
    lon: null,
    warningText: ''
  };
  componentDidMount() {
    this.updateEvents();
  }

  updateEvents = (lat, lon, page) => {
    if (navigator.onLine === false) {
      this.setState({
        warningText: 'You are no longer online'
      });
    } else {
      this.setState({ warningText: '' });
    }
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

  countEventsOnADate = date => {
    let count = 0;
    for (let i = 0; i < this.state.events.length; i += 1) {
      if (this.state.events[i].local_date === date) {
        count += 1;
      }
    }
    return count;
  };

  getData = () => {
    const next7Days = [];
    const currentDate = moment();
    for (let i = 0; i < 7; i += 1) {
      currentDate.add(1, 'days');
      const dateString = currentDate.format('YYYY-MM-DD');
      const count = this.countEventsOnADate(dateString);
      next7Days.push({ date: dateString, number: count }); // Add this date and number to the list
    }
    return next7Days;
  };

  render() {
    return (
      <div className="App">
        <Navbar className="brand">Meetup</Navbar>
        <WarningAlert text={this.state.warningText} />
        <Container>
          <CitySearch updateEvents={this.updateEvents} />
          <NumberOfEvents updateEvents={this.updateEvents} />
          <ResponsiveContainer height={400}>
            <ScatterChart
              width={800}
              height={400}
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20
              }}>
              <CartesianGrid />
              <XAxis type="category" dataKey="date" />
              {/* the YAxis represents the number of events on that date */}
              <YAxis
                type="number"
                dataKey="number"
                name="Number of Events"
                allowDecimals={false}
              />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Scatter data={this.getData()} fill="#8884d8" />
            </ScatterChart>
          </ResponsiveContainer>
          <EventList events={this.state.events} />
        </Container>
      </div>
    );
  }
}

export default App;
