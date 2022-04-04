import { combineReducers } from "redux";
import {shipment, isSelected, alertMessgae, errorMessage} from './shipment.js'

export default combineReducers({
    shipment,
    isSelected,
    alertMessgae,
    errorMessage
})