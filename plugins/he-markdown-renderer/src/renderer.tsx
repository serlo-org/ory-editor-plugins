import * as React from 'react'
import { HeMarkdownPluginState } from '.'

export class HeMarkdownRenderer extends React.Component<
  HeMarkdownRendererProps
> {
  render() {
    return <div>{this.props.state.content}</div>
  }
}

export interface HeMarkdownRendererProps {
  state: HeMarkdownPluginState
}
