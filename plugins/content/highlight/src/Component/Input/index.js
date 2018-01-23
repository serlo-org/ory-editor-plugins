import React, { Component } from "react"

class Input extends Component {
    render() {
        const style = {
            textarea: {
                height: '250px',
                width: '100%',
                padding: '5px',
                fontFamily: 'Menlo, Monaco, "Courier New", monospace'
            },
            spaceRight: {
                marginRight: '5px'
            },
        }
        const { text, language, lineNumbers, handleValueChange } = this.props

        return (
            <form>
                <div>
                    <textarea value={text}
                              name="text"
                              onChange={handleValueChange}
                              style={style.textarea}>
                        {text}
                    </textarea>
                </div>
                <span style={{marginRight: '15px'}}>
                    <input type="text"
                           value={language}
                           name="language"
                           onChange={handleValueChange}
                           placeholder="Language"
                           style={style.spaceRight}/>
                    <a href="https://github.com/conorhastings/react-syntax-highlighter/blob/master/AVAILABLE_LANGUAGES_HLJS.MD" target="_blank">Available languages</a>
                </span>
                <span>
                    <input id="lineNumbers"
                           type="checkbox"
                           checked={lineNumbers}
                           name="lineNumbers"
                           onChange={handleValueChange}
                           style={style.spaceRight}/>
                    <label for="lineNumbers" style={{fontWeight: 'normal'}}>Show line numbers</label>
                </span>
            </form>
        )
    }
}

export default Input
