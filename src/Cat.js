import axios from "axios";
import {useEffect, useState} from "react";


const Cat = () =>{
    const [cats, setCats] = useState([])
    const [cat, setCat] = useState({})
    const handleChange = (e) => {
        const selected = cats.find(el => el.id === e.target.value)
        setCat(selected)
    }
    useEffect(() =>{
        axios('https://api.thecatapi.com/v1/breeds')
            .then(({data}) => setCats(data))
    },[])
    return (
        <div>
            {
                <div>
                <select onChange={handleChange}>
                    <option selected disabled>Choose...</option>
                    {
                        cats.map(item =>(
                            <option value={item.id}>{item.name}</option>
                        ))
                    }
                </select>
                        <div>
                            <img src={cat.image?.url} alt="" width='300'/>
                            <div>Name: {cat.name}</div>
                            <div>Description: {cat.description}</div>
                        </div>
                </div>
            }
        </div>
    )
}
export default Cat;