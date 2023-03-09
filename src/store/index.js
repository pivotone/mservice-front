import { createStore } from "vuex";
import createPersistedState from 'vuex-persistedstate'

export default createStore({
    state: {
        resourceName: null,
        version: null
    },
    getters: {
        getResourceName(state) {
            return state.resourceName
        },
        getVersion(state) {
            return state.version
        }
    },
    mutations: {
        setResourceName(state, result) {
            state.resourceName = result
        },
        setVersion(state, result) {
            state.version = result
        }
    },
    actions: {},
    modules: {},
    plugins: [createPersistedState(
        {storage: window.sessionStorage}
    )]
})