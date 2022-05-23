import { FINISH_LOAD, START_LOAD } from "../actions/actionsType"

const initialState =  {
    loading: false,
}

export default function generalState(state = initialState, action) {
    switch (action.type) {
        case START_LOAD:
            return {
                ...state, loading: true
            }
        case FINISH_LOAD:
            return {
                ...state, loading: false
            }
        default:
            return state
    }
}