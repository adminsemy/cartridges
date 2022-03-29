import React from "react";

export const CartridgeForm = ({cartridge, colorCartridges}) => {
    
    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const test = (event) => {
        const target = event.target;
        console.log(target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-floating">
                    <input type="text"
                        name="name"
                        className="form-control"
                        id="cartridgeNameInput"
                        defaultValue={cartridge.name}
                        onChange={test}
                    ></input>
                    <label htmlFor="cartridgeNameInput">Имя картриджа</label>
                </div>
                <div className="form-floating">
                    <input type="text"
                        name="producer"
                        className="form-control"
                        id="cartridgeProducerInput"
                        defaultValue={cartridge.producer}
                        onChange={test}
                ></input>
                    <label htmlFor="cartridgeProducerInput">Бренд</label>
                </div>
                <div className="form-floating">
                    <input type="text"
                        name="nameExcel"
                        className="form-control"
                        id="cartridgeNameExcelInput"
                        defaultValue={cartridge.nameExcel}
                        onChange={test}
                    ></input>
                    <label htmlFor="cartridgeNameExcelInput">Имя в Excel</label>
                </div>
                <div className="form-floating">
                    <select 
                        name="colorCartridge"
                        className="form-select"
                        id="colorCartridgeSelect"
                        aria-label="Floating label select example"
                        defaultValue={cartridge.color}
                        onChange={test}
                    >
                        {colorCartridges.map((color) => {
                            return (
                                <option
                                    key={color.id}
                                    value={color.id}
                                >{color.name}</option>)
                        })}
                    </select>
                    <label htmlFor="floatingSelect">Цвет картриджа</label>
                </div>
                <button value="Отправить" onClick={test} />
            </form>
        </div>
    )
}