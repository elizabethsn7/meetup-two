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
      created: 1578477368000,
      duration: 10800000,
      id: '267743487',
      name: 'AWS UG February Event',
      rsvp_limit: 200,
      date_in_series_pattern: false,
      status: 'upcoming',
      time: 1582047000000,
      local_date: '2020-02-18',
      local_time: '18:30',
      updated: 1581348429000,
      utc_offset: 3600000,
      waitlist_count: 0,
      yes_rsvp_count: 199,
      venue: {
        id: 26166503,
        name: 'MAN Truck & Bus / RIO',
        lat: 48.180694580078125,
        lon: 11.596031188964844,
        repinned: true,
        address_1: 'Oskar-Schlemmer-Str. 19-21',
        city: 'München',
        country: 'de',
        localized_country_name: 'Germany'
      },
      group: {
        created: 1400514197000,
        name: 'Munich AWS User Group',
        id: 14546712,
        join_mode: 'open',
        lat: 48.13999938964844,
        lon: 11.579999923706055,
        urlname: 'AWS-Munich',
        who: 'Members',
        localized_location: 'München, Germany',
        state: '',
        country: 'de',
        region: 'en_US',
        timezone: 'Europe/Berlin'
      },
      link: 'https://www.meetup.com/AWS-Munich/events/267743487/',
      description:
        "It's only the second month of they year but the usergroup is already back at full throttle - awesome location and great (international) speaker! We're very happy about the sponsorship of RIO The Logistic Flow, the digital brand of TRATON GROUP. They will provide their offices, food and drinks for us.AGENDA: 18:30 - Doors open, networking, drinks, food9:00 - Markus (Team Internet AG) - Recent AWS announcements 19:30 - Massimo Re Ferre’ (AWS Principal Developer Advocate) - Container on AWS - state of the union In this highly interactive session we will cover, with a mix of slides and demos, the latest updates of the container related services AWS unveiled at re:Invent 2019. ",
      how_to_find_us: 'Canteen, Walter-Gropius-Str. 19',
      visibility: 'public',
      member_pay_fee: false
    },
    {
      created: 1581354000000,
      duration: 10800000,
      id: '268607198',
      name: 'Scaling Transformation by Design @ Nokia',
      rsvp_limit: 1,
      date_in_series_pattern: false,
      status: 'upcoming',
      time: 1582219800000,
      local_date: '2020-02-20',
      local_time: '18:30',
      updated: 1581354337000,
      utc_offset: 3600000,
      waitlist_count: 4,
      yes_rsvp_count: 1,
      venue: {
        id: 26854977,
        name: 'NOKIA Digital Creativity Lab',
        lat: 48.11524200439453,
        lon: 11.5970458984375,
        repinned: false,
        address_1: 'Werinherstraße 91',
        city: 'München',
        country: 'de',
        localized_country_name: 'Germany'
      },
      group: {
        created: 1559166585000,
        name: 'Transformation by Design',
        id: 32061396,
        join_mode: 'open',
        lat: 48.13999938964844,
        lon: 11.579999923706055,
        urlname: 'Transformation-by-Design',
        who: 'Members',
        localized_location: 'München, Germany',
        state: '',
        country: 'de',
        region: 'en_US',
        timezone: 'Europe/Berlin'
      },
      link: 'https://www.meetup.com/Transformation-by-Design/events/268607198/',
      description:
        '+++ please register via Design Thinking München: Scaling Transformation by Design. Over the last years, design &amp; design thinking have become the key success factor for many large, global companies, as society has moved from being product-driven to user-centered, from “technology first” to “human first”, from “making people want things” to “making things people want”. Studies have shown that design-driven companies outperform considerably in terms of revenue growth (by 100%+) and Total Return to Shareholder (70%+), the return on investment can be as much as 300%. With this in mind, we decided to develop, test and incubate this approach in Nokia Transformation. We have been doing this during the last 1.5 years, under the name “Transformation by Design”, gathering learnings along the way from more than 70 design projects and sprints, on topics ranging from product innovation, to strategy, to organization redesign.',
      visibility: 'public',
      member_pay_fee: false
    }
  ]
};

export { mockEvents };
