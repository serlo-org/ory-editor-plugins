import React, { Component } from "react";
import Input from "./Input";
import SyntaxHighlight from "react-syntax-highlighter";
import { light } from "react-syntax-highlighter/styles/prism";

class Highlight extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: "Switch into edit mode then paste your sourcecode here...",
            language: "text",
            lineNumbers: false
        }
    }

    setText(text, language, lineNumbers) {
        this.setState({
            text,
            language,
            lineNumbers
        });
    }

    render() {
        const { text, language, lineNumbers } = this.state;
        const { readOnly } = this.props;

        return (
            <div>
                { readOnly 
                    ? (<SyntaxHighlight language={language}
                                        showLineNumbers={lineNumbers}
                                        style={light}>
                                        {text}
                      </SyntaxHighlight>)
                    : <Input saveParams={(text, language, lineNumbers) => this.setText(text, language, lineNumbers)}
                             text={text}/> }
            </div>
        );
    }
}

export default Highlight;