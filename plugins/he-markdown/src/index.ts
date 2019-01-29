
import {
  HeMarkdownPluginState,
  HeMarkdownRenderer
} from '@serlo/editor-plugin-he-markdown-renderer'

import { HeMarkdownEditor } from './editor'
import { Plugin, createDocumentIdentifier } from '@splish-me/editor'

export const heMarkdownPlugin: Plugin<HeMarkdownPluginState> = {
  Component: HeMarkdownEditor,
  text: 'Formatted Text',

  createInitialState: (): HeMarkdownPluginState => ({
    content: "use *formatted* text here!"
  })
}