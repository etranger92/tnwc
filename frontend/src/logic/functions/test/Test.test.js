/**
 * @jest-environment jsdom
 */
//const puppeteer = require("puppeteer");
jest.setTimeout(50000);
import {
    TESTS
} from "./test.ts";


/*
it('should be true as user name "nabil" is already registered in the database', async () => {
    let result = await TEST_NAME("nabil");
    expect(result).toBe(true)
});

describe("Check TESTS.isNameAvailable whether there is an error message displayed", () => {
    it("should return true as there is an error message", () => {
        document.body.innerHTML = ` 
        <div> 
        <label for="name"> 
        <span data-state=""> <em> name </em></span>
        <input name="name" type="text" id="name" data-state=""
        class="input_account" value="Jonathan" required>
        </label> 
        <p id="error-message"> </p>
        </div>`;;
        let input = document.getElementById("name");
        expect(TESTS.isNameAvailable(input)).toBe(true);
    })
    it("should return false as there is no error message", () => {
        document.body.innerHTML = ` 
        <div> 
        <label for="name"> 
        <span data-state=""> <em> name </em></span>
        <input name="name" type="text" id="name" data-state=""
        class="input_account" value="" required>
        </label> 
        <p id="error-message"></p>
        </div>`;;
        let input = document.getElementById("name");
        expect(TESTS.isNameAvailable(input)).toBe(false);
    })
});
*/
describe("Check TESTS.isFieldFilled: if is there empty field or not", () => {
    it("should return false as one of inputs is empty (name)", () => {
        document.body.innerHTML = ` 
    <input name="name" type="text" id="name" data-state=""
    class="input_account" value="" required>
    <input name="password" type="password" id="password" data-state=""
    class="input_account password_view" value="Jonathan" required>
    <input name="password" type="password" id="passwordConfirm" data-state=""
    class="input_account password_view" value="Jonathan" required>
  `;
        let inputs = [...document.querySelectorAll("input")];
        let inputsValue = inputs.every(input =>
            TESTS.isFieldFilled(
                input.value)
        );

        expect(inputsValue).toBe(false);
    })
    it("should return true none of inputs are empty", () => {
        document.body.innerHTML = ` 
    <input name="name" type="text" id="name" data-state=""
    class="input_account" value="Jonathan" required>
    <input name="password" type="password" id="password" data-state=""
    class="input_account password_view" value="Jonathan" required>
    <input name="password" type="password" id="passwordConfirm" data-state=""
    class="input_account password_view" value="Jonathan" required>
  `;
        let inputs = [...document.querySelectorAll("input")];
        let inputsValue = inputs.every(input =>
            TESTS.isFieldFilled(
                input.value)
        );

        expect(inputsValue).toBe(true);
    })
});

describe("Check TESTS.isEntryValid: all regex tests before submiting", () => {
    it("(name=£ $$$)should be false", () => {
        expect(TESTS.isEntryValid("£ $$$", "text")).toBe(false);
    });
    it("(name=Jonathan)should be true", () => {
        expect(TESTS.isEntryValid("Jonathan", "text")).toBe(true);
    });
        it("(email=jdook@d.fr)should be false", () => {
        expect(TESTS.isEntryValid("jdook@ddsdsd.", "email")).toBe(false);
    });
       it("(email=jdook@hotmail.fr)should be true", () => {
        expect(TESTS.isEntryValid("jdook@d.fr", "email")).toBe(true);
    });
    
});

/* it("(password=jona£$$)should be false", () => {
        expect(TESTS.isEntryValid("jona£$$", "password")).toBe(false);
    });
    it(" (password=Jona3)should be false as length < 8", () => {
        expect(TESTS.isEntryValid("Jona3", "password")).toBe(false);
    });
    it(" (password=Jonathan)should be false as no number", () => {
        expect(TESTS.isEntryValid("Jonathan", "password")).toBe(false);
    });
    it("(password=Jonathan)should be true", () => {
        expect(TESTS.isEntryValid("Jonathan4", "password")).toBe(true);
    });
    it("(password=Jonathan9 & confirmPassword = jonathan9) should be true", () => {
        document.body.innerHTML = ` <input name="password" type="password" id="password" data-state=""
                       class="input_account password_view" value="Jonathan9" required>
                     `;

        expect(TESTS.isEntryValid("Jonathan9", "confirmPassword")).toBe(true);
    });
    it("(password=Jonathan9 & confirmPassword = jonathan9) should be true", () => {
        document.body.innerHTML = ` <input name="password" type="password" id="password" data-state=""
                       class="input_account password_view" value="Jonatha" required>
                     `;
        expect(TESTS.isEntryValid("Brandon", "confirmPassword")).toBe(false);
    });
    */