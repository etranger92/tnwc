import * as React from 'react';
import MenuFeatureCourse from "../MenuCourse.tsx"
//import { BrowserRouter as Router } from "react-router-dom";
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe("We test the html of Navigation", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(

        <MenuFeatureCourse />

    );
  });
  test("Snapshot menu", () => {
  expect(toJson(wrapper)).toMatchSnapshot();
  });})