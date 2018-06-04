import { storiesOf } from '@storybook/react'
import * as React from 'react'

import {
  createStateForContentPlugin,
  renderEditable,
  renderHTMLRenderer
} from '../../../../.storybook/helpers'
import plugin from '.'

storiesOf('Markdown', module)
  .add('Editable (initial state)', () => {
    const content = createStateForContentPlugin({ plugin })

    return renderEditable(content)
  })
  .add('Editable (w/ state)', () => {
    const content = createStateForContentPlugin({
      plugin,
      initialState: {
        src: `| col1 | col2 |
| ------ | ----------- |
| ex1 | longer text than the rest |
| some more lines | |
| empty second |`
      }
    })
    return renderEditable(content)
  })
  .add('Renderer', () => {
    const content = createStateForContentPlugin({
      plugin,
      initialState: {
        src: `| col1 | col2 |
| ------ | ----------- |
| ex1 | longer text than the rest |
| some more lines | |
| empty second |`
      }
    })

    return renderHTMLRenderer(content)
  })