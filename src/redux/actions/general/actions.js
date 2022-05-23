import { FINISH_LOAD, START_LOAD } from "../actionsType"

export const startLoad = () => {
    return {
        type: START_LOAD
    }
}

export const finishLoad = () => {
    return {
        type: FINISH_LOAD
    }
}