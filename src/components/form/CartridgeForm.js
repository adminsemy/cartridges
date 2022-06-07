import { Field } from "redux-form";
import { reduxForm } from "redux-form";


let CartridgeForm = (props) => {
    const {colorCartridges} = props

    return (
        <div>
            <form>
                <div className="form-floating">
                    <Field type="text"
                        name="name"
                        className="form-control"
                        id="cartridgeNameInput"                        
                        component="input"
                    ></Field>
                    <label htmlFor="cartridgeNameInput">Имя картриджа</label>
                </div>
                <div className="form-floating">
                    <Field type="text"
                        name="producer"
                        className="form-control"
                        id="cartridgeProducerInput"                        
                        component="input"
                ></Field>
                    <label htmlFor="cartridgeProducerInput">Бренд</label>
                </div>
                <div className="form-floating">
                    <Field type="text"
                        name="nameExcel"
                        className="form-control"
                        id="cartridgeNameExcelInput"
                        component="input"
                    ></Field>
                    <label htmlFor="cartridgeNameExcelInput">Имя в Excel</label>
                </div>
                <div className="form-floating">
                    <Field 
                        name="color"
                        className="form-select"
                        id="colorCartridgeSelect"
                        component="select"
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
                        
                    </Field>
                    <label htmlFor="floatingSelect">Цвет картриджа</label>
                </div>
                <button type="button" className="btn btn-success" >Сохранить</button>
            </form>
        </div>
    )
}

CartridgeForm = reduxForm({form: 'Cartridge'})(CartridgeForm)


export default CartridgeForm