import React  from "react";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <div className="navbar-brand">
                    Картриджи
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <NavLink to='/' className='nav-link'>Главная</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to='/order' className='nav-link'>Заказать картридж</NavLink>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navigation