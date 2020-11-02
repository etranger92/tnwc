import React from "react";
import Presentation from "../Presentation.tsx";
import { shallow } from "enzyme";
import toJson from 'enzyme-to-json';

describe("Presentation", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
 <Presentation/>

    );
  });
  test("Snapshot: Presentation", () => {
  expect(toJson(wrapper)).toMatchSnapshot();
  });
});
