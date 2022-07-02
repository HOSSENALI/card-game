
import { combineReducers } from 'redux';
import CountryReducer from './CountryReducer';
import LoginReducer from './LoginReducer';
// import TaskReducer from './task/TaskReducer';
const rootReducer = combineReducers({
  
    CountryReducer: CountryReducer,
    LoginReducer:LoginReducer,
});

export type rootState= ReturnType<typeof rootReducer>

export default rootReducer;
