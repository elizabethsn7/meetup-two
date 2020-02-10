const mockEvents = {
  city: {
    id: 1007700,
    city: 'München',
    lat: 48.14,
    lon: 11.58,
    state: '',
    country: 'de',
    zip: 'meetup3',
    member_count: 1257
  },
  events: [
    {
      created: 1579078350000,
      duration: 7200000,
      id: '267929208',
      name: '#21 UX & Product Meetup',
      rsvp_limit: 90,
      date_in_series_pattern: false,
      status: 'upcoming',
      time: 1582221600000,
      local_date: '2020-02-20',
      local_time: '19:00',
      rsvp_open_offset: 'PT178H',
      rsvp_close_offset: 'PT48H',
      updated: 1580727076000,
      utc_offset: 3600000,
      waitlist_count: 0,
      yes_rsvp_count: 2,
      venue: {
        id: 26112492,
        name: 'Google',
        lat: 48.14295959472656,
        lon: 11.54114818572998,
        repinned: true,
        address_1: 'Erika-Mann-Straße 33',
        city: 'München',
        country: 'de',
        localized_country_name: 'Germany'
      },
      group: {
        created: 1480715319000,
        name: 'UX & Product Munich',
        id: 21366293,
        join_mode: 'approval',
        lat: 48.13999938964844,
        lon: 11.579999923706055,
        urlname: 'MunichUX',
        who: 'MUXer',
        localized_location: 'München, Germany',
        state: '',
        country: 'de',
        region: 'en_US',
        timezone: 'Europe/Berlin'
      },
      link: 'https://www.meetup.com/MunichUX/events/267929208/',
      description:
        '<p>Hey UX &amp; Product friends!</p> <p>The next meetup is just around the corner!<br/>You can look forward to these talks:</p>',
      visibility: 'public',
      member_pay_fee: false
    },
    {
      created: 1579507148000,
      duration: 10800000,
      id: '268054328',
      name: 'Flutter Stammtisch',
      rsvp_limit: 20,
      date_in_series_pattern: false,
      status: 'upcoming',
      time: 1585245600000,
      local_date: '2020-03-26',
      local_time: '19:00',
      updated: 1579699457000,
      utc_offset: 3600000,
      waitlist_count: 0,
      yes_rsvp_count: 13,
      venue: {
        id: 26348691,
        name: 'Augustiner-Keller',
        lat: 48.143524169921875,
        lon: 11.551462173461914,
        repinned: true,
        address_1: 'Arnulfstraße 52',
        city: 'München',
        country: 'de',
        localized_country_name: 'Germany'
      },
      group: {
        created: 1543101111000,
        name: 'Flutter Munich',
        id: 30587470,
        join_mode: 'approval',
        lat: 48.13999938964844,
        lon: 11.579999923706055,
        urlname: 'Flutter-Munich',
        who: 'Members',
        localized_location: 'München, Germany',
        state: '',
        country: 'de',
        region: 'en_US',
        timezone: 'Europe/Berlin'
      },
      link: 'https://www.meetup.com/Flutter-Munich/events/268054328/',
      description:
        '<p>Feel free to buy any beverages or meals, the restaurant has non-alcoholic beverages, and vegetarian meals, too.</p> ',
      visibility: 'public',
      member_pay_fee: false
    }
  ]
};

export { mockEvents };
