import React, { Component } from 'react'
// import logo from './logo.svg'
import './App.css'
import PropTypes from './components/PropTypes'
import Hoc from './components/Hoc'
import RenderProp from './components/RenderProps'
import ComponentDidCatched from './components/ComponentDidCatched'

class App extends Component {
  render () {
    return (
      <div className="App">
        <PropTypes />
        <Hoc />
        <RenderProp />
        <ComponentDidCatched />
        { /*<header className="App-header">*/ }
        { /*<img src={logo} className="App-logo" alt="logo"/>*/ }
        { /*<h1 className="App-title">Welcome to React</h1>*/ }
        { /*</header>*/ }
        { /*<p className="App-intro">*/ }
        { /*To get started, edit <code>src/App.js</code> and save to reload.*/ }
        { /*</p>*/ }
        { /*<LikeButton likedText='已赞' unlikedText='赞'/>*/ }
      </div>
    )
  }
}

// class LikeButton extends Component {
//   constructor () {
//     super()
//     this.state = {isLiked: false}
//   }
//
//   handleClickOnLikeButton () {
//     console.log(this.state.isLiked)
//     this.setState({
//       isLiked: !this.state.isLiked
//     })
//     console.log(this.state.isLiked)
//   }
//
//   render () {
//     const likedText = this.props.likedText || '取消'
//     const unlikedText = this.props.unlikedText || '点赞'
//     return (
//       <button onClick={ this.handleClickOnLikeButton.bind(this) }>
//         { this.state.isLiked ? likedText : unlikedText } 👍
//       </button>
//     )
//   }
// }

export default App
