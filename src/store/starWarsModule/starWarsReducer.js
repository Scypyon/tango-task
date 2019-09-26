import {
  IS_FETCHING,
  FETCHING_FAILED,
  FETCHING_SUCCEED
} from "./starWarsAction";

const initState = { heroes: [], error: "", isFetching: false };

export const heroesReducer = (state = initState, action) => {
  switch (action.type) {
    case IS_FETCHING:
      return { ...state, isFetching: true };
    case FETCHING_SUCCEED:
      return {
        ...state,
        heroes: action.data,
        isFetching: false,
        error: ""
      };
    case FETCHING_FAILED:
      return { ...state, error: "Coś poszło nie tak", isFetching: false };
    default: {
      return state;
    }
  }
};
