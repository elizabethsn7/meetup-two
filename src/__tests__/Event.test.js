import React from 'react';
import { shallow } from 'enzyme';

import Event from '../Event';

describe('<Event /> component', () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(
      <Event
        event={
          ({
            created: 1580609316000,
            duration: 1800000,
            id: '268389563',
            name: 'Empire Life Online Business Q & A Session',
            date_in_series_pattern: false,
            status: 'upcoming',
            time: 1581364800000,
            local_date: '2020-02-10',
            local_time: '14:00',
            updated: 1580609316000,
            utc_offset: -21600000,
            waitlist_count: 0,
            yes_rsvp_count: 2
          },
          {
            group: {
              created: 1424387077000,
              name: "Austin's Women in Business",
              id: 18447044,
              join_mode: 'open',
              lat: 30.299999237060547,
              lon: -97.80999755859375,
              urlname: 'Austin-Women-in-Business-Group',
              who: 'Business Mogulettes',
              localized_location: 'Austin, TX',
              state: 'TX',
              country: 'us',
              region: 'en_US',
              timezone: 'US/Central'
            }
          })
        }
      />
    );
  });

  test('see if component is rendered', () => {
    expect(EventWrapper).toHaveLength(1);
  });

  test('render div for details', () => {
    expect(EventWrapper.find('.Event')).toHaveLength(1);
  });

  test('test detailsOverview exist ', () => {
    expect(
      EventWrapper.find('.Event .detailsOverview').children()
    ).toHaveLength(5);
  });

  test('render detailsOverview', () => {
    EventWrapper.setState({
      showDetails: true
    });
    expect(EventWrapper.find('.expandedDetails')).toHaveLength(1);
  });

  test('clicking on button will show details', () => {
    EventWrapper.setState({
      showDetails: false
    });
    EventWrapper.find('.detailsOverview button').simulate('click');
    expect(EventWrapper.state('showDetails')).toBe(true);
  });

  test('render event mock data as state', () => {
    EventWrapper.setState({});
  });
});
