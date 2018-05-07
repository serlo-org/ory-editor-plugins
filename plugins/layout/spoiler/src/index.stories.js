import { storiesOf } from '@storybook/react'
import slate from 'ory-editor-plugins-slate'
import * as React from 'react'

import {
  createStateForLayoutPlugin,
  renderEditable,
  renderHTMLRenderer
} from '../../../../.storybook/helpers'
import createPlugin from '.'

const defaultPlugin = slate()
const plugin = createPlugin({ defaultPlugin })

const sampleChildren = createStateForLayoutPlugin({
  plugin,
  children: [
    {
      cells: [
        {
          content: {
            plugin: { name: 'ory/editor/core/content/slate' },
            state: {
              importFromHtml:
                '<h2 id="konstruktionsbeispiele">Konstruktionsbeispiele</h2>\n<p>Konstruiere ein Dreieck mit den Seitenlängen <katexinline>a=3\\;cm;\\;\\;\\;b=\\;4\\;cm;\\;\\;c=\\;5\\;cm\\;</katexinline></p>\n<ol>\n<li><p>Zeichne eine Gerade und wähle darauf den Punkt A des Dreiecks aus.</p></li>\n<li><p>Zeichne einen Kreis um A, dessen Radius genauso groß ist wie die Seite c.</p></li>\n<li><p>Der Schnittpunkt der Geraden und des Kreises ist der Eckpunkt B.</p></li>\n<li><p>Zeichne einen Kreis um B, dessen Radius so groß ist wie die Seite a.</p></li>\n<li><p>Zeichne einen Kreis um A, dessen Radius so groß ist wie die Seite b.</p></li>\n<li><p>Der Schnittpunkt der beiden Kreise ist der Punkt C des Dreiecks.</p></li>\n</ol>'
            }
          }
        }
      ]
    }
  ],
  initialState: { title: 'spoiler' }
})

storiesOf('Spoiler', module)
  .add('Editable (w/o children)', () => {
    const content = createStateForLayoutPlugin({
      plugin
    })

    return renderEditable(content)
  })
  .add('Editable (w/ children)', () => {
    const content = sampleChildren

    return renderEditable(content)
  })
  .add('Renderer (w/ children)', () => {
    const content = sampleChildren

    return renderHTMLRenderer(content)
  })
