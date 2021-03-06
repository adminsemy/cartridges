import React  from "react";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <div className="navbar-brand">
                    Картриджи
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink to='/' className='nav-link'>Главная</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/printers' className='nav-link'>Принтеры</NavLink>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navigation