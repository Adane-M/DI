import React from "react";

import Form from "./Form";

class Formsubmit extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            destination: "",
            nutsFree: false,
            lactoseFree: false,
            isVegan: false
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const { value, name, type, checked } = e.target;

        if (type === "checkbox") {
            this.setState({ [name]: checked })
        } else {
            this.setState({ [name]: value });
        }
    }

    render() {
        return <Form handleChange={this.handleChange} {...this.state} />;
    }
}

export default Formsubmit;