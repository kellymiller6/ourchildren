import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import AddWorkerContainer from '../../containers/AddWorkerContainer';
import AddWorker from './AddWorker';

const state = {};
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares)();
const setup = () => {
  const Container = mount(<Provider store={mockStore}><AddWorkerContainer /></Provider>);
  const Component = Container.find(AddWorker);

  return { Container, Component }
};

describe('AddWorkerContainer', () => {
  const { Container, Component } = setup();

  it('should pass the appropriate props from state', () => {
    expect(Object.keys(Component.props())).toContain('workers');
  });

  it('should pass down the correct actions as props', () => {
    expect(Object.keys(Component.props())).toContain('addWorker');
  });
});

describe('AddWorker component', () => {
  const { Component } = setup();

  it('should begin with default state', () => {
    expect(Component.node.state).toEqual({
      name: '',
      Phone:'',
      Email:'',
      Type:''
    });
  });

  it('should alter state when values added to input', () => {
    const nameInput = Component.find('.name');
    nameInput.simulate('change', {target: {value: 'kelly'}});

    expect(Component.node.state).toEqual({
      name: 'kelly',
      Phone:'',
      Email:'',
      Type:''
    });
  });
});
