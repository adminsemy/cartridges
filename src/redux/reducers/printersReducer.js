import { PRINTERS_FINISH_LOAD, PRINTERS_LOAD_SUCCESS, PRINTERS_START_LOAD } from "../actions/actionsType"

const initialState = {
    printers_loading: false, 
    printers_table_column_names: [
        {id: 'id', name: 'ID'},
        {id: 'name', name: 'Имя'},
        {id: 'cartridges', name: 'Картриджи для принтера'},
        {id: 'uin', name: 'UIN'},
        {id: 'serial', name: 'Серийный номер'},
        {id: 'inventory', name: 'Инвентарный номер'},
        {id: 'button', name: 'Действия'},
    ],
    printers_table_data: [],
    printer_data: {
        
    }
}

export default function printersReducer(state = initialState, action) {
    switch (action.type) {
        case PRINTERS_START_LOAD:
            return {
                ...state, printers_loading: true
            }
        case PRINTERS_FINISH_LOAD:
            return {
                ...state, printers_loading: false
            }
        case PRINTERS_LOAD_SUCCESS:
            return {
                ...state, printers_table_data: action.data
            }
    default: 
        return state
    }
}