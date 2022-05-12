import React from "react";
import Form from '../Form';

class Appclient extends React.Component {
    constructor() {
        super();
        this.state = {
            msg: '',
            formmsg: ''
        }
    }
    componentDidUpdate() {
        this.handleSubmit = (e) => {
            e.preventDefault();
            fetch('http://localhost:5000/api/world', {
                method: 'post',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({ msg: 'gdsafg' })
            })
                // console.log(res);
                .then(res => res.text())
                .then(data => {
                    console.log(data);
                    this.state.formmsg += data;
                })
                .catch(err => console.log(err)

                )
        }
    }


    componentDidMount() {
        try {
            fetch('http://localhost:5000/api/hello')
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    this.setState({ msg: data })
                })
        } catch (err) {
            console.log('Error from component did mount', err);
        }
    }

    render() {
        const { msg, formmsg } = this.state;
        return (
            <>
                <h1>{msg.hello}</h1>
                <Form handleSubmit={this.handleSubmit} />
                <h1>{formmsg.length}</h1>
            </>
        )
    }

}
export default Appclient;