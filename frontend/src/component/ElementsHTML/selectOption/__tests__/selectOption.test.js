import * as React from 'react';
import SelectOption from "../SelectOption.tsx"
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe("We test the innerHTML of the SelectOption", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SelectOption/>);
  });
  test("Snapshot SelectOption", () => {
    //It works
 expect(toJson(wrapper)).toMatchSnapshot();

});
});
