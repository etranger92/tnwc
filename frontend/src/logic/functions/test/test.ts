const REGEX = {
  defaultFormat: /^[a-zA-Z.-\/@\s]+$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  address: /^[A-Za-z0-9'\.\-\s\,]+$/,
  password: /^((?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])|(?=.*?[#?!@$%^&*-])).{8,45}/,
  confirmPassword: document.getElementById("confirm-password"),
};
const TESTS: any = {
  result: true,
  inputs: [],
  init: () => (TESTS.result = true),
  //If there is an error message displayed it means the name is taken (check if the error mess is due to regex)
  isNameAvailable: (name: any) => {
    TESTS.init();
    TESTS.result = name.nextElementSibling.textContent.trim().length
      ? true
      : false;
    return TESTS.result;
  },
  isFieldFilled: (input: string) => {
    TESTS.init();
    TESTS.result = input.trim().length ? true : false;
    return TESTS.result;
  },
  isEntryValid: (value: string, type: string) => {
    TESTS.init();
    switch (type) {
      case "text":
        TESTS.result = REGEX.defaultFormat.test(value);
        return TESTS.result;
      case "password":
        TESTS.result = REGEX.password.test(value);
        return TESTS.result;
      case "email":
        TESTS.result = REGEX.email.test(value);
        return TESTS.result;
      default:
        return TESTS.result;
    }
  },
};
export { TESTS };
