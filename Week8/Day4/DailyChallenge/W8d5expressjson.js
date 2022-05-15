import React, { Component } from "react";

class W8d5expressjson extends Component {
    constructor() {
        super();
        this.state = {
            users: [],
            customers: []
        }
    }

    componentDidMount() {
        //users
        fetch('http://localhost:5000/')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({ users: data })
            })

        //customers
        fetch('http://localhost:5000/api/customers/')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({ customers: data })
            })
    }

    render() {
        const { users, customers } = this.state;
        return (
            <>

                <h1>ex1 users fetch data from backend port 5000</h1>
                {users.map(item => {
                    return (
                        <ul>
                            <li key={item.id}>User name : {item.username}</li>
                        </ul>
                    )
                })}
                <h1>ex customers fetch data from express backend port 5000/api/costumers</h1>
                {
                    customers.map(item => {
                        return (
                            <>
                                <li key={item.id}> name :{item.firstName} {item.lastName} </li>
                                <hr style={{color:'red',border:'2px solid yellow'}}></hr>
                            </>
                        )
                    })

                }
            </>
        )
    }
}
export default W8d5expressjson;