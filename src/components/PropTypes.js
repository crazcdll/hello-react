import React, { Component } from 'react'
// import PropTypes from 'prop-types'

const Hello = (props) => {
  return (
    <h1>Hello, { props.name }</h1>
  )
}

Hello.defaultProps = {
  name: 'zcdll521'
}
class PropTypes extends Component {
  render () {
    return (
      <div>
        <Hello />
      </div>
    )
  }
}

export default PropTypes