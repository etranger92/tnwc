import * as React from 'react';
import AnnounceOne from "../Announce.tsx";
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

describe("We test the innerHTML of the AnnounceOne", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<AnnounceOne />);
    });
  test("Snapshot AnnounceOne ", () => {
    //It works
 expect(toJson(wrapper)).toMatchSnapshot();
  });
});
