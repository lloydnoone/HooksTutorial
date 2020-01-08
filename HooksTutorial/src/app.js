import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import CounterHooks from './CounterHook.js'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <CounterHooks/>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)