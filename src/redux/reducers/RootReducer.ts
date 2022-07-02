import { combineReducers } from "redux";
import CardReducer from "./CardReducer";

const rootReducer = combineReducers({
  CardReducer: CardReducer,
});

export type rootState = ReturnType<typeof rootReducer>;

export default rootReducer;
