import { GET_STARS } from "../actionTypes";
import { apiCall } from "../../Services/apiCall";
import { addError } from "./errors";

//const API_URL = "https://space-api-millennium.herokuapp.com";
const API_URL = "http://localhost:8080";

const getStars = ({ currentPage, pageCount, stars }) => ({
  type: GET_STARS,
  stars,
  currentPage,
  pageCount
});

export function fetchStars(range = "") {
  return function(dispatch) {
    return apiCall(API_URL + "/stars", "GET", range)
      .then(res => dispatch(getStars(res)))
      .catch(err => dispatch(addError(err)));
  };
}
