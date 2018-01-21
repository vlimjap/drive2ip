import { createApolloFetch } from 'apollo-fetch';

export function getGeoLocationOfIp(ip) {
  const uri = 'https://api.graphloc.com/graphql'
  const query = `{
    getLocation(ip: "${ip}") {
      location {
        latitude
        longitude
      }
    }
  }`

  const apolloFetch = createApolloFetch({uri})

  return apolloFetch({ query })
    .then(result => result.data.getLocation)
    .catch(err => {
      console.error('apolloFetch: ', err)
    })
}

export function getDistance({ origin, destination }) {
  return new Promise((resolve, reject) => {
    var o = new window.google.maps.LatLng(origin.latitude, origin.longitude)
    var d = new window.google.maps.LatLng(destination.latitude, destination.longitude)
    var service = new window.google.maps.DistanceMatrixService()

    service.getDistanceMatrix({
        origins: [o],
        destinations: [d],
        travelMode: 'DRIVING'
      },
      resolve
    )
  }).catch(err => console.log('getDistance', err))
}
