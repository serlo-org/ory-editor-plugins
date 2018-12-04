import {
  Editable,
  createEditableIdentifier
} from '@splish-me/editor-core/lib/editable.component'
import * as React from 'react'
import { ScMcRenderer, ScMcRendererProps } from './renderer.component'
import { ScMcChoiceEditable } from './choice-editable.component'
import { ScMcFeedback } from './feedback.component'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { renderIntoSidebar } from '@splish-me/editor-ui/lib/plugin-sidebar.component'
import Dropdown from '@splish-me/editor-ui/lib/sidebar-elements/dropdown'
import * as R from 'ramda'
import { css } from 'emotion'

export interface ScMcEditableProps extends ScMcRendererProps {
  readOnly: boolean
  focused: boolean
  onChange: (newState: Partial<ScMcRendererProps['state']>) => void
}

export class ScMcEditable extends React.Component<ScMcEditableProps> {
  handleCheckboxChange = (index: number) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const target = event.target
    const value = target.checked

    const { state, onChange } = this.props
    const newAnswer = {
      ...state.answers[index],
      isCorrect: value,
      feedback: null
    }

    onChange({
      answers: R.update(index, newAnswer, state.answers)
    })
  }
  handleRadioButtonChange = (rightanswerIndex: number) => () => {
    const { state, onChange } = this.props
    onChange({
      answers: state.answers.map((answer, index) => {
        return { ...answer, isCorrect: index === rightanswerIndex }
      })
    })
  }
  handleSCMCChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { onChange, state } = this.props
    let helper
    if (event.target.value === 'Single Choice') {
      helper = true
    } else helper = false
    onChange({
      isSingleChoice: helper,
      answers: state.answers.map(answer => {
        return { ...answer, isCorrect: false }
      })
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
    const { readOnly, state, focused } = this.props
    const { answers, isSingleChoice } = state

    return (
      <React.Fragment>
        {focused
          ? renderIntoSidebar(
              <Dropdown
                label="Select the exercise type"
                options={['Single Choice', 'Multiple Choice']}
                value={isSingleChoice ? 'Single Choice' : 'Multiple Choice'}
                onChange={this.handleSCMCChange}
              />
            )
          : null}
        {readOnly ? (
          <ScMcRenderer {...this.props} />
        ) : (
          <React.Fragment>
            <hr />
            {answers.map((answer, index) => {
              return (
                <div
                  className={css({
                    marginBottom: '10px'
                  })}
                  key={index}
                >
                  <label className={css({ float: 'left', margin: '10px 0' })}>
                    <span
                      className={css({
                        marginRight: '10px',
                        paddingBottom: '5px'
                      })}
                    >
                      richtige Antwort
                    </span>

                    <input
                      checked={answer.isCorrect}
                      type={isSingleChoice ? 'radio' : 'checkbox'}
                      onChange={
                        isSingleChoice
                          ? this.handleRadioButtonChange(index)
                          : this.handleCheckboxChange(index)
                      }
                    />
                  </label>

                  <ScMcChoiceEditable key={index} index={index} {...this.props}>
                    <Editable id={answer.id} />
                  </ScMcChoiceEditable>
                  {answer.feedback ? (
                    <ScMcFeedback>
                      <Editable id={answer.feedback} />
                    </ScMcFeedback>
                  ) : null}
                </div>
              )
            })}

            <div
              className={css({
                textAlign: 'center'
              })}
            >
              <button
                onClick={this.addButton}
                className={css({
                  borderRadius: '50%',
                  outline: 'none',
                  width: '35px',
                  height: '35px',
                  border: 'none',
                  margin: 'auto'
                })}
              >
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
          </React.Fragment>
        )}
      </React.Fragment>
    )
  }
}
