import { combineReducers } from "redux";
import errorReducer from "./errors";
import planetsReducer from "./planets";
import starsReducer from "./stars";

export const rootReducer = combineReducers({
  error: errorReducer,
  planets: planetsReducer,
  stars: starsReducer
});
