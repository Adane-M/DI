const User = (props) => {
  const {user} = props;
  const {name, username, email, address, id} = user;
  return (
    <div className="tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5">
      <img src={`https://robohash.org/${id}?size=150x150`} />
      <h5>{name}</h5>
      <p>{username}</p>
      <p>{email}</p>
      <p>{props.user.address.city}</p>
    </div>
  )
}
export default User;
