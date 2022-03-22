import { HIDE_ALERT, SHOW_ALERT } from "../types";

const handlers = {
    [SHOW_ALERT]: (state, action) => action.payload,
    [HIDE_ALERT]: (state, action) => null,
    DEFAULT: (state, action) => state,
};

export const AlertReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT;
    return handler(state, action);
}