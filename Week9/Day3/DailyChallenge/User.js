import React from "react"
const User = (props) => {
    const {user} = props
    const {name, username ,email ,address ,id} = user

    return(
        <div className='robcard'>
        <h4> user info: </h4>
        <img src={`https://robohash.org/${id}?size=150x150`} alt={name}/>
        <h4> {name} </h4>
        <h4> {username} </h4>
        <h4> {email} </h4>
        <p> {address.city} </p>

        </div>
    )
}

export default User;
