import React, { Component, Fragment } from 'react'
import { PropTypes as PT } from 'prop-types'

// const Hello = (props) => {
//   return (
//     <h1>Hello, { props.name }</h1>
//   )
// }

// Hello.defaultProps = {
//   name: 'zcdll521'
// }

class Hello extends Component {
  static defaultProps = {
    name: 'zcdll521'
  }

  render () {
    return (
      <Fragment>
        <h1>Hello, { this.props.name }, { this.props.money }</h1>
        <ul>
          { this.props.movies.map(movie =>
            <li key={ movie.id }>{ movie.title }</li>
          ) }
        </ul>
      </Fragment>
    )
  }
}

Hello.propTypes = {
  money: PT.number,
  name: PT.oneOfType([
    PT.string,
    PT.number
  ]),
  onChange: PT.func.isRequired,
  movies: PT.arrayOf(PT.shape({
    id: PT.number,
    title: PT.string,
    visit_count: PT.number
  }))
}

class PropTypes extends Component {
  onChange () {}

  state = {
    movies: [
      {id: 1, title: 'title 1', visit_count: 1},
      {id: 2, title: 'title 2', visit_count: 2},
    ]
  }

  render () {
    return (
      <div>
        { /*<Hello name="zcdll"/>*/ }
        <Hello
          money={ 99 }
          onChange={ this.onChange }
          name={ 'zcdll' }
          movies={ this.state.movies }
        />
      </div>
    )
  }
}

export default PropTypes