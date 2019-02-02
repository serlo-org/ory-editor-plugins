import * as React from 'react'
import { HeHeadingPluginState } from '.'
import { Document, DocumentIdentifier } from '@splish-me/editor'

const renderContent = (plugin: DocumentIdentifier) => {
  return (
    <Document
      defaultPlugin="@serlo/editor-plugin-he-markdown"
      state={plugin}
      initialState={plugin}
      key={plugin.id}
    />
  )
}

export class HeHeadingRenderer extends React.Component<HeHeadingRendererProps> {
  render() {
    let caption = this.props.state.caption
    let content = this.props.state.content.map(renderContent)
    let rendered = (
      <section>
        <h2>
          <Document
            defaultPlugin="@serlo/editor-plugin-he-title"
            state={caption}
            initialState={caption}
            key={caption.id}
          />
        </h2>
        {content}
      </section>
    )
    return rendered
  }
}

export interface HeHeadingRendererProps {
  state: HeHeadingPluginState
}
