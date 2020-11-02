import * as React from 'react';
import BannerOne from "../BannerOne.tsx";
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe("We test the innerHTML of the BannerOne", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<BannerOne />);
    });
  test("Snapshot BannerOne ", () => {
    //It works
 expect(toJson(wrapper)).toMatchSnapshot();
  });

});

