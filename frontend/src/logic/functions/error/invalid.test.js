/**
 * @jest-environment jsdom
 */

import {
    ERROR_MESSAGE,
    throwErrorMessage,
    invalidInput,
} from "./invalid.ts"

describe("Do we display an error to the user and is it in accordance with the issue ?", () => {
    it("Function 'throwErrorMessage' should render an error message at the location given", () => {
        document.body.innerHTML = `
    <p id="error-message"> </p> `;
        let errorMessageLocation = document.getElementById("error-message");
        throwErrorMessage("some error message", errorMessageLocation);
        let valueDisplayError = errorMessageLocation.textContent;
        expect(valueDisplayError).toBe("some error message");
        //Would like to check the css as well. But without peppeteer I don't know yet.
    })

    it("should display the ERROR_MESSAGE.defaultFormat error for input:name", () => {
        document.body.innerHTML = ` 
        <div> 
        <label for="name"> 
        <span data-state=""> <em> name </em></span>
        <input name="name" type="text" id="name" data-state=""
        class="input_account" value="" required>
        </label> 
        <p id="error-message"> </p>
        </div>`;
        let inputName = document.getElementById("name");
        let errorMessageLocation = document.getElementById("error-message");
        invalidInput(inputName, "text");
        let valueDisplayError = errorMessageLocation.textContent;
        expect(valueDisplayError).toBe(ERROR_MESSAGE.defaultFormat)
    })
});