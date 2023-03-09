import axios from 'axios'
import store from '../store'
import qs from 'qs'

const instance = axios.create({
    timeout: 300000,
    baseURL: 'http://localhost:5678'
})

instance.interceptors.request.use(
    (config) => {
        config.url = '/' + store.getters.getResourceName + '/' + store.getters.getVersion + config.url
        console.log("send last url is: " + config.url)
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

const api = {
    get(url, data) {
        if(data === null)
            return instance.get(url)
        else 
            return instance.get(url + '?' + qs.stringify(data))
    },
    post(url, data) {
        return instance.post(url, data)
    },
    put(url, data) {
        return instance.put(url, data)
    },
    delete(url, data) {
        return instance.delete(url, data)
    },
    patch(url, data) {
        return instance.patch(url, data)
    }
}

export {api}