import { getAllPokemons } from "../../services";

export const getPokemons = () => {
    return async (dispatch) => {
        try {
            const response = await getAllPokemons()
            console.log(response)
            return dispatch({type: 'GET_POKEMONS', payload: response})
        } catch (error) {
            console.log(error)
        }
    }
}