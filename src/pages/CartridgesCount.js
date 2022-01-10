import React from "react";
import { getCartridges } from "../axios/cartridges";

export const CartridgesCount = () => {
    const cartridges = getCartridges();
    console.log(cartridges);
    return (
        <div>
            <h1>Hello CartridgesCount!</h1>
        </div>
    )
}