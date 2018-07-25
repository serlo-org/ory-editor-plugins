import {
  Editable,
  createEditableIdentifier
} from '@splish-me/editor/dist/editable.component'
import * as React from 'react'
import slate from 'ory-editor-plugins-slate'
//import * as uuid from 'uuid'
import Display from './Display'
import Input from './Input'
import SCButton from './Button/SCButton'

export default class SCEXercise extends React.Component {
  handleCheckboxChange = event => {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.props.onChange({
      [name]: value
    })
  }

  addButton = () => {
    const { onChange, state } = this.props

    onChange({
      answers: [
        ...state.answers,
        {
          id: createEditableIdentifier(),
          isCorrect: false,
          feedback: null
        }
      ]
    })
  }

  render() {
    const { readOnly, state } = this.props
    const { question, answers } = state

    return (
      <React.Fragment>
        {readOnly ? (
          <Display {...this.props} />
        ) : (
          <Input {...this.props} addButton={this.addButton} />
        )}
      </React.Fragment>
    )
  }
}