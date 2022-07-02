import { useSelector } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import axios from "axios";
import { AddToCartAction, Country, setFiltered } from "../../types";
import { rootState } from "../reducers/RootReducer";
import {
  ADD_TO_CART,
  GET_COUNTRIES,
  SET_FILTERED_DATA,
  Submit_Handling_Action,
} from "./ActionTypes";

export const fetchCountries = () => (dispatch: Dispatch) => {
  axios.get("data.json").then((response) => {
    let data = response.data;

    dispatch({
      type: GET_COUNTRIES,
      payload: {
        countries: data,
      },
    });
  });
};
export const handleAscendingSortAction = () => (dispatch: Dispatch) => {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      let sorteddata = data.sort((a: Country, b: Country) =>
        a.Real_Name.localeCompare(b.Real_Name)
      );
      dispatch({
        type: GET_COUNTRIES,
        payload: {
          countries: data,
        },
      });
    });
};
export const handleDescendingSortAction = () => (dispatch: Dispatch) => {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      let sorteddata = data.sort((a: Country, b: Country) =>
        a.Real_Name.localeCompare(b.Real_Name)
      );
      sorteddata.reverse();
      dispatch({
        type: GET_COUNTRIES,
        payload: {
          countries: data,
        },
      });
    });
};

export function addTocart(country: Country): AddToCartAction {
  return {
    type: ADD_TO_CART,
    payload: {
      country,
    },
  };
}


export const submitHandlingAction=(country: Country):any=>(dispatch:Dispatch) =>{
    axios
    .post("https://jsonplaceholder.typicode.com/posts", JSON.stringify(country))
    .then((response) => {
        console.log(response);
        alert("Succesful");
    });
}
