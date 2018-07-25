import * as React from 'react'

import 'font-awesome/css/font-awesome.css'

// The editor core
import { EditorConsumer } from '@splish-me/editor/dist/contexts'
import {
  Editable,
  createEditableIdentifier
} from '@splish-me/editor/dist/editable.component'
import { Editor as E } from '@splish-me/editor/dist/editor.component'
import { HTMLRenderer } from 'ory-editor-renderer'

import 'ory-editor-core/lib/index.css' // we also want to load the stylesheets

// Require our ui components (optional). You can implement and use your own ui too!
import { Trash, DisplayModeToggle, Toolbar } from 'ory-editor-ui'
import 'ory-editor-ui/lib/index.css'

import slate from 'ory-editor-plugins-slate'
import 'ory-editor-plugins-slate/lib/index.css'
import divider from 'ory-editor-plugins-divider'
import 'ory-editor-plugins-divider/lib/index.css'
import spacer from 'ory-editor-plugins-spacer'
import 'ory-editor-plugins-spacer/lib/index.css'
import image from 'ory-editor-plugins-image'
import 'ory-editor-plugins-image/lib/index.css'
import video from 'ory-editor-plugins-video'
import 'ory-editor-plugins-video/lib/index.css'

import spoiler from '@serlo-org/ory-editor-plugins-spoiler/src'
import '@serlo-org/ory-editor-plugins-spoiler/src/index.css'
import infobox from '@serlo-org/ory-editor-plugins-infobox/src'
import infoboxRender from '@serlo-org/ory-editor-plugins-infobox/src/index.render'
import '@serlo-org/ory-editor-plugins-infobox/src/index.css'
import highlight from '@serlo-org/ory-editor-plugins-highlight/src'
import highlightRender from '@serlo-org/ory-editor-plugins-highlight/src/index.render'
import '@serlo-org/ory-editor-plugins-highlight/src/index.css'
import geogebra from '@serlo-org/ory-editor-plugins-geogebra/src'
import geogebraRender from '@serlo-org/ory-editor-plugins-geogebra/src/index.render'
import '@serlo-org/ory-editor-plugins-geogebra/src/index.css'
import scButton from '@serlo-org/ory-editor-plugins-scexercise/src'
import scButtonRender from '@serlo-org/ory-editor-plugins-scexercise/src/index.render'
import '@serlo-org/ory-editor-plugins-scexercise/src/index.css'

require('react-tap-event-plugin')() // react-tap-event-plugin is required by material-ui which is used by ory-editor-ui so we need to call it here

// Define which plugins we want to use. We only have slate and parallax available, so load those.
const editorPlugins = {
  content: [
    slate(),
    spacer,
    image,
    video,
    divider,
    geogebra,
    highlight,
    scButton
  ],
  layout: [infobox({ defaultPlugin: slate() })]
}

const renderPlugins = {
  content: [
    slate(),
    spacer,
    image,
    video,
    divider,
    geogebraRender,
    highlightRender,
    scButtonRender
  ],
  layout: [infoboxRender({ defaultPlugin: slate() })]
}

export class Renderer {
  constructor(content) {
    this.content = content
    // this.editor = new Editor({
    //   plugins: editorPlugins,
    //   // pass the content state - you can add multiple editables here
    //   editables: [content]
    // })
  }

  renderContainer(children) {
    return (
      <E defaultPlugin={slate()} plugins={editorPlugins.content}>
        {children}
      </E>
    )
  }

  renderEditable() {
    return (
      <Editable id={createEditableIdentifier()} initialState={this.content} />
    )
  }

  renderControls() {
    return (
      <EditorConsumer>
        {({ editor }) => {
          console.log(editor)
          return (
            <React.Fragment>
              <Trash editor={editor} />
              <DisplayModeToggle editor={editor} />
              <Toolbar editor={editor} />
            </React.Fragment>
          )
        }}
      </EditorConsumer>
    )
  }

  renderHTMLRenderer() {
    return <HTMLRenderer state={this.content} plugins={renderPlugins} />
  }
}
