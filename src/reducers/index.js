import { combineReducers } from 'redux'
import rentOrBuy from './rentOrBuy'
import regions from './regions'

export default  combineReducers({
  rentOrBuy,
  regions
})
