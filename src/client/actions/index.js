import axios from 'axios'

export const FETCH_XERO = 'FETCH_XERO'

export function fetchXero () {
  const url = '/api/get/all'
  const request = axios.get(url)
  return {
    type: FETCH_XERO,
    payload: request
  }
}
