import { createAction } from '../utils/util'

export const APP_ACTIONS = {
  APP_INIT: 'APP_INIT',
  GET_DISTANCE: 'GET_DISTANCE',
  SET_ORIGIN_DATA: 'SET_ORIGIN_DATA',
  SET_DESTINATION_DATA: 'SET_DESTINATION_DATA',
  SET_GEO_DATA: 'SET_GEO_DATA',
  SET_ADDRESS_DATA: 'SET_ADDRESS_DATA',
  CLEAR_DATA: 'CLEAR_DATA'
}

export function clearData() {
  return createAction(APP_ACTIONS.CLEAR_DATA)
}

export function getDistance() {
  return createAction(APP_ACTIONS.GET_DISTANCE)
}

export function appInit() {
  return createAction(APP_ACTIONS.APP_INIT)
}

export function setOriginData(payload) {
  return createAction(APP_ACTIONS.SET_ORIGIN_DATA, payload)
}

export function setDestinationData(payload) {
  return createAction(APP_ACTIONS.SET_DESTINATION_DATA, payload)
}

export function setGeoData(payload) {
  return createAction(APP_ACTIONS.SET_GEO_DATA, payload)
}

export function setAddressData(payload) {
  return createAction(APP_ACTIONS.SET_ADDRESS_DATA, payload)
}
