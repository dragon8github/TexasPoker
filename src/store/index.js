import Vue from 'vue'
import Vuex from 'vuex'
import game from './modules/game'
import * as actions from './actions'
import * as getters from './getters'
import * as state from './state.js'
import mutations from './mutations.js'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        game
    },
    state,
    getters,
    actions,
    mutations
})

export default store