import React, { Component } from 'react'

export default class Bar extends Component {
  render() {
    return (<div className="bar"
      key={this.props.id}
      style={{
        height: `${this.props.ele}vh`,
        width: `${(30/this.props.length)}vw`,
        margin: `0 0.2vw`,
        backgroundColor: this.props.color
      }}></div>)
  }
}