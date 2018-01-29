/* eslint-disable no-alert, prefer-reflect */
import KatexIcon from 'material-ui/svg-icons/editor/functions'
import React from 'react'

import { ToolbarButton } from 'ory-editor-plugins-slate/lib/helpers'
import Plugin from 'ory-editor-plugins-slate/lib/plugins/Plugin'
import Katex from './katex'

import './index.css'

import 'katex/dist/katex.min.css'
export const KATEX_BLOCK = 'KATEX/BLOCK'
export const KATEX_INLINE = 'KATEX/INLINE'

export default class KatexPlugin extends Plugin {
  constructor(props) {
    super(props)

    this.DEFAULT_NODE = props.DEFAULT_NODE
  }

  // eslint-disable-next-line react/display-name
  Button = ({ editorState, onChange }) => {
    const onClick = e => {
      e.preventDefault()

      const hasBlock = editorState.blocks.some(
        block => block.type === KATEX_BLOCK
      )
      const hasInline = editorState.inlines.some(
        (inline: any) => inline.type === KATEX_INLINE
      )

      let newState

      if (hasBlock) {
        newState = editorState
          .transform()
          .deleteBackward()
          .apply()
      } else if (hasInline) {
        newState = editorState
          .transform()
          .deleteBackward()
          .apply()
      } else {
        newState = editorState
          .transform()
          .insertInline({
            type: KATEX_INLINE,
            data: { formula: ' ', inline: true }, //hack... empty string doesn't work. FIXME
            isVoid: true
          })
          .apply()
      }

      onChange(newState)
    }
    /*        const blocks = editorState.blocks.filter((block) => block.type === KATEX_BLOCK)
     const inlineBlocks = editorState.blocks.filter((inline) => inline.type === KATEX_INLINE)
     */

    const hasMath = editorState.blocks.some(block => block.type === KATEX_BLOCK)
    const hasInline = editorState.inlines.some(
      inline => inline.type === KATEX_INLINE
    )

    return (
      <ToolbarButton
        onClick={onClick}
        isActive={hasMath || hasInline}
        icon={<KatexIcon />}
      />
    )
  }

  name = 'katex'

  nodes = {
    [KATEX_BLOCK]: Katex,
    [KATEX_INLINE]: Katex
  }

  toolbarButtons = [this.Button]

  deserialize(el, next) {
    switch (el.tagName.toLowerCase()) {
      case 'katexblock':
        return {
          kind: 'block',
          type: KATEX_BLOCK,
          isVoid: true,
          data: {
            formula: el.childNodes[0].value,
            inline: false
          }
        }
      case 'katexinline':
        return {
          kind: 'inline',
          type: KATEX_INLINE,
          isVoid: true,
          data: {
            formula: el.childNodes[0].value,
            inline: true
          }
        }
    }
  }

  serialize(object, children) {
    switch (object.type) {
      case KATEX_BLOCK:
        return <katexblock>{children}</katexblock>
      case KATEX_INLINE:
        return <katexinline>{children}</katexinline>
    }
  }
}
