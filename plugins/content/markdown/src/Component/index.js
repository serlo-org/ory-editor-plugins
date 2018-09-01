import React, { Component } from 'react'

import Display from './render'
import Form from './form'

const defaultSrc = '|edit|table|here...|\n|-|-|-|'

export default class MarkdownTablePlugin extends Component {
  onChange(event) {
    const value = event.target.value

    this.props.onChange({
      src: value
    })
  }

  render() {
    const { focused, state } = this.props
    const { src } = state

    return (
      <div>
        <Display {...this.props} defaultSrc={defaultSrc} />
        {focused && (
          <Form
            onChange={this.onChange.bind(this)}
            src={src}
            defaultSrc={defaultSrc}
          />
        )}
      </div>
    )
  }
}
