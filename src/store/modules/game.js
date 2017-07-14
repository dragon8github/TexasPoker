let state = {
    AppData: {
        money: 0,
        time: 0,
        status: 0,
        isStart: false,
        isEnd: false,
        baseMoney: 0,
        playerCount: 0
    }
}

const getters = {
    AppData(state) {
        return state.AppData;
    }
}

const actions = {
    setAppData({ commit, state }, data) {
        Object.assign(state.AppData, data);
    }
}

export default {
    state,
    getters,
    actions
}