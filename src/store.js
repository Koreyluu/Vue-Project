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
            console.log('whats happening here', state.games)
            state.games.push(newGame)
        },
        deleteGame(state, id){
            state.games.splice(id, 1)
        },
        editGame(){

        },
        saveGame(state){
            localStorage.setItem('myNewGames', JSON.stringify(state.games));
            console.log(localStorage)
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
            commit('deleteGame', data);
            commit('saveGame')
        }
    }
})

export default gamesData;