import { storiesOf } from '@storybook/react'
import {
  createStateForContentPlugin,
  renderEditor,
  renderRenderer
} from '@serlo/storybook-helpers'

import { Plugin } from '@serlo/editor-plugins-registry'

const plugin = Plugin.HeMarkdown

storiesOf('HE Markdown', module)
  .add('Editable (initial state)', () => {
    const content = createStateForContentPlugin({ plugin })
    return renderEditor(content)
  })
  .add('Editable (w/ state)', () => {
    const content = createStateForContentPlugin({
      plugin,
      initialState: {
        content: 'Markdown Hello!'
      }
    })
    return renderEditor(content)
  })
