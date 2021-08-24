import poke from "./poke";
const Pokes = () =>{
    return (
        <div>
            {poke.abilities.filter(item => item.ability.name)}
        </div>
    )
}
export default Pokes;