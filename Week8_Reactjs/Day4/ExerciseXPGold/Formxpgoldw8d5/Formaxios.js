import axios from "axios";
import React from "react";

class Formaxios extends React.Component {
    constructor() {
        super();
        this.state = {
            userid: '',
            title: '',
            body: ''
        }
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }

handlesubmit=(e)=>{
let {userid,title, body} = this.state;
    e.preventDefault();
let user = {
    userid: userid,
    title:title,
    body:body
};
axios.post('https://jsonplaceholder.typicode.com/posts',{user})
.then(res => {
    console.log(res);
    console.log(res.data);
})
}
    render() {
        return (
            <>
                <form onSubmit={this.handlesubmit}>
                    <input type='text' name="userid" placeholder="userid" onChange={this.handleChange} />
                    <input type='text' name="title" placeholder="title" onChange={this.handleChange} />
                    <input type='text' name="body" placeholder="body" onChange={this.handleChange} />
                    <button type="submit">Submit</button>
                </form>
            </>
        )
    }
}

export default Formaxios;