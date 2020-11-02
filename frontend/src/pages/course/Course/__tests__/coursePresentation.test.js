import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import CoursePresentation from "../CoursePresentation.tsx";
import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);
describe("We test the innerHTML of the CoursePresentation", () => {
  let wrapper;
  let store;
  beforeEach(() => {
    store = mockStore({
      course: "AET",
  article: { title: "random", content: "random", image: "random", alt: "random", },
  details: {
    description: {
      title: "random",
      img: "random",
      alt: "random",
      generalThems: { question: "random", answer: "random", list: "random", }
    },
    curriculum: {
      section: "random",
      detail: { title: "random", content: "random", },
    },
    faq: { question: "random", answer: "random",},
    announcement: {
      mainTitle: "random",
      details: { title: "random",announcement: "random",}
    }
  }
    });
    wrapper = shallow(<Provider store={store}> 
    <CoursePresentation  courseIndice={"AET"}  />
    </Provider>);
      });
  test("Snapshot CoursePresentation ", () => {
    //It works
 expect(toJson(wrapper)).toMatchSnapshot();
});
});