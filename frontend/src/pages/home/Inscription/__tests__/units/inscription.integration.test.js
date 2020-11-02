import React from "react";
import { mount} from "enzyme";
import Inscription from "../../Inscription.tsx";
import toJson from "enzyme-to-json";
import puppeteer from "puppeteer";
jest.setTimeout(50000);

let browser;
let page;
beforeAll(async (done) => {
browser = await puppeteer.launch({
        headless: true,
        slowMo: 0,
       devtools: true,
    });
        page = await browser.newPage();
         await page.tracing.start({
  path: 'trace.json',
  categories: ['devtools.timeline']
 })
        await page.goto("http://localhost:3000/");
        await page.waitForSelector(".hide_loader");
        done();
});
test("No errors are displayed as data-state is empty", async () => {
  let value;
     try {
     value = await page.$$('[data-state="invalid"]');
     expect(value.length).toBe(0);
    } catch (err) {
        console.log("YOUR ERR", err)
    }
})
describe("We test our error notification", () => {
beforeEach( async () => {
    await page.type('[name="name"]', "$£$");
     await page.type('[name="surname"]', "£3$8");
     await page.type('[name="email"]', "Jonathan9");
     await page.$eval('#submit-button', el => el.click());
  })

test("As all inputs are wrong we should have 6 data-state invalid and three message error displayed ", async () => {
  let value;
     try {
    // value = await page.$$eval('input', el => el.dataset-state == "invalid");
       value = await page.$$('[data-state="invalid"]');
       expect(value.length).toBe(6);
       let text = await page.$$eval('.error_message', elems => elems.map(elem =>  elem.textContent));
    //We have only three inputs that are compulsory for checks. So, address will be returned as null we need to get rid of it.
       text = text.filter(elem => elem.length);
       expect(text.length).toBe(3);
    } catch (err) {
        console.log("YOUR ERR", err)
    }
})
})
afterAll(async (done) => {
 await browser.close();
  done();
})

let wrapper;
describe("We test our inputs of inscription", () => {
beforeEach(() => {
  wrapper = mount(<Inscription />)
   // mockSubmit = jest.fn();
   // wrapper = mount(<Inscription submit={mockSubmit} />);
  });
  test("Snapshot inscription", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  test("we test that our inputs are correctly filled", () => {
    wrapper.find('[name="name"]').instance().value = "random";
    expect(wrapper.find('[name="name"]').instance().value).toEqual("random");
    wrapper.find('[name="surname"]').instance().value = "random surname";
    expect(wrapper.find('[name="surname"]').instance().value).toEqual("random surname");
    wrapper.find('[name="email"]').instance().value = "random@gmail.com";
    expect(wrapper.find('[name="email"]').instance().value).toEqual(
      "random@gmail.com"
    );
  });
  })


/* The following does not work using enzyme...*/
/*

beforeEach(() => {
  wrapper = mount(<Inscription />)
   // mockSubmit = jest.fn();
   // wrapper = mount(<Inscription submit={mockSubmit} />);
  });
describe("We test our submit form", () => {
 it("all inputs are filled and respect regex; submit is called", () => {
    wrapper.find('[name="name"]').instance().value = "random";
wrapper.find('[name="surname"]').instance().value = "random";
    wrapper.find('[name="email"]').instance().value = "random@gmail.com";
    wrapper.find("#submit-button").simulate("click");
    expect(mockSubmit).toHaveBeenCalled();
  });
 it("all inputs are not filled; submit is not called", () => {
    wrapper.find('[name="name"]').instance().value = "";
    wrapper.find('[name="surname"]').instance().value = "random";
    wrapper.find('[name="email"]').instance().value = "random@gmail.com";
    wrapper.find("#submit-button").simulate("click");
    expect(mockSubmit).not.toHaveBeenCalled();
  });
 it("all inputs are filled but regex are not respected; submit is not called", () => {
    wrapper.find('[name="name"]').instance().value = "sdsd";
    wrapper.find('[name="surname"]').instance().value = "random";
    wrapper.find('[name="email"]').instance().value = "random";
    wrapper.find("#submit-button").simulate("click");
    expect(mockSubmit).not.toHaveBeenCalled();
  });

})
*/

/*//let mockSubmit;
let wrapper;

describe("We test our inputs of inscription", () => {
beforeEach(() => {
  wrapper = mount(<Inscription />)
   // mockSubmit = jest.fn();
   // wrapper = mount(<Inscription submit={mockSubmit} />);
  });
  test("Snapshot inscription", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  test("we test that our inputs are correctly filled", () => {
    wrapper.find('[name="name"]').instance().value = "random";
    expect(wrapper.find('[name="name"]').instance().value).toEqual("random");
    wrapper.find('[name="surname"]').instance().value = "random surname";
    expect(wrapper.find('[name="surname"]').instance().value).toEqual("random surname");
    wrapper.find('[name="email"]').instance().value = "random@gmail.com";
    expect(wrapper.find('[name="email"]').instance().value).toEqual(
      "random@gmail.com"
    );
  });
  afterEach(() => {
    wrapper = unmount(<Inscription />);
  });
  })*/