import { nanoid } from "nanoid"

export const ADD_PRODUCT = (name, price, quantity) => {
    return {
        type: 'products/ADD_PRODUCT',
        payload: {
            id: nanoid(),
            name,
            price,
            quantity
        }
    }
}

export const UPDATE_PRODUCT = (id, updateData) => {
    return {
        type: 'products/UPDATE_PRODUCT',
        payload: {
            id,
            updateData
        }
    }
}

export const DELETE_PRODUCT = (id) => {
    return {
        type: 'products/DELETE_PRODUCT',
        payload: id
    }
}

export const RESTOCK_PRODUCT = (quantity) => {
    return {
        type: 'products/RESTOCK_PRODUCT',
        payload: quantity
    }
}