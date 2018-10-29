import React from 'react'
import { renderIntoSidebar } from '@splish-me/editor-ui/lib/plugin-sidebar.component'
import Textfield from '@splish-me/editor-ui/lib/sidebar-elements/textfield'

import Display from '../Display'

const handleChange = onChange => e => {
  const target = e.target
  if (target instanceof HTMLInputElement) {
    onChange({ src: target.value })
  }
}

const Form = props => (
  <div>
    <Display {...props} />
    {props.focused
      ? renderIntoSidebar(
          <Textfield
            label="Geogebra ID"
            placeholder="1221221"
            onChange={handleChange(props.onChange)}
            value={props.state.src}
          />
        )
      : null}
  </div>
)

export default Form
