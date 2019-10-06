import { GET_STARS } from "../actionTypes";

const initialState = {
  selectedStar: {},
  stars: []
};

export default function starsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_STARS:
      return { 
        ...state, 
        stars: [...action.stars], 
        currentPage: action.currentPage,
        pageCount: action.pageCount
      };
    default:
      return state;
  }
}
