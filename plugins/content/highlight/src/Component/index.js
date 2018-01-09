import React, { Component } from "react";
import Input from "./Input";
import SyntaxHighlight from "react-syntax-highlighter";
import { light } from "react-syntax-highlighter/styles/prism";

class Highlight extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: "var test = true //nice"
        }
    }

    setText(text) {
        this.setState({
            text,
        });
    }

    render() {
        const { text } = this.state;
        const { readOnly } = this.props;

        return (
            <div>
                { readOnly 
                    ? <SyntaxHighlight language="javascript" style={light}>{text}</SyntaxHighlight>
                    : <Input saveText={(val) => this.setText(val)}/> }
            </div>
        );
    }
}

export default Highlight;