import { loadFeature, defineFeature } from 'jest-cucumber';
import { shallow, mount } from 'enzyme';
import React from 'react';
import NumberOfEvents from '../NumberOfEvents';
import App from '../App';
import { mockEvents } from '../mock-events';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

//Secenario 1
defineFeature(feature, test => {
  test('When user hasn’t specified a number, 32 is the default number', ({
    given,
    when,
    then
  }) => {
    let AppWrapper;
    given('a user did not specify a number of events', () => {
      AppWrapper = mount(<App />);
      const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
      expect(NumberOfEventsWrapper.state('number')).toBe(32);
    });

    when('the events for the specified city appear', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.Event')).toHaveLength(mockEvents.events.length);
    });

    let NumberOfEventsWrapper;
    then('the default amount of 32 events appears', () => {
      NumberOfEventsWrapper = shallow(<NumberOfEvents />);
      const number = NumberOfEventsWrapper.state('number');
      expect(NumberOfEventsWrapper.find('.eventsShown').prop('value')).toBe(
        number
      );
    });
  });

  // Scenario 2
  test('User can change the number of events they want to see', ({
    given,
    when,
    then
  }) => {
    let NumberOfEventsWrapper;
    given('the user has set the number of events', () => {
      NumberOfEventsWrapper = shallow(<NumberOfEvents />);
      expect(NumberOfEventsWrapper.find('input')).toHaveLength(1);
    });

    let AppWrapper;
    when('a number is entered', () => {
      AppWrapper = mount(<App />);
      AppWrapper.find('.eventsShown').simulate('change', {
        target: { value: 10 }
      });
    });
    then('the specified number of events will be shown', () => {
      expect(AppWrapper.state('page')).toBe(10);
    });
  });
});
