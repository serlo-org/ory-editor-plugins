import InfoIcon from 'material-ui-icons/Code'
import React from 'react'

import MarkdownTablePlugin from './Component'
import plugin from './plugin'

export default {
  ...plugin,
  Component: MarkdownTablePlugin,
  IconComponent: <InfoIcon />,
  text: 'Markdown Table'
}
