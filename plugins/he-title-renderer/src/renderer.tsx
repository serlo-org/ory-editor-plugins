import * as React from 'react'
import { HeTitlePluginState } from '.'

export class HeTitleRenderer extends React.Component<HeTitleRendererProps> {
  render() {
    return <div>{this.props.state.content}</div>
  }
}

export interface HeTitleRendererProps {
  state: HeTitlePluginState
}
