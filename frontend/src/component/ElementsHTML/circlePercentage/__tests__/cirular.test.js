import * as React from 'react';
import CirclePercent from "../circular.tsx"
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe("We test the innerHTML of the circulePercent", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CirclePercent />);
  });
  test("Snapshot circulePercent ", () => {
    //It works
 expect(toJson(wrapper)).toMatchSnapshot();

});
});
