import React from "react"
const User = (props) => {
    const {user} = props
    const {name, username ,email ,address ,id} = user

    return(
        <div className='robcard'>
        <img src={`https://robohash.org/${id}?size=150x150`} alt={name}/>
        <h4 style={{margin:'0px'}}> {name} </h4>
        <h4 style={{margin:'0px'}}> {username} </h4>
        <h4 style={{margin:'0px'}}> {email} </h4>
        <p style={{margin:'0px'}}> {address.city} </p>
        <hr/>
        </div>
    )
}

export default User;
