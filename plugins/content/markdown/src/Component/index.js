import React, { Component } from 'react'

import Display from './render'
import Form from './form'

export default class MarkdownTablePlugin extends Component {
  onChange(event) {
    const value = event.target.value

    this.props.onChange({
      src: value
    })
  }

  render() {
    const { readOnly, state } = this.props
    const { src } = state

    return (
      <div>
        <Display {...this.props} />
        {!readOnly && <Form onChange={this.onChange.bind(this)} src={src} />}
      </div>
    )
  }
}
