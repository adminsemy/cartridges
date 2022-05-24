import { COLOR_CARTRIDGES_LOAD_SUCCESS } from "../actions/actionsType"

const initialState =  {
    color_cartridges: []
}

export default function colorCartridgesReducer(state = initialState, action) {
    switch (action.type) {
        case COLOR_CARTRIDGES_LOAD_SUCCESS:
            return {
                ...state, color_cartridges: action.data
            }
    default:
        return state
    }
}