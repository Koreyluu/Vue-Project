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
            console.log('delete', id)
            state.games.splice(id, 1)
        },
        editGame(){

        },
        saveGame(state){
            localStorage.setItem('myNewGames', JSON.stringify(state.games));
        }
    },
    actions:{
        async localStorageInit({commit, state}){
            if(localStorage.getItem('myNewGames')) {
                state.games = JSON.parse(localStorage.getItem('myNewGames'))
                } else {
                state.games = localStorage.setItem('myNewGames', JSON.stringify([]))
                }
            commit('setGames', state.games)
        },
        addGame({commit}, data){
            commit('addGame', data);
            commit('saveGame')
        },
        deleteGame({commit}, data){
            console.log('commit', data)
            commit('deleteGame', data);
            commit('saveGame')
        }
    }
})

export default gamesData;