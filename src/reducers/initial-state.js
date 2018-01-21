const initialState = {
  app: {
    lastUpdated: null,
    distance: null,
    duration: null,
    originData: {
      error: null,
      ip: null,
      location: {
        address: null
      }
    },
    destinationData: {
      error: null,
      ip: null,
      location: {
        address: null
      }
    }
  }
}

export default initialState