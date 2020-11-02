import * as React from 'react';
import Footer from "../Footer.tsx"
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe("We test the innerHTML of the Footer", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Footer />);
  });
  test("Snapshot footer", () => {
    //It works
 expect(toJson(wrapper)).toMatchSnapshot();
});
});
