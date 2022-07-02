import {
  ADD_TO_CART,
  GET_COUNTRIES,
  SET_FILTERED_DATA,
  Submit_Handling_Action,
} from "./redux/action/ActionTypes";

export type Country = {
  id: number;
  Real_Name: string;
  Player_Name: string;
  Asset: string;
};

export type MyCountry = {
  countries: Country[];
};

//types of Actions for types.ts .....................
export type GetCountries = {
  type: typeof GET_COUNTRIES; //only in type,we need to call type in this way: typeof GET_COUNTRIES
  payload: {
    countries: Country[];
  };
};
export type setFiltered = {
  type: typeof SET_FILTERED_DATA; //only in type,we need to call type in this way: typeof GET_COUNTRIES
  payload: {
    filtered: Country[];
  };
};
export type AddToCartAction = {
  type: typeof ADD_TO_CART;
  payload: {
    country: Country;
  };
};
export type submitHandlingAction = {
  type: typeof Submit_Handling_Action;
  payload: {
    country: Country;
  };
};

// to make type for action in reducer,we need to do union of every action's type from here.
export type CountryActions =
  | AddToCartAction
  | GetCountries
  | submitHandlingAction
  | setFiltered;
