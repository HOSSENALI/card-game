import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer, { rootState } from "../reducers/RootReducer";
import thunk from "redux-thunk";


function saveToLocalStorage(state: rootState) {
  try {
    const localStorageState = JSON.stringify(state);
    localStorage.setItem("Hossen_state", localStorageState);
  } catch (e) {
    console.log(e);
  }
}

function loadFromLocalStorage() {
  const localStorageState = localStorage.getItem("Hossen_stat");
  if (localStorageState === null) return undefined;
  return JSON.parse(localStorageState);
}

export default function Store() {
  const middleware = [thunk];
  const store = createStore(
    rootReducer,
    loadFromLocalStorage(),
    composeWithDevTools(applyMiddleware(...middleware))
    // window. REDUX DEVTOOLS EXTENSION && window. REDUX_DEVTOOLS E
  );
  store.subscribe(() => saveToLocalStorage(store.getState()));
  return store;
}
