import { FINISH_LOAD, MODAL_FINISH_LOAD, MODAL_START_LOAD, START_LOAD } from "../actions/actionsType"

const initialState =  {
    loading: false,
    modal_loading: false
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
        case MODAL_START_LOAD:
            return {
                ...state, modal_loading: true
            }
        case MODAL_FINISH_LOAD:
            return {
                ...state, modal_loading: false
            }
        default:
            return state
    }
}