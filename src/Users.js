import users from "./user";

const Users = () =>{
    return(
        <div>
            {
                users.map(user =>{
                    return <p key={user.name}>{user.name}</p>
                })
            }
        </div>
    )
}
export default Users