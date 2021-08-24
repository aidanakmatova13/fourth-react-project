import {useEffect, useState} from "react";
import axios from "axios";


const Pokes = () => {
    const [pokemon, setPokemon] = useState([])

    useEffect(() =>{
        axios('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json')
            .then(res => setPokemon(res.data.pokemon))
    },[])

    return <div className='row'>
        {
            pokemon.map(item  => (
                    <div className='col-3'>
                        <img src={item.img} alt="" width='200'/>
                            <p>{item.name}</p>
                    </div>
                )
            )
        }
        </div>
}

export default Pokes;