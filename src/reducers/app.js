import initialState from './initial-state'
import { APP_ACTIONS } from '../actions/app'

export default function app(state = initialState, action = {}) {
  const { payload, type } = action

  switch (type) {
    case APP_ACTIONS.APP_INIT:
      return {
        ...state,
      	lastUpdated: Date.now()
      }

    case APP_ACTIONS.SET_GEO_DATA:
      const { origin, destination } = payload

      return {
        ...state,
        lastUpdated: Date.now(),
        originData: {
          ip: origin.ip,
          location: origin.location
        },
        destinationData: {
          ip: destination.ip,
          location: destination.location
        }
      }

    case APP_ACTIONS.SET_ADDRESS_DATA:
      const { distance, duration } = payload.rows[0].elements[0]
      const { originData, destinationData } = state 
      
      return {
        ...state,
        lastUpdated: Date.now(),
        distance: distance,
        duration: duration,
        originData: {
          ip: originData.ip,
          location: {
            latitude: originData.location.latitude,
            longitude: originData.location.longitude,
            address: payload.originAddresses[0]
          }
        },
        destinationData: {
          ip: destinationData.ip,
          location: {
            latitude: destinationData.location.latitude,
            longitude: destinationData.location.longitude,
            address: payload.destinationAddresses[0]
          }
        }
      }

    case APP_ACTIONS.CLEAR_DATA:
      return { 
        ...state, 
        ...initialState.app,
        lastUpdated: Date.now()
      }

    default:
      return state
  }
}
