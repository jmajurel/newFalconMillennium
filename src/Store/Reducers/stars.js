import { GET_STARS } from "../actionTypes";

const initialState = {
  selectedStar: {},
  stars: []
};

export default function starsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_STARS:
      return { ...state, stars: [...action.stars] };
    default:
      return state;
  }
}
