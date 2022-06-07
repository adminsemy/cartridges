import { combineReducers } from "redux";
import { reducer as formReduser} from "redux-form";
import cartridgeReducer from "./reducers/cartridgeReducer";
import colorCartridgesReducer from "./reducers/colorCartridgeReducer";
import generalState from "./reducers/generalReducer";
import printersReducer from "./reducers/printersReducer";

export default combineReducers({
    general: generalState,
    cartridge: cartridgeReducer,
    printer: printersReducer,
    colorCartridges: colorCartridgesReducer,
    form: formReduser
})