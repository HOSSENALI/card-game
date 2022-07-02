import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTocart } from '../../../redux/action/CountryActions'
import { rootState } from '../../../redux/reducers/RootReducer'
import { Country } from "../../../types";


const Card = ({country}:{country: Country}) => {
    const dispatch = useDispatch()
  const { cart } = useSelector((state: rootState) => state.CountryReducer);

    return (
    <div
    onClick={() => dispatch(addTocart(country))}
    className={country.id === cart.id ? "card selected" : "card"}
    key={country.id}
  >
    <p>
      <b>Real Name</b>:&nbsp;{country.Real_Name}
    </p>
    <p>
      <b>Player Name</b>:&nbsp;{country.Player_Name}
    </p>
    <p>
      <b>Asset...</b>
    </p>
  </div>
  )
}

export default Card