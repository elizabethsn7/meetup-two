const mockEvents = {
  city: {
    id: 73301,
    city: 'Austin',
    lat: 30.22,
    lon: -97.75,
    state: 'TX',
    country: 'us',
    zip: '73301',
    member_count: 57163
  },
  events: [
    {
      created: 1568225882000,
      duration: 7200000,
      id: 'srrwhrybcdbhc',
      name: 'Tech Talk @ HEB',
      rsvp_limit: 100,
      date_in_series_pattern: false,
      status: 'upcoming',
      time: 1582677000000,
      local_date: '2020-02-25',
      local_time: '18:30',
      updated: 1581022079000,
      utc_offset: -21600000,
      waitlist_count: 0,
      yes_rsvp_count: 65,
      venue: {
        id: 26562919,
        name: '2416 E 6th St',
        lat: 30.259174346923828,
        lon: -97.71510314941406,
        repinned: true,
        address_1: '2416 E 6th St',
        city: 'Austin',
        country: 'us',
        localized_country_name: 'USA',
        zip: '78702',
        state: 'TX'
      },
      group: {
        created: 1370402035000,
        name: 'Women Who Code Austin',
        id: 8789492,
        join_mode: 'open',
        lat: 30.239999771118164,
        lon: -97.76000213623047,
        urlname: 'Women-Who-Code-Austin',
        who: 'Coders',
        localized_location: 'Austin, TX',
        state: 'TX',
        country: 'us',
        region: 'en_US',
        timezone: 'US/Central'
      },
      link:
        'https://www.meetup.com/Women-Who-Code-Austin/events/srrwhrybcdbhc/',
      description:
        "<p>Hey Coders,</p> <p>This month's tech talk is brought to you by HEB. We will have two speakers from HEB.</p> <p>Molly King: Testing Android Retrofit code with RxJava2<br/>RxJava allows us to write clean, easy to read networking code using the Retrofit library. But how do we write unit tests for it? This talk will introduce some basic networking using RxJava and demonstrate how to write comprehensive unit tests for it, all in Kotlin!</p> <p>Beth Gilomen: It’s options all the way down<br/>Using recursive react components to render a nested menu options component</p>",
      visibility: 'public',
      member_pay_fee: false
    },
    {
      created: 1565051588000,
      duration: 9000000,
      id: 'kxtfgrybchbgb',
      name: 'Lightning Learning - Sponsored by uShip',
      rsvp_limit: 80,
      date_in_series_pattern: false,
      status: 'upcoming',
      time: 1588635000000,
      local_date: '2020-05-04',
      local_time: '18:30',
      updated: 1578362679000,
      utc_offset: -18000000,
      waitlist_count: 0,
      yes_rsvp_count: 3,
      venue: {
        id: 25168850,
        name: 'uShip Inc',
        lat: 30.254606246948242,
        lon: -97.74531555175781,
        repinned: true,
        address_1: '205 E Riverside Dr',
        city: 'Austin',
        country: 'US',
        localized_country_name: 'USA'
      },
      group: {
        created: 1370402035000,
        name: 'Women Who Code Austin',
        id: 8789492,
        join_mode: 'open',
        lat: 30.239999771118164,
        lon: -97.76000213623047,
        urlname: 'Women-Who-Code-Austin',
        who: 'Coders',
        localized_location: 'Austin, TX',
        state: 'TX',
        country: 'us',
        region: 'en_US',
        timezone: 'US/Central'
      },
      link:
        'https://www.meetup.com/Women-Who-Code-Austin/events/kxtfgrybchbgb/',
      description:
        '<p>Hey Coders,</p> <p>Tonight is our open lightning talks! Lightning talks will be 5-10 min on any topic pertaining to programming, technology, or your experience as a woman in technology.</p> <p>Beginning/Pre-Coders - we would love to hear about your foray into programming and some of the hurdles you have overcome.</p> <p>Experienced Coders - share about the cool things you have built or awesome tools you use.</p> <p>Anyone - share whatever knowledge you have! Each person brings a different perspective.</p> <p>The format will be flexible. You can RSVP or show up and see if any slots are available.</p> <p>Lightning Talk Signup<br/>Signup Here! </p> ',
      how_to_find_us:
        'Free parking in employee parking lot (ignore towing signs) to the west of  Thundercloud Subs (do not park at Thundercloud). We meet in the front classroom. Enter through the side door of the warehouse. Ring the buzzer.',
      visibility: 'public',
      member_pay_fee: false
    }
  ]
};

export { mockEvents };
