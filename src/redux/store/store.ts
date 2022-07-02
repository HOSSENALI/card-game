import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducers/RootReducer";
import thunk from "redux-thunk";

export default function Store() {
  const middleware = [thunk];
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
  );

  return store;
}
