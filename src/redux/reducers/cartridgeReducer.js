import { CARTRIDGES_FINISH_LOAD, CARTRIDGES_LOAD_SUCCESS, CARTRIDGES_START_LOAD } from "../actions/actionsType"

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
    cartridge: {
        name: null,
        producer: null,
        nameExcel: null,
        color: '',
        minimum: 0,
        all: 0
    }
}

export default function cartrideReducer(state = initialState, action) {
    switch (action.type) {
        case CARTRIDGES_START_LOAD:
            return {
                ...state, cartridges_loading: true
            }
        case CARTRIDGES_LOAD_SUCCESS:
            return {
                ...state, cartridges_table_data: action.data
            }
        case CARTRIDGES_FINISH_LOAD:
            return {
                ...state, cartridges_loading: false
            }
    default:
        return initialState
    }
}