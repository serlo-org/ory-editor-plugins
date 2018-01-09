import React, { Component } from "react";

class Input extends Component {
    passText(evt) {
        evt.preventDefault();

        this.props.saveParams(this.text.value, this.language.value);
    }

    render() {
        const style = {
            textarea: {
                height: '250px',
                width: '100%',
                padding: '5px'
            },
            submit: {
                position: 'absolute',
                right: '0',
                backgroundColor: '#95bc1a',
                borderColor: '#83a617',
                color: 'white'
            },
            language: {
                marginRight: '5px'
            }
        }

        return (
            <form onSubmit={(evt) => this.passText(evt)}>
                <div>
                    <textarea 
                        style={style.textarea}
                        ref={(text) => this.text = text}
                        placeholder="Paste your sourcecode here...">
                    </textarea>
                </div>
                <input type="text" 
                       placeholder="Language"
                       style={style.language}
                       ref={(language) => this.language = language}/>
                <a href="https://github.com/conorhastings/react-syntax-highlighter/blob/master/AVAILABLE_LANGUAGES_HLJS.MD" target="_blank">Available languages</a>
                <button style={style.submit}>Save</button>
            </form>
        );
    }
}

export default Input;