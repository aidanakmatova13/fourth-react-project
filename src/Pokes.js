import {useEffect, useState} from "react";
import axios from "axios";


const Pokes = () => {
    const [pokemon, setPokemon] = useState([])
    const [search, setSearch] = useState('')
    const filteredPokemons = pokemon.filter(el => el.name.toLowerCase().includes(search))

    useEffect(() =>{
        axios('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json')
            .then(res => setPokemon(res.data.pokemon))
    },[])
    const handleSearch =(e)=>{
        setSearch(e.target.value.toLowerCase())
    }

    return (
        <div>
            <input type="text" onChange={handleSearch} className='search'/>
            <div className='row'>
                {
                    filteredPokemons.map(item  => (
                            <div className='col-3'>
                                <img src={item.img} alt="" width='200'/>
                                <p>{item.name}</p>
                            </div>
                        )
                    )
                }
            </div>
        </div>
    )

}

export default Pokes;