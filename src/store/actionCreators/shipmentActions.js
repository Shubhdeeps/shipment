import axios from "axios";
import { ActionTypes } from "../constants/action-types";


// with the help of thunk, implementing async action in redux
export const setItems = () => {
    const baseURL = 'https://my.api.mockaroo.com/shipments.json?key=5e0b62d0'

    return async (dispatch, getState) => {
        await axios.get(baseURL)
        .then(response => dispatch({
            type: ActionTypes.SET_ITEMS,
            payload: response.data
        }))
        .catch((error) => 
        dispatch(setError(error.message)) 
        )
      
    }
}

export const setItem = (orderNo) => {
    return{
        type: ActionTypes.SET_ITEM,
        payload: orderNo
    }
}  

export const selectItem = (orderNo) => {
    return{
        type: ActionTypes.SELECT_ITEMS,
        payload: orderNo
    }
}

export const deSelectItem = (orderNo) => {
    return{
        type: ActionTypes.DESELECT_ITEMS,
        payload: orderNo
    }
}

export const deleteItem = () => {
    return{
        type: ActionTypes.DELETE_ITEMS
    }
}

export const updateItem = (orderNo, key, value) => {
    return{
        type: ActionTypes.UPDATE_ITEM,
        payload: {orderNo, key, value}
    }
}

export const setDetailsSelected = (value) => {
    return{
        type: ActionTypes.ISSELECT,
        payload: value
    }
}

export const newItemObject = (key, value) => {
    return{
        type: ActionTypes.NEW_ITEM,
        payload: {
            key, 
            value
        }
    }
}

export const newAlert = (message) => {
    return{
        type: ActionTypes.NEW_ALERT,
        payload: message
    }
}

export const updateButton = () => {
    return{
        type: ActionTypes.UPDATE
    }
}

export const detailsButton = () => {
    return{
        type: ActionTypes.DETAILS
    }
}

const setError = (err) => {
    return{
        type: ActionTypes.ERROR,
        payload: err
    }
}