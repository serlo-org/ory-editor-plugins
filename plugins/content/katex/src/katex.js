import React from 'react'
import MathComponent from './mathComponent'
import Form from './Form'

const Katex = props => {
  const { attributes, children, node } = props
  const { data } = node
  const formula = data.get('formula')
  const inline = data.get('inline')

  return (
    <span className={inline ? 'katex' : 'katex-inline'} {...attributes}>
      <MathComponent formula={formula} inline={inline} />
      <Form formula={formula} inline={inline} {...props} />
      {children}
    </span>
  )
}

export default Katex
