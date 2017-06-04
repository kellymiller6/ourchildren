import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import ChildrenPageContainer from '../../containers/ChildrenPageContainer';
import ChildrenPage from './ChildrenPage';

const state = {};
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares)();
console.log(mockStore);
const setup = () => {
  const Container = mount(<Provider store={mockStore}><ChildrenPageContainer /></Provider>);
  const Component = Container.find(ChildrenPage);

  return { Container, Component }
};

describe('ChildrenPageContainer', () => {
  const { Container, Component } = setup();

  it('should pass the appropriate props from state', () => {
    expect(Object.keys(Component.props())).toContain('children');
  });

});

describe('Children Page component', () => {
  const { Component } = setup();

  it('should render', () => {
    expect(Component.find('.ChildrenPage').length).toBe(1)
  });

  it('should not render any cards with default props', () => {
    expect(Component.find('Cards').length).toBe(0)
  });

});
