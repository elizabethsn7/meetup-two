import React from 'react';
import { shallow, mount } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => {}} />);
  });

  test('render text box input', () => {
    expect(NumberOfEventsWrapper.find('.NumberOfEvents')).toHaveLength(1);
  });

  test('render input', () => {
    expect(NumberOfEventsWrapper.find('input')).toHaveLength(1);
  });

  test('test number state', () => {
    expect(NumberOfEventsWrapper.state('number')).toBeDefined();
  });

  test('render number input correctly', () => {
    const number = NumberOfEventsWrapper.state('number');
    expect(NumberOfEventsWrapper.find('.eventsShown').prop('value')).toBe(
      number
    );
  });

  test('change state when input changes', () => {
    const eventObject = { target: { value: 32 } };
    NumberOfEventsWrapper.find('.eventsShown').simulate('change', eventObject);
    expect(NumberOfEventsWrapper.state('number')).toBe(32);
  });
});
