import React, { Component } from 'react'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'

export default class PluginComponent extends Component {
  state = { hidden: true }

  onToggle = () => {
    this.setState({ hidden: !this.state.hidden })
  }

  render() {
    const { state, children, readOnly, onChange } = this.props
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div className="ory-plugins-layout-spoiler">
          <div
            className="ory-plugins-layout-spoiler-toggle"
            onClick={this.onToggle}
          >
            {this.state.hidden ? (
              <span className="fa fa-caret-square-o-down" />
            ) : (
              <span className="fa fa-caret-square-o-up" />
            )}
            {readOnly ? (
              state.title
            ) : (
              <TextField
                className="ory-plugins-layout-spoiler-toggle-title"
                floatingLabelStyle={{ color: 'black' }}
                disabled={readOnly}
                onChange={e => onChange({ title: e.target.value })}
                value={state.title}
                hintText="Your Title Here"
                floatingLabelText="Title"
              />
            )}
          </div>

          <div
            className="ory-plugins-layout-spoiler-content"
            style={{
              display: this.state.hidden && readOnly ? 'none' : 'block'
            }}
          >
            {children}
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}
