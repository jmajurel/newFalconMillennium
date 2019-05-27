import { ADD_ERROR, REMOVE_ERROR } from "../actionTypes";

const defaultState = {
  error: {}
};

export default function errorReducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_ERROR:
      return { ...state, error: action.error };
    case REMOVE_ERROR:
      return { ...state, error: {} };
    default:
      return state;
  }
}
