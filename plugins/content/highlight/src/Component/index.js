import React, { Component } from "react";
import Input from "./Input";
import SyntaxHighlight from "react-syntax-highlighter";
import { light } from "react-syntax-highlighter/styles/prism";

class Highlight extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: "Switch into the edit mode to change this text.",
            language: "text"
        }
    }

    setText(text, language) {
        this.setState({
            text,
            language
        });
    }

    render() {
        const { text, language } = this.state;
        const { readOnly } = this.props;

        return (
            <div>
                { readOnly 
                    ? (<SyntaxHighlight language={language}
                                        style={light}>
                                        {text}
                      </SyntaxHighlight>)
                    : <Input saveParams={(text, language) => this.setText(text, language)}/> }
            </div>
        );
    }
}

export default Highlight;