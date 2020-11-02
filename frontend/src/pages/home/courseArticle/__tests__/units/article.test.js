import React from 'react';
import { shallow } from 'enzyme';
import ArticleCourse from "../../ArticleCourse.tsx"
import toJson from 'enzyme-to-json';
import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';
 
const mockStore = configureStore([]);
describe('We test the innerHTML of the component ArticleCourse ', () => {
  let wrapper;
  let store;
 
  beforeEach(() => {
    store = mockStore({
    course:"AET",
    article: { title: "Random", content: "random", image: "random", alt: "random" }
    });
  });
  test('renders Inscription', () => {
  wrapper = shallow(
   <Provider store={store}> 
   <ArticleCourse />
   </Provider>);
  expect(toJson(wrapper)).toMatchSnapshot();
  });
});
