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
        setGames(state, games){
            state.games = games
        }, 
        addGame(state, newGame){
            state.games.push(newGame)
        },
        deleteGame(state, id){
            state.games.splice(id, 1)
        },
        saveGame(state){
            console.log('before localStorage', localStorage)
            let r = localStorage.setItem('myNewGames', JSON.stringify(state.games));
            console.log('r', r)
            console.log('after localStorage',localStorage)
        }
    },
    actions:{
        async localStorageInit({commit, state}){
            if(localStorage.getItem('games')) {
                state.games = JSON.parse(localStorage.getItem('myNewGames'))
                } else {
                state.games = localStorage.setItem('myNewGames', JSON.stringify([]))
                }
            commit('setGames', state.games)
        },
        addGame({commit}, data){
            console.log('store-action-addGame', data)
            commit('addGame', data);
            commit('saveGame')
        },
    }
})

export default gamesData;