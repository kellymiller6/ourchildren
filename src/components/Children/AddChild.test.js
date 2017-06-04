import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import AddChildContainer from '../../containers/AddChildContainer';
import AddChild from './AddChild';

const state = {};
const middlewares = [thunk];

const mockStore = configureMockStore(middlewares)();

const setup = () => {
  const Container = mount(<Provider store={mockStore}><AddChildContainer /></Provider>);
  const Component = Container.find(AddChild);

  return { Container, Component }
};

describe('AddChildContainer', () => {
  const { Container, Component } = setup();

  it('should pass the appropriate props from state', () => {
    expect(Object.keys(Component.props())).toContain('children');
  });

  it('should pass down the correct actions as props', () => {
    expect(Object.keys(Component.props())).toContain('addChild');
  });
});

describe('AddChild component', () => {
  const { Component } = setup();

  it('should begin with default state', () => {
    expect(Component.node.state).toEqual({
      name: '',
      Birthday:'',
      Arrival:'',
      Insurance:'',
      Worker_Name: '',
      Worker_Number: '',
      Worker_Email: ''
    });
  });

  it('should alter state when values added to input', () => {
    const nameInput = Component.find('.name');
    nameInput.simulate('change', {target: {value: 'kelly'}});



    expect(Component.node.state).toEqual({
      name: 'kelly',
      Birthday:'',
      Arrival:'',
      Insurance:'',
      Worker_Name: '',
      Worker_Number: '',
      Worker_Email: ''
    });
  });
});
