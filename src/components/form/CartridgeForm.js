import { Field } from "redux-form";
import { reduxForm } from "redux-form";


let CartridgeForm = (props) => {
    const {handleSubmit, 
        colorCartridges,
        pristine,
        submitting} = props

    return (
        <div>
            <form onSubmit={handleSubmit}>
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
                    <Field type="text"
                        name="minimum"
                        className="form-control"
                        id="cartridgeNameExcelInput"
                        component="input"
                    ></Field>
                    <label htmlFor="cartridgeNameExcelInput">Минимум должно быть на складе</label>
                </div>
                <div className="form-floating">
                    <Field type="text"
                        name="all"
                        className="form-control"
                        id="cartridgeNameExcelInput"
                        component="input"
                        disabled
                    ></Field>
                    <label htmlFor="cartridgeNameExcelInput">Всего</label>
                </div>
                <div className="form-floating">
                    <Field 
                        name="color"
                        className="form-select"
                        id="colorCartridgeSelect"
                        component="select"
                    >
                        <option disabled value="">Выберите цвет</option>
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
                <button type="submit" className="btn btn-success" disabled={pristine || submitting}>Сохранить</button>
            </form>
        </div>
    )
}

CartridgeForm = reduxForm({form: 'Cartridge'})(CartridgeForm)


export default CartridgeForm