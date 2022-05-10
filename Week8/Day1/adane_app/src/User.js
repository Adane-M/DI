{/*
const User = (props) => {
    return (
        //we can use close Tags without a div , but most importent is to send your data in a parent tag
        <>
            <h2> user info:</h2>
            <h2> {props.name}</h2>
            <h2> {props.email}</h2>
        </>
    )
}

using depractes
*/}

const User = (props) => {
    const {user} = props
    const {name, username ,email ,address ,id} = user

    return(
        <>
        
        <h2> user info: </h2>
        <img src={`https://robohash.org/${id}?size=150x150`} alt={name}/>
        <h2> {name} </h2>
        <h2> {username} </h2>
        <h2> {email} </h2>
        <h2> {props.user.address.city} </h2>

        </>
    )
}




export default User;