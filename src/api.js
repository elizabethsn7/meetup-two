import { mockEvents } from './mock-events';
import axios from 'axios';

async function getAccessToken() {
  const accessToken = localStorage.getItem('access_token');

  if (!accessToken) {
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get('code');

    if (!code) {
      window.location.href =
        'https://secure.meetup.com/oauth2/authorize?client_id=3jsm2toi92h8a08o038b2o1hh1&response_type=code&redirect_uri=https://elizabethsn7.github.io/meetup/';
      return null;
    }
    return getOrRenewAccessToken('get', code);
  }
  const lastSavedTime = localStorage.getItem('last_saved_time');

  if (accessToken && Date.now() - lastSavedTime < 3600000) {
    return accessToken;
  }
  // If the access_token is expired, we try to renew it by using refresh_token
  const refreshToken = localStorage.getItem('refresh_token');
  return getOrRenewAccessToken('renew', refreshToken);
}
// (above code) the getOrRenewAccessToken() function is called twice—once with ('get', code) (further up in the “No Access Token Found in localStorage” section) and once with ('renew', refreshToken) as its parameters. This function will send a request to your Lambda functions, upon which it will receive the access and refresh tokens as a response.

async function getOrRenewAccessToken(type, key) {
  let url;
  if (type === 'get') {
    // Lambda endpoint to get token by code
    url =
      'https://fesvq75t1d.execute-api.us-west-1.amazonaws.com/dev/api/token/' +
      key;
  } else if (type === 'renew') {
    // Lambda endpoint to get token by refresh_token
    url =
      'https://fesvq75t1d.execute-api.us-west-1.amazonaws.com/dev/api/refreshtoken/' +
      key;
  }
  // Use Axios to make a GET request to the endpoint
  const tokenInfo = await axios.get(url);

  // Save tokens to localStorage together with a timestamp
  localStorage.setItem('access_token', tokenInfo.data.access_token);
  localStorage.setItem('refresh_token', tokenInfo.data.refresh_token);
  localStorage.setItem('last_saved_time', Date.now());

  // Return the access_token
  return tokenInfo.data.access_token;
}

async function getSuggestions(query) {
  if (window.location.href.startsWith('http://localhosr')) {
    return [
      {
        city: 'Munich',
        country: 'de',
        localized_country_name: 'Germany',
        name_string: 'Munich, Germany',
        zip: 'meetup3',
        lat: 48.14,
        lon: 11.58
      },
      {
        city: 'Munich',
        country: 'us',
        localized_country_name: 'USA',
        state: 'ND',
        name_string: 'Munich, North Dakota, USA',
        zip: '58352',
        lat: 48.66,
        lon: -98.85
      }
    ];
  }

  const token = await getAccessToken();
  if (token) {
    const url =
      'https://api.meetup.com/find/locations?&sign=true&photo-host=public&query=' +
      query +
      '&access_token=' +
      token;
    const result = await axios.get(url);
    return result.data;
  }
  return [];
}

async function getEvents(lat, lon) {
  if (window.location.href.startsWith('http://localhost')) {
    return mockEvents.events;
  }
  const token = await getAccessToken();
  if (token) {
    let url =
      'https://api.meetup.com/find/upcoming_events?&sign=true&photo-host=public' +
      '&access_token=' +
      token;
    // lat, lon is optional; if you have a lat and lon you can add them
    if (lat && lon) {
      url += '&lat=' + lat + '&lon=' + lon;
    }
    const result = await axios.get(url);
    return result.data.events;
  }
}

export { getSuggestions, getEvents };
