const initialState = {
    pokemons: []
}


export default function rootReducer(state = initialState, { type, payload, token }){
    switch (type) {
        case 'GET_POKEMONS':
            return{
                ...state,
                pokemons: payload
            }
        default:
            return {...state}
    }
}