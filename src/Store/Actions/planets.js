import { GET_PLANETS } from "../actionTypes";
import { apiCall } from "../../Services/apiCall";
import { addError } from "./errors";

const API_URL = "http://localhost:8080";

//Action creators
const getPlanets = planets => ({
  type: GET_PLANETS,
  planets
});

//Dispatchers
export function fetchPlanets() {
  return function(dispatch) {
    return apiCall(API_URL + "/planets", "GET")
      .then(planets => dispatch(getPlanets(planets)))
      .catch(err => dispatch(addError(err)));
  };
}
