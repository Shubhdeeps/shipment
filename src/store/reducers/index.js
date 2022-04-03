import { combineReducers } from "redux";
import {shipment, isSelected, alertMessgae, buttonType, errorMessage} from './shipment.js'

export default combineReducers({
    shipment,
    isSelected,
    alertMessgae,
    buttonType, 
    errorMessage
})