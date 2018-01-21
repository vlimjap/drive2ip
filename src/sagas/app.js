import { 
  takeLatest,
  call,
  put,
} from 'redux-saga/effects'
import { 
  APP_ACTIONS,
  setGeoData,
  setAddressData,
} from '../actions/app'
import * as api from '../apis'
import { validateIp } from '../utils/util'


function* appInit() {
  yield takeLatest(APP_ACTIONS.APP_INIT, appInitHandler)
}

function* getDistance() {
  yield takeLatest(APP_ACTIONS.GET_DISTANCE, getDistanceHandler)
}

/* WORKERS */
function* appInitHandler(action) {
  try {
    console.log('Hi! All set!')
    yield
  } catch (e) {
    console.error('appInitHandler: ', action, e) 
  }
}

function* getDistanceHandler(action) {
  try {
    clearErrors()

    const { originIp, destinationIp } = getIpAddresses()


    if (originIp.length && destinationIp.length) {
      const originGeo = yield call(api.getGeoLocationOfIp, originIp)
      const destinationGeo = yield call(api.getGeoLocationOfIp, destinationIp)
      
      yield put(setGeoData({
        origin: {
          ...originGeo,
          ip: originIp
        }, 
        destination: {
          ...destinationGeo,
          ip: destinationIp
        }
      }))

      const travelJSON = yield call(api.getDistance, {origin: originGeo.location, destination: destinationGeo.location})
      yield put(setAddressData(travelJSON))  
    } else {
      //error
      console.log('error')

      if (!originIp.length) {
        document.querySelector('.origin-error').innerHTML = 'Invalid IP Address'
      }

      if (!destinationIp.length) {
        document.querySelector('.destination-error').innerHTML = 'Invalid IP Address'
      }
    }
  } catch (e) {
    console.error('getDistanceHandler: ', action, e) 
  }
}

export {
  appInit,
  getDistance
}

/* HELPERS */
function clearErrors() {
  const originError = document.querySelector('.origin-error')
  const destinationError = document.querySelector('.destination-error')

  originError.innerHTML = ''
  destinationError.innerHTML = ''
}

function getIpAddresses() {
  const originIp = document.querySelector('input[name="origin"]').value
  const destinationIp = document.querySelector('input[name="destination"]').value

  return { 
    originIp: validateIp(originIp) ? originIp : '',
    destinationIp: validateIp(destinationIp) ? destinationIp : ''
  }
}

