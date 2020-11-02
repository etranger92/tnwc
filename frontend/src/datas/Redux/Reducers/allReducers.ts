import { combineReducers } from "redux";
//import { persistReducer } from "redux-persist";
//tell to redux you want want to use your storage as default
//import storage from "redux-persist/lib/storage";
// or session storage: diff between them; if the user closes his windows all datas are deleted but with local storage they are saved.
//import sessionStorage from "redux-persist/lib/storage";
import { Course } from "./courseReducer";
//Will define which reducer we want then to be persisted.

const allReducers = combineReducers({
  course: Course,
});

export default allReducers;
//export default allReducers
