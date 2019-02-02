import * as React from 'react'
import {
  HeHeadingPluginState,
  HeHeadingRenderer,
  HeHeadingRendererProps
} from '@serlo/editor-plugin-he-heading-renderer'

export interface HeHeadingEditorProps extends HeHeadingRendererProps {
  focused?: boolean
  readOnly?: boolean
  onChange: (state: Partial<HeHeadingPluginState>) => void
}

export class HeHeadingEditor extends React.Component<HeHeadingEditorProps> {
  render() {
    return (
      <React.Fragment>
        <HeHeadingRenderer {...this.props} />
      </React.Fragment>
    )
  }
}
