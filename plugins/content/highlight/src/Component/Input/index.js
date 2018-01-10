import React, { Component } from "react";

class Input extends Component {
    passText(evt) {
        evt.preventDefault();

        this.props.saveParams(this.text.value, this.language.value, this.lineNumbers);
    }

    render() {
        const style = {
            textarea: {
                height: '250px',
                width: '100%',
                padding: '5px',
                fontFamily: 'Menlo, Monaco, "Courier New", monospace'
            },
            submit: {
                position: 'absolute',
                right: '0',
                backgroundColor: '#95bc1a',
                borderColor: '#83a617',
                color: 'white'
            },
            spaceRight: {
                marginRight: '5px'
            },
        }
        const { text } = this.props

        return (
            <form onSubmit={(evt) => this.passText(evt)}>
                <div>
                    <textarea 
                        style={style.textarea}
                        ref={(text) => this.text = text}>
                        {text}
                    </textarea>
                </div>
                <span style={{marginRight: '15px'}}>
                    <input type="text" 
                        placeholder="Language"
                        style={style.spaceRight}
                        ref={(language) => this.language = language}/>
                    <a href="https://github.com/conorhastings/react-syntax-highlighter/blob/master/AVAILABLE_LANGUAGES_HLJS.MD" target="_blank">Available languages</a>
                </span>
                <span>
                    <input id="lineNumbers"
                           type="checkbox"
                           style={style.spaceRight}
                           ref="lineNumbers"
                           onChange={(event) => {this.lineNumbers = event.target.checked}}/>
                    <label for="lineNumbers" style={{fontWeight: 'normal'}}>Show line numbers</label>
                </span>
                <button style={style.submit}>Save</button>
            </form>
        );
    }
}

export default Input;