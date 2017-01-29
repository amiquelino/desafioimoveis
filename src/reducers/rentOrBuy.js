import { findValue } from '../values'
import Interest from '../entities/Interest'

const setInterest = (rentValue, purchaseValue, dwellingTime, annualInterest) => {
  const rentInterest  = new Interest(rentValue, dwellingTime, annualInterest)
  const buyInterest  = new Interest(purchaseValue, dwellingTime, annualInterest)

  return {
    rent: rentInterest.compound(),
    buy: buyInterest.compound()
  }
}

let value = findValue("RJ")

const initialState = {
  region: "RJ",
  rentValue: value.aluguel,
  purchaseValue: value.compra,
  dwellingTime: 10,
  annualInterest: 11.5,
  compoundInterest: setInterest(value.aluguel, value.compra, 10, 11.5)
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
        compoundInterest: setInterest(value.aluguel, value.compra, state.dwellingTime, state.annualInterest)
      }
    case 'SET_RENT_VALUE':
      return {
        ...state,
        rentValue: action.rentValue,
        compoundInterest: setInterest(action.rentValue, state.purchaseValue, state.dwellingTime, state.annualInterest)
      }
    case 'SET_PURCHASE_VALUE':
      return {
        ...state,
        purchaseValue: action.purchaseValue,
        compoundInterest: setInterest(state.rentValue, action.purchaseValue, state.dwellingTime, state.annualInterest)
      }
    case 'SET_DWELLING_TIME':
      return {
        ...state,
        dwellingTime: action.dwellingTime,
        compoundInterest: setInterest(state.rentValue, state.purchaseValue, action.dwellingTime, state.annualInterest)
      }
    case 'SET_ANNUAL_INTEREST':
      return {
        ...state,
        annualInterest: action.annualInterest,
        compoundInterest: setInterest(state.rentValue, state.purchaseValue, state.dwellingTime, action.annualInterest)
      }
    default:
      return state
  }
}

export default rentOrBuy
