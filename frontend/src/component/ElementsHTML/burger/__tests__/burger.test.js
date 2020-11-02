import * as React from 'react';
import Burger from "../Burger.tsx"
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

describe("We test the innerHTML of the burger", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Burger />);
  });
  test("Snapshot burger ", () => {
    //It works
 expect(toJson(wrapper)).toMatchSnapshot();
  });
  test("burger style css", () => {
    //it doesn't work
  wrapper.setProps({ isItClicked: false });
  expect(wrapper.find("#burger").getDOMNode()).not.toHaveStyle('position: absolute')
  }); 
  test("burger mutes to a cross by adding 'cross class' ", () => {
  wrapper.setProps({ isItClicked: true });
  expect(wrapper.find("#burger").getDOMNode()).toHaveClass("cross");
  }); 
  });
