import { ActionTypes } from "../constants/action-types";

const initialState = {
    products: [],
    orderNo: [],
    item: {}
};


export const shipment = (state = initialState, action) => {
    switch (action.type){
        case ActionTypes.SET_ITEMS:
            return {...state , products: action.payload}
        case ActionTypes.SET_ITEM:
            const item =  Object.assign({}, state.products.find(product => product.orderNo === action.payload))
            return {...state, item: item}
        case ActionTypes.NEW_ITEM:
            const newItem = state.item
            newItem[action.payload.key] = action.payload.value
            return {...state, item: newItem}
        case ActionTypes.SELECT_ITEMS:
            return {...state, orderNo: [...state.orderNo, action.payload]}
        case ActionTypes.DESELECT_ITEMS:
            return {...state, orderNo:  state.orderNo.filter(order => order !== action.payload)}
        case ActionTypes.CLEAR_ITEMS:
            return {...state, orderNo: []}
        case ActionTypes.DELETE_ITEMS:
             return deleteItem(state)
        case ActionTypes.UPDATE_ITEM:
             return {...state, products: [state.item, ...state.products]}
        default:
            return state
    }
}

const deleteItem = (state) => {
    const arrayOfOrders = state.orderNo
    state.orderNo = []
    return {...state, products: state.products.filter(item => !arrayOfOrders.includes(item.orderNo))}
}

export const isSelected = (state = false, action) => {
    switch (action.type){
        case ActionTypes.ISSELECT:
            return state = action.payload
        
        default:
            return state
    }
}

export const alertMessgae = (state = '', action) => {
    switch(action.type){
        case ActionTypes.NEW_ALERT:
            return state = action.payload
        default:
            return state
    }
}


export const errorMessage = (state = '', action) => {
    switch(action.type){
        case ActionTypes.ERROR:
            return state = action.payload
        default:
            return state
    }
}