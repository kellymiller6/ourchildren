import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import ParentProfileContainer from '../../containers/ParentProfileContainer';
import ParentProfile from './ParentProfile';

const state = {};
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares)();
console.log(mockStore);
const setup = () => {
  const Container = mount(<Provider store={mockStore}><ParentProfileContainer /></Provider>);
  const Component = Container.find(ParentProfile);

  return { Container, Component }
};

describe('Parent Profile Container', () => {
  const { Container, Component } = setup();

  it('should pass the appropriate props from state', () => {
    expect(Object.keys(Component.props())).toContain('sitters', 'workers');
  });

});

describe('ParentProfile component', () => {
  const { Component } = setup();

  it('should render', () => {
    expect(Component.find('.ParentProfile').length).toBe(1)
  });

  it('should not render any cards with default props', () => {
    expect(Component.find('Cards').length).toBe(0)
  });

});
