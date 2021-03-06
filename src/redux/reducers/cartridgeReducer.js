import { CARTRIDGES_LOAD_SUCCESS, CARTRIDGES_PRINTER_LOAD_SUCCESS, CARTRIDGE_LOAD_SUCCESS, CARTRIDGE_NEW, CARTRIDGE_ORDER_SUCCESS, CARTRIDGE_RESET_SUCCESS, CARTRIDGE_SAVE_SUCCESS } from "../actions/actionsType"

const initialState =  {
    cartridges_loading: false, 
    cartridges_column_names: [
        {id: 'id', name: 'ID'},
        {id: 'name', name: 'Имя'},
        {id: 'color', name: 'Цвет'},
        {id: 'producer', name: 'Бренд'},
        {id: 'nameExcel', name: 'Имя в Excel'},
        {id: 'minimum', name: 'Минимум'},
        {id: 'all', name: 'Всего'},
    ],
    cartridges_table_data: [],
    cartridge_data: {
        name: '',
        producer: '',
        nameExcel: '',
        color: '',
        minimum: 0,
        all: 0
    },
    cartridges_printer: [
        {id:'', name: ''}
    ],
    cartridge_order_success: '',
    cartridge_save_success: ''
}

export default function cartrideReducer(state = initialState, action) {
    switch (action.type) {
        case CARTRIDGES_LOAD_SUCCESS:
            return {
                ...state, cartridges_table_data: action.data
            }
        case CARTRIDGES_PRINTER_LOAD_SUCCESS:
            return {
                ...state, cartridges_printer: action.data
            }
        case CARTRIDGE_LOAD_SUCCESS:
            return {
                ...state, cartridge_data: action.data
            }
        case CARTRIDGE_NEW:
            return {
                ...state,
                cartridge_data: {
                    name: '',
                    producer: '',
                    nameExcel: '',
                    color: '',
                    minimum: 0,
                    all: 0
                }
            }
        case CARTRIDGE_ORDER_SUCCESS:
            return {
                ...state, cartridge_order_success: action.message
            }
        case CARTRIDGE_SAVE_SUCCESS:
            return {
                ...state, cartridge_save_success: action.message
            }
        case CARTRIDGE_RESET_SUCCESS:
            return {
                ...state, cartridge_save_success: ''
            }
    default:
        return state
    }
}