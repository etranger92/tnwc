import * as React from 'react';
import Loader from "../Loader.tsx"
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe("We test the innerHTML of the Loader", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Loader/>);
  });
  test("Snapshot Loader", () => {
    //It works
 expect(toJson(wrapper)).toMatchSnapshot();

});
});
