import React, { Component } from "react";

class Input extends Component {
    passText(evt) {
        evt.preventDefault();

        console.log(this.props);

        this.props.saveText(this.text.value);
    }

    render() {
        return (
            <form onSubmit={(evt) => this.passText(evt)}>
                <div>
                    <textarea ref={(text) => this.text = text}></textarea>
                </div>

                <button>Fertig</button>
            </form>
        );
    }
}

export default Input;