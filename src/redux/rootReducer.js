import { combineReducers } from "redux";
import cartridgeReducer from "./reducers/cartridgeReducer";
import printersReducer from "./reducers/printersReducer";

export default combineReducers({
    cartridge: cartridgeReducer,
    printer: printersReducer
})