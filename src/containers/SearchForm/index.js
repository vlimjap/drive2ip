import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'


import { getDistance } from '../../actions/app'
import './index.css'

class SearchForm extends Component {
  static propTypes = {
    state: PropTypes.shape({
      originIp: PropTypes.string,
      destinationIp: PropTypes.string
    }).isRequired,

    actions: PropTypes.shape({
    }).isRequired,
  }

  render() {
    const { originData, destinationData, distance, duration } = this.props.state
    const errMsg = 'Unable to retrieve driving time. Have you tried a wormhole?'

    if (distance || duration) { return(<div></div>) }

    //not the best place but i'm tired.
    const lookupError = (!distance && !duration && originData.ip && destinationData.ip) ? errMsg : ''

    return (
      <div className="searchContainer">
        <form name="search">
          <h1>How long is the drive?</h1>
          <div>
            <span>
              Origin:
              <input type="text" name="origin" />
              <span className="origin-error error"></span>
            </span>
            <span>
              Destination:
              <input type="text" name="destination" />
              <span className="destination-error error"></span>
            </span>
          </div>
        </form>
        <div className="buttonContainer">
          <input className="submitBtn" type="button" value="Gimme the Distance!" onClick={this.findDistance} />
          <span className="form-error error">{lookupError}</span>
        </div>
      </div>
    )
  }

  findDistance = (e) => {
    this.props.actions.getDistance()
  }
}

const mapStateToProps = state => ({
  state: { ...state.app }
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    getDistance: getDistance
  }, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm)
