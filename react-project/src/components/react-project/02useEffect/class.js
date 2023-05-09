import React, { Component } from 'react'

export default class classuseEffect extends Component {
  constructor() {
    super()
    this.state = {
      counter: 100,
    }
  }
  componentDidMount() {
    console.log('组件渲染完成')
  }
  componentDidUpdate() {
    console.log('组件更新完成')
  }
  componentWillUnmount() {
    console.log('组件即将被卸载')
  }

  btnCounter = () => {
    this.setState({
      counter: 10000,
    })
  }
  render() {
    return (
      <div>
        <h3>componentDidMount/componentDidUpdate/componentWillUnmount</h3>
        <button onClick={this.btnCounter}>修改</button>
        <div>{this.state.counter}</div>
      </div>
    )
  }
}
