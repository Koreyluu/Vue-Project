import { createStore } from 'vuex'

const gamesData = createStore({
    state() {
        return{
            games:[],
        }
    },
    getters:{
        gameData: (state) => state.games
    },
    mutations: {
        setGames: (state, games) => state.games = games,
        addGame(state, newGame){
            state.games.push(newGame)
        },
        deleteGame(state, id){
            state.games.splice(id, 1)
        }
    },
    actions:{
        localStorageGetGames({commit}, state){
            if(localStorage.getItem('games')) {
                state.games = JSON.parse(localStorage.getItem('myGames'))
                } else {
                state.games = localStorage.setItem('myGames', JSON.stringify([]))
                }
            commit('setGames', state.games)
        },
    }
})

export default gamesData;