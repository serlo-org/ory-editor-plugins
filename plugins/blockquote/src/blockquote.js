import React from 'react'
import { Editable } from '@splish-me/editor-core/lib/editable.component'

export default class Blockquote extends React.Component {
  render() {
    const { state } = this.props
    return (
      <blockquote>
        <Editable id={state.child} />
      </blockquote>
    )
  }
}
