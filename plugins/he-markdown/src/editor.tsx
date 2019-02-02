import * as React from 'react'
import {
  HeMarkdownPluginState,
  HeMarkdownRenderer,
  HeMarkdownRendererProps
} from '@serlo/editor-plugin-he-markdown-renderer'

export interface HeMarkdownEditorProps extends HeMarkdownRendererProps {
  focused?: boolean
  readOnly?: boolean
  onChange: (state: Partial<HeMarkdownPluginState>) => void
}

export class HeMarkdownEditor extends React.Component<HeMarkdownEditorProps> {
  render() {
    return (
      <React.Fragment>
        <HeMarkdownRenderer {...this.props} />
      </React.Fragment>
    )
  }
}
