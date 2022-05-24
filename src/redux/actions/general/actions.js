import { FINISH_LOAD, MODAL_FINISH_LOAD, MODAL_START_LOAD, START_LOAD } from "../actionsType"

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

export const modalStartLoad = () => {
    return {
        type: MODAL_START_LOAD
    }
}

export const modalFinishLoad = () => {
    return {
        type: MODAL_FINISH_LOAD
    }
}