import { getValues } from "../values"

const receiveRegions = (regions) => ({
  type: 'RECEIVE_REGIONS',
  regions: regions
})

export const getAllRegions = () => dispatch => {
  getValues().then((response) => {
    dispatch(receiveRegions(response))
  })
}
