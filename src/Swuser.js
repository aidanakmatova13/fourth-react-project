import swusers from "./swusers";
import {useState} from "react";
import user from "./user";

const Swuser = () =>{
    const [userid, setId] = useState(`${swusers.map(user => user.id)}`)
    const [userName, setUserName] = useState("")
    const handleId = () =>{
        setId(user.id)
    }
    const show = () =>{
        console.log(user.name)
    }
    return(
        <div>
            <input onChange={handleId} type="text"/>
            <button onClick={show}>Вывести</button>
            <button>Вывести</button>
            <div>{userName}</div>
        </div>
    )
}
export default Swuser;