import React, { useEffect, useState } from "react";


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
                        value={currentCartridge.name}
                        onChange={() => changeCurrentCartridge()}
                    ></input>
                    <label htmlFor="cartridgeNameInput">Имя картриджа</label>
                </div>
                <div className="form-floating">
                    <input type="text"
                        name="producer"
                        className="form-control"
                        id="cartridgeProducerInput"
                        onChange={() => changeCurrentCartridge()}
                ></input>
                    <label htmlFor="cartridgeProducerInput">Бренд</label>
                </div>
                <div className="form-floating">
                    <input type="text"
                        name="nameExcel"
                        className="form-control"
                        id="cartridgeNameExcelInput"
                        value={currentCartridge.nameExcel || ''}
                        onChange={() => changeCurrentCartridge()}
                    ></input>
                    <label htmlFor="cartridgeNameExcelInput">Имя в Excel</label>
                </div>
                <div className="form-floating">
                    <select 
                        name="color"
                        className="form-select"
                        id="colorCartridgeSelect"
                        value={currentCartridge.color}
                        onChange={() => changeCurrentCartridge()}
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
                <button type="button" className="btn btn-success" onClick={() => handleSubmit()}>Сохранить</button>
            </form>
        </div>
    )
}