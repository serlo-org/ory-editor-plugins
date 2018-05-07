import React from 'react'

import uuid from 'uuid'
import Component from './Component'
import FilterFrames from 'material-ui/svg-icons/image/filter-frames'

export default ({ defaultPlugin }) => ({
  Component: Component,
  name: 'ory/editor/core/layout/spoiler',
  version: '0.0.1',

  text: 'Hidden Text',
  IconComponent: <FilterFrames />,

  createInitialChildren: () => ({
    id: uuid(),
    rows: [
      {
        id: uuid(),
        cells: [
          {
            content: {
              plugin: defaultPlugin,
              state: defaultPlugin.createInitialState()
            },
            id: uuid()
          }
        ]
      }
    ]
  })
})
