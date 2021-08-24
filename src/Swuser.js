import swusers from "./swusers";
import {useState} from "react";
import user from "./user";

const Swuser = () =>{
    const [userid, setId] = useState(`${swusers}`)
    const [userName, setUserName] = useState("")
    const handleId = () =>{
        setId({swusers})
    }
    const show = () =>{
        console.log(user.name)
    }
    return(
        <div>
            <input onChange={handleId} type="number"/>
            <button onClick={show}>Вывести</button>
            <div>{userName}</div>
        </div>
    )
}
export default Swuser;