import { nanoid } from "nanoid"

export const ADD_PRODUCT = (name, category, price, quantity) => {
    return {
        type: 'products/ADD_PRODUCT',
        payload: {
            id: nanoid(),
            name,
            category,
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

export const RESTOCK_PRODUCT = (id, quantity) => {
    return {
        type: 'products/RESTOCK_PRODUCT',
        payload:{id, quantity}
    }
}

export const SET_CATEGORY_FILTER = (category) => {
    return {
        type: 'categories/SET_CATEGORY_FILTER',
        payload: category
    }
}

export const SET_SEARCH_QUERY = (search) => {
    return {
        type: 'searchQuery/SET_SEARCH_QUERY',
        payload: search
    }
}

export const SET_SORT_BY = (sort) => {
    return {
        type:'sortBy/SET_SORT_BY',
        payload: sort
    }
}
