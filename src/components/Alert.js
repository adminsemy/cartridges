import React from "react";

export const Alert = ({alert}) => {
    return (
        <div className={`alert alert-${alert.type || 'primary'} alert-dismissible fade show`} role="alert">
            {alert.text}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    );
}