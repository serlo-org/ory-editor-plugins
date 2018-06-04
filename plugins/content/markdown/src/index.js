import InfoIcon from 'material-ui-icons/Code'
import React from 'react'

import MarkdownPlugin from './Component'
import plugin from './plugin'

export default {
  ...plugin,
  Component: MarkdownPlugin,
  IconComponent: <InfoIcon />,
  text: 'Code Highlight'
}
