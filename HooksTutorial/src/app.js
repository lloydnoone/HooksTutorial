import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import TodoApp from './TodoApp'

class App extends Component {
  render() {
    return (
      <TodoApp/>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)