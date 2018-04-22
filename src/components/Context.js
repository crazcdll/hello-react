import React, { Component } from 'react'

// 第一步，创建 Context
const myContext = React.createContext()

// 第二步，创建 Provider Component

class MyProvider extends Component {
  state = {
    name: 'zcdll',
    age: 28
  }

  render () {
    return (
      <myContext.Provider value={ {state: this.state} }>
        { this.props.children }
      </myContext.Provider>
    )
  }
}

const Family = (props) => {
  return (
    <div>
      <h1>Family</h1>
      <Person />
    </div>
  )
}

class Person extends Component {
  render () {
    return (
      <div>
        <h1>Person</h1>
        <myContext.Consumer>
          { ({state}) => <p>My age is { state.age } </p> }
        </myContext.Consumer>
      </div>
    )
  }
}

class Context extends Component {
  render () {
    return (
      <div>
        <p>Hello Context</p>
        <MyProvider>
          <Family />
        </MyProvider>
      </div>
    )
  }
}

export default Context
