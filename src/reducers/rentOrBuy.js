import { findValue } from "../values"

let value = findValue("RJ")

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
      value = findValue( action.region)
      return {
        ...state,
        region: action.region,
        rentValue: value.aluguel,
        purchaseValue: value.compra,
      }
    case 'SET_RENT_VALUE':
      return {
        ...state,
        rentValue: action.rentValue
      }
    case 'SET_PURCHASE_VALUE':
      return {
        ...state,
        rentValue: action.purchaseValue
      }
    case 'SET_DWELLING_TIME':
      return {
        ...state,
        dwellingTime: action.dwellingTime
      }
    case 'SET_ANNUAL_INTEREST':
      return {
        ...state,
        annualInterest: action.annualInterest
      }
    default:
        return state
  }
}

export default rentOrBuy
