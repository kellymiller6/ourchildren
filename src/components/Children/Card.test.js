import React from 'react';
import { shallow, mount } from 'enzyme';
import { browserHistory } from 'react-router';

import Card from './Card';
// import { addFavorite, fetchFavorites, deleteFavorite} from '../../reducers/index.js'

describe('Card', () => {
  const sitter = {
      name: 'Susan',
      sitterNumber:'',
      sitterEmail:''
    }

  const child =  {
    name: 'Julie',
    childBirthday:'',
    childArrivalDate:'',
    childInsurance:'',
  }

  const worker = {
    name: 'fred',
    workerNumber:'',
    workerEmail:'',
    workerType:'foster'
  }


  it('should render a sitter card', () => {
    const wrapper = shallow(<Card objInfo={sitter} />);

    expect(wrapper.find('.card-name').length).toBe(1)
    expect(wrapper.find('.card-keys').length).toBe(2)
    expect(wrapper.find('.card-name').text()).toBe('Susan')
  });

  it('should render a child card', () => {
    const wrapper = shallow(<Card objInfo={child} />);

    expect(wrapper.find('.card-name').length).toBe(1)
    expect(wrapper.find('.card-keys').length).toBe(3)
    expect(wrapper.find('.card-name').text()).toBe('Julie')
  });

  it('should render a worker card', () => {
    const wrapper = shallow(<Card objInfo={worker} />);

    expect(wrapper.find('.card-name').length).toBe(1)
    expect(wrapper.find('.card-keys').length).toBe(3)
    expect(wrapper.find('.card-name').text()).toBe('fred')
  });

});
