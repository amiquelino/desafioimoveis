import { findValue } from "../values"

const value = findValue("RJ")

const initialState = {
  region: "RJ",
  rentValue: value.aluguel,
  purchaseValue: value.compra,
  dwellingTime: 10,
  annualInterest: 11.5
}

const rentOrBuy = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_REGION':
    
      return {
        ...state,
        region: action.region
      }
    default:
        return state
  }
}

export default rentOrBuy
