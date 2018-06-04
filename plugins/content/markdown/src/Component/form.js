import React from 'react'
import Textarea from 'react-textarea-autosize'

export default ({ src, onChange }) => (
  <form className="ory-editor-markdown-form">
    <div>
      <Textarea
        className="ory-editor-markdown-textarea"
        value={src}
        name="markdown"
        onChange={onChange}
      >
        {src}
      </Textarea>
    </div>
  </form>
)
