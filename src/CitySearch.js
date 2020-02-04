import React, { Component } from 'react';
import './App.css';

class CitySearch extends Component {
  render() {
    // textbox the user can use to search for a city, which should bring up a list of suggested events based on that city
    return (
      <div className="CitySearch">
        <input type="text" className="city" />
        <ul className="suggestions"></ul>
      </div>
    );
  }
}
export default CitySearch;
