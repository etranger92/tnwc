import * as React from 'react';
import Cover from "../Cover.tsx"
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe("We test the innerHTML of the cover", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Cover />);
  });
  test("Snapshot cover", () => {
    //It works
 expect(toJson(wrapper)).toMatchSnapshot();
});
});
