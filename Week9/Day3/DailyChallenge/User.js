const User = (props) => {
    const {user} = props
    const {name, username ,email ,address ,id} = user

    return(
        <div className="tac bcg br">
        <h2> user info: </h2>
        <img src={`https://robohash.org/${id}?size=150x150`} alt={name}/>
        <h2> {name} </h2>
        <h2> {username} </h2>
        <h2> {email} </h2>
        <p> {address.city} </p>

        </div>
    )
}

export default User;
