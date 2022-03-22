import React from "react";
import { useContext } from "react";
import { AlertContext } from "../context/alert/AlertContext";

export const Alert = () => {
    const {alert, hide} = useContext(AlertContext);

    if (alert === null) {
        return null;
    }

    return (
        <div className={`alert alert-${alert.type || 'primary'} alert-dismissible fade show`} role="alert">
            {alert.text}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={hide}></button>
        </div>
    );
}