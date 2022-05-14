import React from "react";

class Formd5gold extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: ''
        }
    }

    handlechange = (e) => {
        const { name, email } = this.state;
        this.setState({ [e.target.name]: e.target.value });
        console.log('name',name,'email',email);
    }
    handleSubmit = (e) => {
        const { name, email } = this.state;
        e.preventDefault();
        const user = {
            name: name,
            email: email
        };
        fetch('https://jsonplaceholder.typicode.com/users/', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log('data', data);
            })
            .catch(err => console.log('err', err));
    }


    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    USER: <input type='text' name="name" onChange={this.handlechange} />
                    USERMail: <input type='email' name="email" onChange={this.handlechange} />
                    <button type="submit" >Submit</button>
                </form>
            </>
        )
    }
}

export default Formd5gold;