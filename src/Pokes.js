import poke from "./poke";
const Pokes = () => {
    return (
        <div>
            {poke.results.map(item => (
                <>
                <p>Pokemon name: {item.name}</p>
                    <img src="https://pokeapi.co/api/v2/pokemon/208/" alt=""/>
                </>
            ))}
        </div>
    )
}
export default Pokes;