import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { clearData } from '../../actions/app'
import './index.css'

class Results extends Component {
  render() {
    const { originData, destinationData, distance, duration } = this.props.state

    if (!distance || !duration) { return(<div></div>) }

    return (
      <div className="resultsContainer">
        <input className="back" type="button" value="back" onClick={this.reset}/>
        <div className="copy">
          <h1>How long is the drive?</h1>
          <div>
            <span>Origin:</span>
            <span>{originData.location.address}</span>
            <span>Destination:</span>
            <span>{destinationData.location.address}</span>
          </div>
        </div>
        <div className="timeContainer">
          <h3>Mileage: { distance.text }</h3>
          <h3>Travel Time: { duration.text }</h3>
          <span>Well, that aint far...</span>
        </div>
      </div>
    )
  }

  reset = () => {
    this.props.actions.clearData()
  }
}

const mapStateToProps = state => ({
  state: { ...state.app }
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    clearData: clearData
  }, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Results)
