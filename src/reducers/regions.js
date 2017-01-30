
const initialState = {
  dataset: {},
}

const regions = (state = initialState, action) => {
  switch (action.type) {
    case 'RECEIVE_REGIONS':
      return{
        ...state,
        dataset: action.regions
      }
    default:
      return state
  }
}

export default regions
