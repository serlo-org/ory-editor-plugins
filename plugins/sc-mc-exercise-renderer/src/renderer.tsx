import { styled } from '@serlo/editor-ui'
import * as React from 'react'

import { ScMcRendererInteractive } from './renderer-interactive'
import { ScMcRendererSolution } from './renderer-solution'
import { ScMcExercisePluginState } from '.'

export class ScMcExerciseRenderer extends React.Component<
  ScMcExerciseRendererProps,
  ScMcExerciseRendererState
> {
  state = { mode: Mode.test }
  public render() {
    return (
      <React.Fragment>
        {this.renderRenderer()}
        {this.renderModeButton(Mode.test)}
        {this.renderModeButton(Mode.feedback)}
        {this.renderModeButton(Mode.solution)}
      </React.Fragment>
    )
  }
  private renderRenderer(): React.ReactNode {
    switch (this.state.mode) {
      case Mode.test:
        return (
          <ScMcRendererInteractive
            key="test"
            {...this.props}
            nextButtonStateAfterSubmit={({ button, mistakes }) => {
              return {
                selected: mistakes !== 0 ? false : button.selected,
                showFeedback: mistakes !== 0 ? false : button.selected
              }
            }}
          />
        )
      case Mode.feedback:
        return (
          <ScMcRendererInteractive
            key="feedback"
            {...this.props}
            getFeedback={({ mistakes, missingSolutions }) => {
              if (mistakes > 0 && mistakes === missingSolutions) {
                return 'Fast! Dir fehlt noch mindestens eine richtige Antwort'
              }

              return undefined
            }}
            nextButtonStateAfterSubmit={({ button, answer }) => {
              return {
                selected: button.selected && answer.isCorrect,
                showFeedback: button.selected
              }
            }}
            showFeedback
          />
        )
      case Mode.solution:
        return <ScMcRendererSolution {...this.props} />
    }
  }

  private renderModeButton(mode: Mode): React.ReactNode {
    return (
      <this.ToggleButton
        onClick={() => {
          this.toggleMode(mode)
        }}
        disabled={this.state.mode === mode}
      >
        {mode}
      </this.ToggleButton>
    )
  }

  private toggleMode(mode: Mode) {
    this.setState({ mode })
  }

  private ToggleButton = styled.button({
    float: 'left',
    margin: '10px 0px'
  })
}

export interface ScMcExerciseRendererProps {
  state: ScMcExercisePluginState
}

interface ScMcExerciseRendererState {
  mode: Mode
}

enum Mode {
  test = 'test',
  feedback = 'feedback',
  solution = 'solution'
}
