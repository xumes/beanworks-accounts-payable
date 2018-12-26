import _ from 'lodash'
import { FETCH_XERO } from '../actions'

const INITIAL_STATE = []

export default function (state = INITIAL_STATE, action) {
  if (action.type == FETCH_XERO) {
    console.log(action.payload.data)
    const result = action.payload.data
    return result
  } else {
    return state
  }
}
