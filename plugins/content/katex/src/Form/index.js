import React, { Component } from 'react'

import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import Checkbox from 'material-ui/Checkbox'
import debounce from 'lodash.debounce'
import Portal from 'react-portal'
import position from 'selection-position'
import { darkBlack } from 'material-ui/styles/colors'

class Form extends Component {
  constructor(props) {
    super(props)
    const { formula, inline } = this.props
    this.state = {
      formula: formula,
      inline: inline
    }
    this.renderMath = debounce(this.renderMath, 500)
  }

  componentWillReceiveProps(nextProps) {
    const { formula, inline } = nextProps
    this.setState({
      formula: formula,
      inline: inline
    })
  }

  handleFormulaChange = (e, newFormula) => {
    this.setState({
      formula: newFormula
    })

    this.renderMath(newFormula)
  }

  handleInlineChange = (e, inline) => {
    this.setState({
      inline: inline
    })
    const { editor, node } = this.props
    const { key } = node
    const next = editor
      .getState()
      .transform()
      .setNodeByKey(key, {
        data: {
          formula: this.state.formula,
          inline: inline
        }
      })
      .apply()

    editor.onChange(next)
    this.focusTextfield()
  }

  renderMath = newFormula => {
    const { editor, node } = this.props
    const { key } = node

    const next = editor
      .getState()
      .transform()
      .setNodeByKey(key, {
        data: {
          formula: newFormula,
          inline: this.state.inline
        }
      })
      .apply()

    editor.onChange(next)
    this.focusTextfield()
  }

  focusTextfield = () => {
    setTimeout(() => {
      this.input && this.input.focus()
    }, 0)
  }

  handleOpen = portal => {
    const textfield = portal.firstChild
    const { top } = position()
    textfield.style.opacity = 1
    textfield.style.top = `${top + window.scrollY - textfield.offsetHeight}px`
    textfield.style.left = `${document.body.clientWidth / 2 -
      textfield.offsetWidth / 2}px`
  }

  focusReference = input => {
    if (input) this.input = input
  }

  render() {
    const { node, state } = this.props
    const isActive = state.isFocused && state.selection.hasEdgeIn(node)

    return (
      <Portal isOpened={isActive} onOpen={this.handleOpen}>
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <div
            className="ory-prevent-blur ory-plugins-content-slate-inline-toolbar"
            style={{
              display: 'inline-block',
              border: `${darkBlack} 1px solid`,
              borderRadius: '4px 4px 0',
              backgroundColor: darkBlack,
              padding: '0 12px'
            }}
          >
            <TextField
              ref={this.focusReference}
              hintText={'\\frac{1}{2}'}
              floatingLabelText="Formula"
              inputStyle={{ color: 'white' }}
              floatingLabelStyle={{ color: 'white' }}
              hintStyle={{ color: 'grey' }}
              style={{ width: '800px' }}
              value={this.state.formula}
              onChange={this.handleFormulaChange}
            />

            <Checkbox
              checked={this.state.inline}
              label="Show as inline element"
              labelStyle={{ color: 'white' }}
              iconStyle={{ fill: 'white' }}
              style={{ margin: '10px' }}
              onCheck={this.handleInlineChange}
            />
          </div>
        </MuiThemeProvider>
      </Portal>
    )
  }
}

export default Form
