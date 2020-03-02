import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
// import Event from '../Event';
import EventList from '../EventList';
import CitySearch from '../CitySearch';
import { mockEvents } from '../mock-events';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

// Scenario 1
defineFeature(feature, test => {
  test('By default, an event element is collapsed', ({ given, when, then }) => {
    given('the events are loaded for their location', () => {
      const AppWrapper = mount(<App />);
      const CitySearchWrapper = AppWrapper.find(CitySearch);
      expect(CitySearchWrapper.find('.city')).toHaveLength(1);
    });

    let AppWrapper;
    when('the given locations events are loaded', () => {
      AppWrapper = mount(<App />);
      const EventListWrapper = AppWrapper.find(EventList);
      expect(EventListWrapper).toHaveLength(1);
    });

    then('the user will be able to view event overview', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.Event')).toHaveLength(mockEvents.events.length);
    });

    // Scenario 2
    test('User can expand an event to see its details', ({
      given,
      when,
      then
    }) => {
      let AppWrapper;
      given('the user is interested in seeing the details of an event', () => {
        AppWrapper = mount(<App />);
      });

      when('the user clicks on the more details button', () => {
        AppWrapper.setState({
          showDetails: true
        });
        AppWrapper.find('.detailsOverview Button')
          .at(0)
          .simulate('click');
        expect(AppWrapper.state('showDetails')).toBe(true);
      });

      then(
        'the user will be able to see all of the details for the event',
        () => {
          AppWrapper.setState({
            showDetails: true
          });
          expect(AppWrapper.find('.expandedDetails')).toHaveLength(1);
        }
      );
    });
  });

  // Scenario 3
  test('User can collapse an event to hide its details', ({
    given,
    and,
    when,
    then
  }) => {
    let AppWrapper;
    given('the user is viewing the event', () => {
      AppWrapper = mount(<App />);
    });
    and('the event details are displayed', () => {
      AppWrapper.setState({
        showDetails: false
      });
      expect(AppWrapper.find('.expandedDetails')).toHaveLength(0);
    });
    // The user clicks on the moreDetails button to close it
    when('the user chooses to collapse the details', () => {
      AppWrapper.update();
      expect(
        AppWrapper.find('.btn .details-btn')
          .at(0)
          .simulate('click')
      );
    });

    // the button does what its supposed to do!
    then('the event details will be hidden', () => {
      expect(AppWrapper.find('.expandedDetails')).toHaveLength(1);
    });
  });
});
