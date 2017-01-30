export const setRegion = ( region ) => ( dispatch, getState ) => {
  const state = getState()
  const value = state.regions.dataset[region]
  const aluguel = value.aluguel
  const compra = value.compra
  dispatch( {
    type: 'SET_REGION',
    region,
    aluguel,
    compra
  })
}

export const setRentValue = ( rentValue ) => ({
  type: 'SET_RENT_VALUE',
  rentValue
})

export const setPurchaseValue = ( purchaseValue ) => ({
  type: 'SET_PURCHASE_VALUE',
  purchaseValue
})

export const setDwellingTime = ( dwellingTime ) => ({
  type: 'SET_DWELLING_TIME',
  dwellingTime
})

export const setAnnualInterest = ( annualInterest ) => ({
  type: 'SET_ANNUAL_INTEREST',
  annualInterest
})
