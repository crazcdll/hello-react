import React from 'react'
import PropTypes from 'prop-types'

class Mouse extends React.Component {
  static propTypes = {
    render: PropTypes.func.isRequired
  }
  state = {x: 0, y: 0}

  handleMouseMove = (event) => {
    this.setState({
      x: event.clientX,
      y: event.clientY
    })
  }

  render () {
    return (
      <div style={ {height: '100%'} } onMouseMove={ this.handleMouseMove }>
        { this.props.render(this.state) }
      </div>
    )
  }
}

const Position = ({x, y}) => {
  return (
    <h1>The mouse position is ({ x }, { y })</h1>
  )
}

const Position1 = ({x, y}) => {
  return (
    <p>The mouse position is ({ x }, { y })</p>
  )
}

const App = () => {
  return (
    <div style={ {height: '100%'} }>
      <Mouse render={ (props) => <Position { ...props } /> } />
      <Mouse render={ (props) => <Position1 { ...props } /> } />
    </div>
  )
}

export default App