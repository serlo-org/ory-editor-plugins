import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'

export default class Display extends Component {
  render() {
    const { state, defaultSrc } = this.props
    const { src } = state
    return (
      <div>
        <ReactMarkdown source={src || defaultSrc} />
      </div>
    )
  }
}
