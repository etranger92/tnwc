//import { TROLLEY } from './../../../frontend/src/Redux/Actions/Types/types';
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */
//import { serverGet } from '../sql/requestServer.js';

const REGEX = {
    defaultFormat: /^[a-zA-Z.-\/@\s]+$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    password: /^((?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])|(?=.*?[#?!@$%^&*-])).{8,45}/,
};
const TESTS = {
    result: true,
    inputs: [],
    init: () => (TESTS.result = true),
    //If there is an error message displayed it means the name is taken (check if the error mess is due to regex)
    isNameAvailable: (input: HTMLElement) => {
        TESTS.init();
        //To avoid "null" in typescript alert I put it in the if statement.
        if (input.nextElementSibling?.textContent) {
            TESTS.result = input.nextElementSibling.textContent.trim().length ? true : false;
        }

        return TESTS.result;
    },
    isFieldFilled: (input: string) => {
        TESTS.init();
        TESTS.result = input.trim().length ? true : false;
        return TESTS.result;
    },
    isEntryValid: (value: string, key: string) => {
        TESTS.init();
        switch (key) {
            case 'name':
            case 'surname':
            case 'text':
                TESTS.result = REGEX.defaultFormat.test(value);
                return TESTS.result;
            case 'password':
                TESTS.result = REGEX.password.test(value);
                return TESTS.result;
            case 'email':
                TESTS.result = REGEX.email.test(value);
                return TESTS.result;
            default:
                return TESTS.result;
        }
    },
};

export { TESTS, REGEX };
