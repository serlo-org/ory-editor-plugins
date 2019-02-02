import { Plugin } from '@serlo/editor-plugins-registry'
import {
  createStateForContentPlugin,
  renderEditor,
  renderRenderer
} from '@serlo/storybook-helpers'
import { createDocumentIdentifier } from '@splish-me/editor'
import { storiesOf } from '@storybook/react'
import { createEmptyState } from 'ory-editor-core'
import * as React from 'react'

const plugin = Plugin.Hint

storiesOf('Hint', module)
  .add('Editable (initial state)', () => {
    const content = createStateForContentPlugin({ plugin })

    return renderEditor(content)
  })
  .add('Editable (w/ state)', () => {
    const content = createStateForContentPlugin({
      plugin,
      initialState: {
        title: 'Foobar',
        content: createDocumentIdentifier()
      }
    })
    return renderEditor(content)
  })

  .add('Renderer', () => {
    const content = createStateForContentPlugin({
      plugin,
      initialState: {
        title: 'Foobar',
        content: {
          type: '@splish-me/editor-core/editable',
          state: createStateForContentPlugin({
            plugin,
            initialState: {
              title: 'Inner',
              content: {
                type: '@splish-me/editor-core/editable',
                state: createEmptyState()
              }
            }
          })
        }
      }
    })

    return renderRenderer(content)
  })
