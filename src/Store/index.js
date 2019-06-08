import { createStore, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";
import { rootReducer } from "./Reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export function configureStore() {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(ReduxThunk)),
    
  );
  return store;
}
