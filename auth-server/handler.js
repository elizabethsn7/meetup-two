'use strict';

const axios = require('axios');

module.exports.getAccessToken = async event => {
  const MEETUP_OAUTH_URL =
    'https://secure.meetup.com/oauth2/access' +
    '?client_id=3jsm2toi92h8a08o038b2o1hh1' +
    '&client_secret=1s374a8lnj6eefv6v8u8ssllln' +
    '&grant_type=authorization_code' +
    '&redirect_uri=https://cors-anywhere.herokuapp.com/https://elizabethsn7.github.io/meetup-two/' +
    '&code=' +
    event.pathParameters.code;

  const info = await axios.post(MEETUP_OAUTH_URL);

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      access_token: info.data.access_token,
      refresh_token: info.data.refresh_token
    })
  };
};

module.exports.refreshAccessToken = async event => {
  const MEETUP_OAUTH_URL =
    'https://secure.meetup.com/oauth2/access' +
    '?client_id=3jsm2toi92h8a08o038b2o1hh1' +
    '&client_secret=1s374a8lnj6eefv6v8u8ssllln' +
    '&grant_type=refresh_token' +
    '&refresh_token=' +
    event.pathParameters.refresh_token;

  const info = await axios.post(MEETUP_OAUTH_URL);

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin':
        'https://elizabethsn7.github.io/meetup-two/'
    },
    body: JSON.stringify({
      access_token: info.data.access_token,
      refresh_token: info.data.refresh_token
    })
  };
};
