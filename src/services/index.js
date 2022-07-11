import axios from 'axios';

export const getAllPokemons = async () => {
    try {
       const pokemons = []
       
       for(let i = 1; i <= 905; i++){
        const idReq = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const idRes = idReq.data

        let poke = {
            name: idRes.name,
            id: idRes.id,
            life: idRes.stats[0].base_stat,
            attack: idRes.stats[3].base_stat,
            defense: idRes.stats[4].base_stat,
            speed: idRes.stats[5].base_stat,
            height: idRes.height,
            weight: idRes.weight,
            image: idRes.sprites.other.dream_world.front_default,
            type: idRes.types.map(t => t.type.name)
        };
        pokemons.push(poke)
       }
       console.log(pokemons)
       return pokemons
    } catch (error) {
        console.log(error)
    }
}