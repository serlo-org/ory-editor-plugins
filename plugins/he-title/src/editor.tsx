import * as React from 'react'
import {
  HeTitlePluginState,
  HeTitleRenderer,
  HeTitleRendererProps
} from '@serlo/editor-plugin-he-title-renderer'

export interface HeTitleEditorProps extends HeTitleRendererProps {
  focused?: boolean
  readOnly?: boolean
  onChange: (state: Partial<HeTitlePluginState>) => void
}

export class HeTitleEditor extends React.Component<HeTitleEditorProps> {
  render() {
    return (
      <React.Fragment>
        <HeTitleRenderer {...this.props} />
      </React.Fragment>
    )
  }
}
