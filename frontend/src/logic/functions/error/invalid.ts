const ERROR_MESSAGE = {
  defaultFormat: "Use only characters such letters.",
  password: "Minimum 8 character with a capital letter and a number.",
  alreadyTaken: "The name is already taken.",
  email: "Email invalid",
  noSuchUser: "This user is not registered.",
  address: "Invalid address format",
};
const throwErrorMessage = (
  message: string,
  location: HTMLParagraphElement
): void => {
  location.textContent = message;
  location.style.display = "block";
  return;
};
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const displayError = (input: any, type: string, nameClass: string): void =>
  input.setAttribute(type, nameClass);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const invalidInput = (input: any, type: string) => {
  input.setAttribute("data-state", "invalid");
  input.previousElementSibling.setAttribute("data-state", "invalid");
  switch (type) {
    case "text":
      throwErrorMessage(
        ERROR_MESSAGE.defaultFormat,
        input.parentElement.nextElementSibling
      );
      return;
    case "email":
      throwErrorMessage(
        ERROR_MESSAGE.email,
        input.parentElement.nextElementSibling
      );
      return;
    case "address":
      throwErrorMessage(
        ERROR_MESSAGE.address,
        input.parentElement.nextElementSibling
      );
      return;
    case "password":
      throwErrorMessage(
        ERROR_MESSAGE.password,
        input.parentElement.nextElementSibling
      );
      return;
    case "noUser":
      throwErrorMessage(
        ERROR_MESSAGE.noSuchUser,
        input.parentElement.nextElementSibling
      );
      return;
    default:
      return;
  }
};
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const clearErrorNotif = (input: any) => {
  input.setAttribute("data-state", "");
  input.previousElementSibling.setAttribute("data-state", "");
  if (input.parentElement.nextElementSibling)
    input.parentElement.nextElementSibling.innerText = "";
  return;
};

export {
  ERROR_MESSAGE,
  throwErrorMessage,
  clearErrorNotif,
  invalidInput,
  displayError,
};
