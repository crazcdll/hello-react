import React, { Component } from 'react'
import ErrorBoundary from './ErrorBoundary'
import Broken from './Broken'

class ComponentDidCatched extends Component {
  state = {
    counter: 0
  }

  increment = () => {
    this.setState(preState => ({
      counter: preState.counter + 1
    }))
  }

  decrement = () => {
    this.setState(preState => ({
      counter: preState.counter - 1
    }))
  }

  render () {
    return (
      <div>
        <h1>Hello zcdll</h1>
        <ErrorBoundary>D
          <Broken />
        </ErrorBoundary>
        <div>Counter: { this.state.counter }</div>
        <button onClick={ this.increment }>Increment</button>
        <button onClick={ this.decrement }>Decrement</button>
      </div>
    )
  }
}

export default ComponentDidCatched