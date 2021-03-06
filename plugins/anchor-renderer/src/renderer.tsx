import { styled } from '@serlo/editor-ui'
import * as React from 'react'

import { AnchorPluginState } from '.'

const Anchor = styled.div({
  visibility: 'hidden'
})

export class AnchorRenderer extends React.Component<AnchorRendererProps> {
  render() {
    return <Anchor id={this.props.state.id} />
  }
}

export interface AnchorRendererProps {
  state: AnchorPluginState
}
