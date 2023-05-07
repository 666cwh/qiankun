import React, { Component } from 'react'

export default class classState extends Component {
  constructor() {
    super()
    this.state = {
      counter: 100,
    }
  }
  btnCounter = () => {
    this.setState({
      counter: 10000,
    })
  }
  render() {
    return (
      <div>
        <h3>class</h3>
        <button onClick={this.btnCounter}>修改</button>
        <div>{this.state.counter}</div>
      </div>
    )
  }
}
