import { combineReducers } from "redux";
import CardReducer from "./CardReducer";

// combining all reducer,though this project have one reducer.
const rootReducer = combineReducers({
  CardReducer: CardReducer,
});

export type rootState = ReturnType<typeof rootReducer>;

export default rootReducer;
