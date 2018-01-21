import { fork } from 'redux-saga/effects'
import * as sagasList from './app'

export default function* sagas() {
	try {
		yield [
			fork(sagasList.appInit),
      fork(sagasList.getDistance),
   //    fork(sagasList.goSearch),
   //    fork(sagasList.getRandom)
		]
	} catch(err) {
		console.error('Error Loading Sagas: ', err)
	}	
}