import React, { Component } from "react";
import Input from "./Input";
import SyntaxHighlight from "react-syntax-highlighter";
import { light } from "react-syntax-highlighter/styles/prism";

class Highlight extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: "Switch into edit mode then paste your sourcecode here...",
            language: "",
            lineNumbers: false,
        }
    }

    handleValueChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        
        this.setState({
            [name]: value
        });
    }

    render() {
        const { text, language, lineNumbers } = this.state;
        const { readOnly } = this.props;

        return (
            <div>
                { readOnly 
                    ? (<SyntaxHighlight language={language || "text"}
                                        showLineNumbers={lineNumbers}
                                        style={light}>
                                        {text}
                      </SyntaxHighlight>)
                    : <Input handleValueChange={this.handleValueChange.bind(this)}
                             text={text}
                             language={language}
                             lineNumbers={lineNumbers}/> }
            </div>
        );
    }
}

export default Highlight;