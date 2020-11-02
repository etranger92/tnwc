import React from "react";
import {mount} from "enzyme";
import NavBar from "../NavBar.tsx"
import { BrowserRouter as Router } from 'react-router-dom';


describe("We test the innerHTML of NavBar", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Router>
        <NavBar />
    </Router>);
  });
  test("Snapshot navBar", () => {
    expect(wrapper).toMatchSnapshot();
  });
});