import dimensions from '@splish-me/ory-editor-core/lib/components/Dimensions'
import React, { Component } from 'react'
import { v4 } from 'uuid'
import request from 'superagent'
import debounce from 'lodash.debounce'

class Display extends Component {
  constructor(props) {
    super(props)
    this.requestHeight = debounce(this.requestHeight, 500)
  }

  state = {
    id: 'gtApplet' + v4(),
    width: 800,
    height: 500
  }

  componentDidMount() {
    this.mounted = true

    if (this.props.state.src) {
      this.requestHeight(this.props.state)
    }
  }

  componentWillUnmount() {
    this.mounted = false
  }

  requestHeight = ({ src }) => {
    if (cache[src]) {
      this.setState(cache[src])
      return
    }
    const geogebraRequest = JSON.stringify({
      request: {
        '-api': '1.0.0',
        task: {
          '-type': 'fetch',
          fields: {
            field: [{ '-name': 'width' }, { '-name': 'height' }]
          },
          filters: {
            field: [{ '-name': 'id', '#text': src }]
          },
          limit: { '-num': '1' }
        }
      }
    })

    request
      .post('https://www.geogebra.org/api/json.php')
      .send(geogebraRequest)
      .end((err, res) => {
        if (this.mounted && !err && res.ok) {
          const { width, height } = res.body.responses.response.item
          const newState = {
            width: width,
            height: height
          }
          cache[src] = newState
          this.setState(newState)
        }
      })
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.state.src !== nextProps.state.src) {
      this.requestHeight(nextProps.state)
    }
  }

  render() {
    const { containerWidth, state, readOnly } = this.props
    const { src } = state
    const { width, height } = this.state
    return (
      <div>
        { src ? (
          <iframe
            title={src}
            scrolling="no"
            src={
              'https://www.geogebra.org/material/iframe/id/' +
              src
            }
            width="100%"
            height={
              containerWidth
                ? containerWidth * height / width
                : undefined
            }
            style={{
              border: '0px',
              pointerEvents: readOnly ? 'auto' : 'none'
            }}
          />
        ) : (
          <div style={{
            width: '100%',
            textAlign: 'center',
            border: '2px lightgrey solid',
            borderRadius: '4px',
            padding: '10px'
          }}>
            <img src="https://cdn.geogebra.org/static/img/GeoGebra-logo.png" alt="Geogebra" />
          </div>
        )}
      </div>
    )
  }
}

const cache = []
export default dimensions()(Display)
