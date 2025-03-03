const UseCard = ({user}) =>{
    return(
        <div className="card p-3">
            <img src={user.picture.medium} alt="User" className="rounded-circle" width="150" height ="150" />
            <h5>{user.name.first} {user.name.last}</h5>
            <p>{user.email}</p>
        </div>
    )
}
export default UseCard