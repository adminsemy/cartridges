import { combineReducers } from "redux";
import cartridgeReducer from "./reducers/cartridgeReducer";
import generalState from "./reducers/generalReducer";
import printersReducer from "./reducers/printersReducer";

export default combineReducers({
    general: generalState,
    cartridge: cartridgeReducer,
    printer: printersReducer
})