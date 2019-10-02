import { GET_STARS } from "../actionTypes";
import { apiCall } from "../../Services/apiCall";
import { addError } from "./errors";

//const API_URL = "https://space-api-millennium.herokuapp.com";
const API_URL = "http://localhost:8080";
const getAllStars = stars => ({
  type: GET_STARS,
  stars
});

export function fetchStars() {
  return function(dispatch) {
    return apiCall(API_URL + "/stars", "GET")
      .then(stars => dispatch(getAllStars(stars)))
      .catch(err => dispatch(addError(err)));
  };
}
