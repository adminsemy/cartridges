import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export const CartridgeForm = ({cartridge, colorCartridges}) => {
    
    const [currentCartridge, setCurrentCartridge] = useState(cartridge);

    useEffect(() => {
        setCurrentCartridge(cartridge)
    },[cartridge, setCurrentCartridge]);

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const changeCurrentCartridge = (event) => {
        const target = event.target;
        setCurrentCartridge({...currentCartridge,[target.name]: target.value})
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-floating">
                    <input type="text"
                        name="name"
                        className="form-control"
                        id="cartridgeNameInput"
                        defaultValue={currentCartridge.name}
                        onChange={changeCurrentCartridge}
                    ></input>
                    <label htmlFor="cartridgeNameInput">Имя картриджа</label>
                </div>
                <div className="form-floating">
                    <input type="text"
                        name="producer"
                        className="form-control"
                        id="cartridgeProducerInput"
                        defaultValue={currentCartridge.producer}
                        onChange={changeCurrentCartridge}
                ></input>
                    <label htmlFor="cartridgeProducerInput">Бренд</label>
                </div>
                <div className="form-floating">
                    <input type="text"
                        name="nameExcel"
                        className="form-control"
                        id="cartridgeNameExcelInput"
                        defaultValue={currentCartridge.nameExcel}
                        onChange={changeCurrentCartridge}
                    ></input>
                    <label htmlFor="cartridgeNameExcelInput">Имя в Excel</label>
                </div>
                <div className="form-floating">
                    <select 
                        name="color"
                        className="form-select"
                        id="colorCartridgeSelect"
                        value={currentCartridge.color}
                        onChange={changeCurrentCartridge}
                    >
                        {colorCartridges.map((color) => {
                            return (
                                <option 
                                    key={color.id}
                                    value={color.id}
                                    label={color.name}
                                ></option>
                            )
                        })}
                    </select>
                    <label htmlFor="floatingSelect">Цвет картриджа</label>
                </div>
                <button value="Отправить" onClick={changeCurrentCartridge} />
            </form>
        </div>
    )
}