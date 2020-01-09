import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import CounterHooks from './CounterHook'
import Toggler from './Toggler'
import SimpleFormHooks from './SimpleFormHooks'
import Clicker from './Clicker'
import SWMovies from './SWMovies'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <CounterHooks/>
        <Toggler/>
        <SimpleFormHooks/>
        <Clicker/>
        <SWMovies/>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)