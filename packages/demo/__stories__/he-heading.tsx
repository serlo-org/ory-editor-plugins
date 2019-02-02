import { storiesOf } from '@storybook/react'
const example1 = require('./example_hello_world')
import {
  createStateForContentPlugin,
  renderEditor,
  renderRenderer
} from '@serlo/storybook-helpers'

import { Plugin } from '@serlo/editor-plugins-registry'

const headingPlugin = Plugin.HeHeading
const titlePlugin = Plugin.HeTitle

storiesOf('Heading', module)
  .add('Editable (initial state)', () => {
    const content = createStateForContentPlugin({ plugin: headingPlugin })
    return renderEditor(content)
  })
  .add('Editable (w / state)', () => {
    const content = createStateForContentPlugin({
      plugin: headingPlugin,
      initialState: {
        caption: createStateForContentPlugin({
          plugin: titlePlugin,
          initialState: { content: 'Static Hello!' }
        }),
        content: []
      }
    })
    return renderEditor(content)
  })
  .add('Editable (example)', () => {
    return renderEditor(example1)
  })
  .add('Renderer (example)', () => {
    return renderRenderer(example1)
  })
