import { api } from './service.js'

const getCart = (customerId) => {
    return api.get(`/carts/${customerId}`, null)
}

const deleteCart = (customerId) => {
    return api.delete(`/carts/${customerId}`, null)
}

const mergeCart = (customerId, sessionId) => {
    return api.get(`/${customerId}/merge`, {sessionId: sessionId})
}

const getItem = (customerId,itemId) => {
    return api.get(`/carts/${customerId}/items/${itemId}`, null)
}

const getItems = (customerId) => {
    return api.get(`/carts/${customerId}/items`, null)
}

const addToCart = (customerId, item) => {
    return api.post(`/carts/${customerId}/items`, item)
}

const removeItem = (customerId, itemId) => {
    return api.post(`/carts/${customerId}/items/${itemId}`, null)
}

const updateItem = (customerId, item) => {
    return api.patch(`/carts/${customerId}/items`, item)
}

const cart = {
    getCart,
    deleteCart,
    mergeCart,
    getItem,
    getItems,
    addToCart,
    removeItem,
    updateItem
}

export default cart