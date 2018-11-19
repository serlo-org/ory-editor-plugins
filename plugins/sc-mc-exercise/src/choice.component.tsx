import * as R from 'ramda'
import * as React from 'react'
import { css, cx } from 'emotion'
import { createEditableIdentifier } from '@splish-me/editor-core/lib/editable.component'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faPlus } from '@fortawesome/free-solid-svg-icons'
import { Answer } from './renderer.component'

export interface ChoiceProps {
  index: number
  state: { answers: Answer[] }
  onChange: (o: any) => null
  readOnly: boolean
  onClick: (event: any) => null
  selected: boolean
  showFeedback: boolean
  focused: boolean
}
export class ScMcChoice extends React.Component<ChoiceProps> {
  render() {
    const {
      readOnly,
      state,
      children,
      index,
      onClick,
      selected,
      showFeedback,
      focused
    } = this.props
    // FIXME:
    const { isCorrect, feedback } = state.answers[index]

    return (
      <React.Fragment>
        {!readOnly && focused ? (
          <div
            className={css({
              float: 'right'
            })}
          >
            <button
              onClick={this.removeAnswer}
              style={{ marginRight: '5px' }}
              className="btn btn-default"
            >
              <FontAwesomeIcon icon={faTrashAlt} />
            </button>
            {isCorrect ? null : (
              <button onClick={this.addFeedback} className="btn btn-default">
                {feedback ? (
                  <span>
                    <FontAwesomeIcon icon={faTrashAlt} /> Feedback
                  </span>
                ) : (
                  <span>
                    <FontAwesomeIcon icon={faPlus} /> Feedback
                  </span>
                )}
              </button>
            )}
          </div>
        ) : null}
        <div
          className={cx(
            'btn',
            css({
              borderBottom: '3px solid transparent',
              minWidth: '20px',
              backgroundColor: showFeedback
                ? isCorrect
                  ? '#95bc1a'
                  : 'red'
                : selected
                  ? '#d9edf7'
                  : '#f8f8f8',
              margin: '5px 0 0',
              paddingLeft: '5px',
              paddingTop: '10px',
              boxShadow: 'none',
              transition: 'background-color 0.5s ease',
              '&:hover': {
                borderBottom:
                  isCorrect && showFeedback ? undefined : '3px solid #d9edf7'
              },
              cursor:
                isCorrect && showFeedback ? 'default !important' : undefined
            })
          )}
          onClick={isCorrect && showFeedback ? null : onClick}
        >
          {children}
        </div>
      </React.Fragment>
    )
  }
  handleCheckboxChange = event => {
    const target = event.target

    // TODO: only needed when we have radio button, too
    const value = target.type === 'checkbox' ? target.checked : target.value

    const { state, onChange, index } = this.props

    const newAnswer = {
      ...state.answers[index],
      isCorrect: value
    }

    onChange({
      answers: R.update(index, newAnswer, state.answers)
    })
  }

  addFeedback = event => {
    const { state, onChange, index } = this.props
    const newAnswer = {
      ...state.answers[index],
      feedback: state.answers[index].feedback
        ? null
        : createEditableIdentifier()
    }
    onChange({
      answers: R.update(index, newAnswer, state.answers)
    })
  }

  removeAnswer = event => {
    const { state, index, onChange } = this.props
    onChange({
      answers: R.remove(index, 1, state.answers)
    })
  }
}