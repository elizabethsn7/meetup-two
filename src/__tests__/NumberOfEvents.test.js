import React from 'react';
import { shallow, mount } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test('render text box input', () => {
    expect(NumberOfEventsWrapper.find('.NumberOfEvents')).toHaveLength(1);
  });

  test('render input', () => {
    expect(NumberOfEventsWrapper.find('input')).toHaveLength(1);
  });

  test('test amount state', () => {
    expect(NumberOfEventsWrapper.state('amount')).toBeDefined();
  });

  test('render number input correctly', () => {
    const amount = NumberOfEventsWrapper.state('amount');
    expect(NumberOfEventsWrapper.find('.eventsShown').prop('value')).toBe(
      amount
    );
  });

  test('change state when input changes', () => {
    const eventObject = { target: { value: '32' } };
    NumberOfEventsWrapper.find('.eventsShown').simulate('change', eventObject);
    expect(NumberOfEventsWrapper.state('amount')).toBe('32');
  });
});
