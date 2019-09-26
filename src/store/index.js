import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { heroesReducer } from "./starWarsModule/starWarsReducer";

export const store = createStore(
  combineReducers({
    heroes: heroesReducer
  }),
  applyMiddleware(thunk)
);
