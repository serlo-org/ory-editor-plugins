
import {
  HeHeadingPluginState,
  HeHeadingRenderer
} from '@serlo/editor-plugin-he-heading-renderer'

import { HeHeadingEditor } from './editor'
import { Plugin, createDocumentIdentifier } from '@splish-me/editor'

export const heHeadingPlugin: Plugin<HeHeadingPluginState> = {
  Component: HeHeadingEditor,
  text: 'Heading',

  createInitialState: (): HeHeadingPluginState => ({
    caption: createDocumentIdentifier(),
    content: []
  })
}