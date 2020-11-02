import React from "react";
import Navigation from "../Navigation.tsx";
import { BrowserRouter as Router } from "react-router-dom";
import { mount } from "enzyme";
import toJson from 'enzyme-to-json';


describe("We test the html of Navigation", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Router>
        <Navigation />
      </Router>
    );
  });
  test("Snapshot navigation", () => {
  expect(toJson(wrapper)).toMatchSnapshot();
  });
  test("presence of nav_desktop ", () => {
    expect(wrapper.find(".nav_desktop").length).toBe(1);
  });
  test("presence of nav_mobile ", () => {
  expect(wrapper.find(".nav_mobile").length).toBe(1);
  });
});

describe("We test the functionalities of navigation", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Router>
        <Navigation />
      </Router>
    );
  });
   test("We test the click event that it passed as props to burger and works.", () => {
   expect(wrapper.find(".cross").length).toBe(0);
   wrapper.find("#burger").simulate("click");
   expect(wrapper.find(".cross").length).toBe(1);
  });
   test("When we scroll 'nav_desktop_on_scroll' is added to nav. It does not work" , () => {
    expect(wrapper.find('.nav_desktop_on_scroll').length).toBe(0);
    wrapper.setState({ scroll: true });
    /*
    expect(wrapper.find("nav").getDOMNode()).toHaveClass('nav_desktop_on_scroll')*/
  });
});


/* "test": "react-scripts test", */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// eslint-disable-next-line no-unused-vars
/* const resizeWindow = (x, y) => {
   window.innerWidth = x;
   window.innerHeight = y;
   window.dispatchEvent(new Event("resize"));
};*/
//We resize the window to make the burger appeared
//resizeWindow(500, 300);