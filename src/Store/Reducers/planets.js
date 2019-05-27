import { GET_PLANETS } from "../actionTypes";

const defaultState = {
  selectedPlanet: {},
  planets: []
};

export default function planetsReducer(state = defaultState, action) {
  switch (action.type) {
    case GET_PLANETS:
      return { ...state, planets: [...action.planets] };
    default:
      return state;
  }
}
