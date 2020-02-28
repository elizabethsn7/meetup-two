import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';
import { mockEvents } from '../mock-events';
import CitySearch from '../CitySearch';

const feature = loadFeature('./src/features/filterEventsByCity.feature');

defineFeature(feature, test => {
  test('By default, when user hasn’t searched for a city, show upcoming events based on the user’s location', ({
    given,
    when,
    then
  }) => {
    // This won’t require any code as nothing has happened yet (the user hasn’t searched for anything), so you can leave it empty.
    given('user hasn’t searched for any city', () => {});

    // The when step is where you need to specify the main action of the test. In this test, the action is “the user opens the app.” This is a very simple action—the user simply opens the app
    let AppWrapper;
    when('the user opens the app', () => {
      AppWrapper = mount(<App />);
    });

    then(
      'the user should see the list of upcoming events from their location',
      () => {
        // the act of getting the list of events is an asynchronous action, so the first thing you need to do is update the App component using AppWrapper.update();—without this, none of the changes will be displayed on the App component.
        AppWrapper.update();
        expect(AppWrapper.find('.Event')).toHaveLength(
          mockEvents.events.length
        );
      }
    );
  });

  test('User should see a list of suggestions when they search for a city', ({
    given,
    when,
    then
  }) => {
    //you can use shallow() instead of mount() because you don’t need to render any of CitySearch’s children
    let CitySearchWrapper;
    given('the main page is open', () => {
      CitySearchWrapper = shallow(<CitySearch />);
    });
    // using the simulate() function, similar to what you did for the “change state when text input changes” test
    when('user starts typing in the city textbox', () => {
      CitySearchWrapper.find('.city').simulate('change', {
        target: { value: 'Munich' }
      });
    });

    then(
      'the user should receive a list of cities (suggestions) that match what they’ve typed',
      () => {
        expect(CitySearchWrapper.find('.suggestions li')).toHaveLength(2);
      }
    );
  });

  test('User can select a city from the suggested list', ({
    given,
    and,
    when,
    then
  }) => {
    let AppWrapper;
    given('user was typing “Munich” in the city textbox', () => {
      AppWrapper = mount(<App />);
      AppWrapper.find('.city').simulate('change', {
        target: { value: 'Munich' }
      });
    });
    and('the list of suggested cities is showing', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.suggestions li')).toHaveLength(2);
    });

    when(
      'the user selects a city (e.g., “Munich, Germany”) from the list',
      () => {
        AppWrapper.find('.suggestions li')
          .at(0)
          .simulate('click');
      }
    );
    //write an expect() function that checks whether the query state of CitySearch is “Munich, Germany”
    then(
      'their city should be changed to that city (i.e., “Munich, Germany”)',
      () => {
        //You can access CitySearch because you used the full rendering API to mount the App component (meaning that each of its children were rendered, as well). Then, it’s as simple as using a toBe() matcher
        const CitySearchWrapper = AppWrapper.find(CitySearch);
        expect(CitySearchWrapper.state('query')).toBe('Munich, Germany');
      }
    );

    and(
      'the user should receive a list of upcoming events in that city',
      () => {
        expect(AppWrapper.find('.Event')).toHaveLength(
          mockEvents.events.length
        );
      }
    );
  });
});
