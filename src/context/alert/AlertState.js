import React from "react";
import { useReducer } from "react";
import { HIDE_ALERT, SHOW_ALERT } from "../types";
import { AlertContext } from "./AlertContext";
import { AlertReducer } from "./AlertReducer";

export const AlertState = ({children}) => {
    const [alert, setAlert] = useReducer(AlertReducer, null);
    const hide = () => {
        setAlert({
            type: HIDE_ALERT,
        });
    }
    const show = (text, type = 'secondary') => {
        setAlert({
            type: SHOW_ALERT,
            payload: {type, text},
        });
    }

    return(
        <AlertContext.Provider value={{
            hide,
            show,
            alert,
        }}>
            {children}
        </AlertContext.Provider>
    )
}