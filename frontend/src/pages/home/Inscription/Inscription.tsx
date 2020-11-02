import React, { useEffect, useState } from "react";
import InscriptionError from "../../../component/Authentification/result/Error/Error";
import InscriptionSuccess from "../../../component/Authentification/result/Success/Success";
import IconHome from "../../../component/ElementsHTML/Icons/IconHome";
import Loader from "../../../component/ElementsHTML/loader/Loader";
import SelectOption from "../../../component/ElementsHTML/selectOption/SelectOption";
import TextArea from "../../../component/ElementsHTML/textArea/TextArea";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import {
  clearErrorNotif,
  invalidInput,
  displayError,
} from "../../../logic/functions/error/invalid";
import {
  serverGet,
  serverPost,
} from "../../../logic/functions/sql/requestServe";
import { TESTS } from "../../../logic/functions/test/test";
import "./inscription.css";
//const development = true;
// eslint-disable-next-line @typescript-eslint/no-var-requires
// eslint-disable-next-line @typescript-eslint/no-var-requires
/*type Tprops = {
  //Submit props for test purpose.
  submit?: any;
};*/

//const URL_ADDRESS = "https://www.thenorthwestcollege.com";
const URL_ADDRESS = "https://www.thenorthwestcollege.co.uk";
//const URL_ADDRESS = "http://localhost:3001";
const Inscription: React.FC /*<Tprops>*/ = (/*props*/) => {
  //const { submit } = props;
  //Will be trigger once the user hit the submit Button.
  const [onKeyPress, setOnKeyPress] = useState<boolean>(false);
  const [key, setKey] = useState("");
  const [classTxt, setClassTxt] = useState<string | null>("");
  const [classSurname, setClassSurname] = useState<string | null>("");
  const [classEmail, setClassEmail] = useState<string | null>("");
  const [classAddress, setClassAddress] = useState<string | null>("");
  const [address, setAddress] = useState({
    label: "",
    value: { description: "ss" },
  });
  const form: HTMLFormElement | any = React.useRef<HTMLFormElement>(null);
  const [submitIndiceResult, setSubmitIndice] = useState<boolean | string>(
    "none"
  );
  useEffect(() => {
    //Do not forget to restrict the api to "none" during production otherwise it won't work.
    const url = URL_ADDRESS + "/google-place";
    //const url = "http://localhost:3001/google-place";
    (async () => {
      const response = await serverGet(url);
      const { data } = response;
      setKey(data);
      return response;
    })();
  }, []);

  /**** EVENTS ****/
  //Display Span effect
  const handleFocus = (event: React.FocusEvent<HTMLFormElement>) => {
    const name: string | null = event.target.getAttribute("name");
    const classEffect = "span_effect";
    switch (name) {
      case "name":
        setClassTxt(classEffect);
        break;
      case "surname":
        setClassSurname(classEffect);
        break;
      case "email":
        setClassEmail(classEffect);
        break;
      case "address":
        setClassAddress(classEffect);
        break;
    }
  };
  //Maintain Span effect if value in
  const handleBlur = (event: React.FocusEvent<HTMLFormElement>) => {
    const value: string | null = event.target.value.trim();
    const id: string | null = event.target.getAttribute("name");
    //If there is a value in the input we keep the class.
    const myClass = value ? "span_effect" : "";
    switch (id) {
      case "name":
        setClassTxt(myClass);
        break;
      case "surname":
        setClassSurname(myClass);
        break;
      case "email":
        setClassEmail(myClass);
        break;
      case "address":
        setClassAddress(myClass);
        break;
    }
  };
  //Assist user with indications
  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (!onKeyPress) return;
    const element = event.currentTarget as HTMLInputElement;
    const value: string | null = element.value;
    const type: string | null = element.getAttribute("type");
    //We check the entry if it respects the regex
    if (value && type) {
      TESTS.isEntryValid(value, type)
        ? clearErrorNotif(event.target)
        : invalidInput(event.target, type);
    }
  };
  /**** CHECKS****/
  const checkEmptyValue = (inputs: any[]) => {
    let indice: boolean;
    let doWeSubmit = true;
    const errorAttribute = "data-state";
    const errorIndice = "invalid";
    // eslint-disable-next-line no-unused-vars
    inputs.map((input: HTMLInputElement) => {
      indice = TESTS.isFieldFilled(input.value);
      if (!indice) {
        displayError(input, errorAttribute, errorIndice);
        displayError(input.previousElementSibling, errorAttribute, errorIndice);
        doWeSubmit = false;
      }
      return input;
    });

    return doWeSubmit;
  };
  const checkFormatRegex = (inputs: any[]) => {
    let indice: boolean;
    let doWeSubmit = true;
    const errorAttribute = "data-state";
    const errorIndice = "invalid";
    //Are any inputs that do not respect the format
    inputs.map((input: HTMLInputElement) => {
      indice = TESTS.isEntryValid(input.value, input.type);
      if (indice) {
        clearErrorNotif(input);
      } else {
        invalidInput(input, input.type);
        displayError(input, errorAttribute, errorIndice);
        doWeSubmit = false;
      }
      return input;
    });

    return doWeSubmit;
  };
  /*Create Object from inputs To Be Sent*/
  const createObject = (inputs: any[]) => {
    const object: any = {};
    inputs.map((input: any) => {
      const key = input.getAttribute("data-name");
      const value = input.value;
      if (value) {
        return (object[key] = value);
      }
    });
    //We add the course selected to the object.
    const selectCourse = document
      .getElementById("select-option-courses")
      ?.textContent?.trim();
    object.interest = selectCourse;
    //We add the address through state "address" from google api
    object.address = address.label;
    // We add message in the text area;
    const selectMessage = document.getElementsByTagName("textarea")[0].value;
    object.message = selectMessage;
    console.log(object);
    return object;
  };
  /* Check inputs form */
  const checkInputsForm = (inputs: any[]) => {
    const areAnyEmptyFields = checkEmptyValue(inputs);
    if (!areAnyEmptyFields) {
      //We will enable handleKeyUp to assist the user with some indications
      setOnKeyPress(true);
      return false;
    }
    const areValuesRespectRegex = checkFormatRegex(inputs);
    if (!areValuesRespectRegex) {
      //We will enable handleKeyUp to assist the user with some indications
      setOnKeyPress(true);
      return false;
    }
    return true;
  };
  /* keep inputs that are compulsory */
  const filterInputs = () => {
    let inputs = [...form.current.getElementsByTagName("input")];
    //We pop "submit" input from inputs
    inputs.pop();
    //We remove address (it's optionnal) and we don't want to use any regex for it. We let google api handle it.
    inputs.pop();
    /*
    or if address is not the last one. look at note *(end of file)
    inputs = inputs.filter((input) => {
      const indice = input.getAttribute("id");
      return indice !== "react-select-2-input";
    });
  */
    return inputs;
  };

  /****SUBMIT ACCOUNT****/
  const submitForm = async (event: { preventDefault: () => void }) => {
    try {
      event.preventDefault();
      //We return only inputs that are not optional for the test.
      const inputs = filterInputs();
      const doWeSubmit: boolean = checkInputsForm(inputs);
      if (!doWeSubmit) return;
      /* Test enzyme mock notification
      if (development) {
        //for test mock (submit props)
        if (submit) {
          submit();
        }
        return;
      }*/
      const datas = createObject(inputs);
      //Don't forget the port in the app server.listen(3001)
      // const url = "http://localhost:3001/inscription";
      const url = URL_ADDRESS + "/inscription";

      //We display the loader while we are reaching our backend.
      setSubmitIndice("pending");
      const postDatas = await serverPost(url, datas);
      const { data } = postDatas;
      const result = data ? true : false;
      setSubmitIndice(result);
      return;
    } catch (err) {
      console.log(err);
      setSubmitIndice(false);
    }
  };
  //If we have the connection to the api is right we return it otherwise we return input library our own input.
  const addAddress = key ? (
    <GooglePlacesAutocomplete
      apiKey={key}
      selectProps={{
        address,
        onChange: setAddress,
      }}
    />
  ) : (
    <input
      type="address"
      name="address"
      onKeyUp={handleKeyUp}
      data-name="address"
      id="react-select-3-input"
    />
  );

  return (
    <section id="inscription">
      <h1>
        <span>Inscription </span>
      </h1>
      {submitIndiceResult === "pending" && <Loader />}
      {submitIndiceResult === false && <InscriptionError />}
      {submitIndiceResult === true && <InscriptionSuccess />}
      {submitIndiceResult === "none" && (
        <div id="flip-card">
          <div id="cover-form">
            <IconHome />
            <span> The North West College.</span>
          </div>
          <form
            onFocusCapture={handleFocus}
            onBlurCapture={handleBlur}
            method="post"
            id="form-inscription"
            ref={form}
          >
            <div id="form-part1">
              <div className="sub_form">
                <label htmlFor="name">
                  <span className={"" + classTxt}>
                    <em>Name</em>{" "}
                  </span>
                  <input
                    type="text"
                    name="name"
                    data-name="name"
                    data-state=""
                    onKeyUp={handleKeyUp}
                  />
                </label>
                <p className="error_message"></p>
              </div>
              <div className="sub_form">
                <label htmlFor="surname">
                  <span className={"" + classSurname}>
                    {" "}
                    <em>Surname</em>
                  </span>
                  <input
                    type="text"
                    name="surname"
                    data-name="surname"
                    data-state=""
                    onKeyUp={handleKeyUp}
                  />
                </label>
                <p className="error_message"></p>
              </div>
            </div>
            <div id="form-part2">
              <div className="sub_form">
                <label htmlFor="email">
                  <span className={"" + classEmail}>
                    {" "}
                    <em>Email</em>
                  </span>
                  <input
                    type="email"
                    name="email"
                    onKeyUp={handleKeyUp}
                    data-state=""
                    data-name="email"
                  />
                </label>
                <p className="error_message"></p>
              </div>
              <div className="sub_form">
                <label
                  htmlFor="address"
                  onFocus={() => setClassAddress("span_effect")}
                  onBlur={() => {
                    const divValue = document.getElementsByClassName(
                      "css-1uccc91-singleValue"
                    )[0] as HTMLDivElement;
                    const classo = divValue ? "span_effect" : "";
                    setClassAddress(classo);
                  }}
                >
                  <span className={"" + classAddress}>
                    {" "}
                    <em>Address (optional)</em>
                  </span>
                  {addAddress}
                </label>
                <p className="error_message"></p>
              </div>
            </div>
            <div id="form-part3">
              <div className="sub_form">
                <label htmlFor="interest"> Show an interest.</label>
                <SelectOption />
              </div>
              <div className="sub_form">
                <label htmlFor="txtArea">Send us a message (optional).</label>
                <TextArea
                  rowsIndice={5}
                  colsIndice={5}
                  placeHolder={"Requirements..."}
                />
              </div>
            </div>
            <div id="form-part-last">
              <div className="sub_form">
                <input type="submit" id="submit-button" onClick={submitForm} />{" "}
              </div>
            </div>
          </form>
        </div>
      )}
    </section>
  );
};

export default Inscription;

/*Note:
At filterInput remplace react-select-2-input with react-select-3-input when using local server. I don't know why but it appears with an id different on localhost and server.
on blur as well
*/
