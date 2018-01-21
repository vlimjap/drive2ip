import React, { Component } from 'react'
import { connect } from 'react-redux'
import SearchForm from './SearchForm'
import Results from './Results'

import './App.css'

class App extends Component {
  render() {
    const { state } = this.props

    return (
      <div>
        <SearchForm state={ state } />

        <Results state={ state } />  
      </div>
    )
  }

}

const mapStateToProps = state => ({
  state: { ...state.app }
})

// const mapDispatchToProps = dispatch => ({
//   actions: bindActionCreators({
//   }, dispatch)
// })

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(App)

