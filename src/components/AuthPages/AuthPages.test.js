import React from 'react';
import { shallow, mount } from 'enzyme';
import { browserHistory } from 'react-router';

import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Navbar from './Navbar';

describe('Home', () => {
  it('should render a home card', () => {
    const wrapper = shallow(<Home  />);
    expect(wrapper.find('.Home').length).toBe(1)
  });

  it('should render a quote', () => {
    const wrapper = shallow(<Home  />);
    expect(wrapper.find('h3').length).toBe(1)
  });
});

describe('Login', () => {
  it('should render a login page', () => {
    const wrapper = shallow(<Login  />);
    expect(wrapper.find('.Login').length).toBe(1)
  });

  it('should render a login page with link to sign up', () => {
    const wrapper = shallow(<Login  />);
    expect(wrapper.find('Link').length).toBe(1)
  });

  it('should render a login page with button to fire function', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('button').length).toBe(1)
  });

  it.skip('should render a login page with button to fire function', () => {
    const mockFn = jest.fn();
    const wrapper = mount(<Login  />);
    console.log(wrapper.debug());
    wrapper.find('button').simulate('click');
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
describe('Signup', () => {
  it('should render a create account page', () => {
    const wrapper = shallow(<Signup  />);
    expect(wrapper.find('.create-account').length).toBe(1)
  });

  it('should render a signup page with link to login', () => {
    const wrapper = shallow(<Signup  />);
    expect(wrapper.find('Link').length).toBe(1)
  });

  it('should render a signup page with button to fire function', () => {
    const wrapper = shallow(<Signup />);
    expect(wrapper.find('button').length).toBe(1)
  });

  it.skip('should render a login page with button to fire function', () => {
    const mockFn = jest.fn();
    const wrapper = mount(<Signup  />);
    console.log(wrapper.debug());
    wrapper.find('button').simulate('click');
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});

describe('Navbar', () => {
  it('should render a navbar ', () => {
    const wrapper = shallow(<Navbar  />);
    expect(wrapper.find('.Navbar').length).toBe(1)
  });

  it('should render a link to home', () => {
    const wrapper = mount(<Navbar  />);
    console.log(wrapper.debug());
    expect(wrapper.find('.home-link').length).toBe(1)
  });

  it('should render a link to home', () => {
    const wrapper = mount(<Navbar  />);
    console.log(wrapper.debug());
    expect(wrapper.find('Link').length).toBe(3)
  });

});
