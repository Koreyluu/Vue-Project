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
        saveGame(state){
            console.log('before localStorage',localStorage)
            localStorage.setItem('myNewGames', JSON.stringify(state.games));
            console.log('after localStorage',localStorage)
            console.log(localStorage)
        }
    },
    actions:{
        async localStorageInit({commit, state}){
            console.log('what is state', state)
            console.log('??',localStorage.getItem('myNewGames'))
            if(localStorage.getItem('myNewGames')) {
                state.games = JSON.parse(localStorage.getItem('myNewGames'))
                } else {
                state.games = localStorage.setItem('myNewGames', JSON.stringify([]))
                }
                console.log('local storage innit', state.games)
            commit('setGames', state.games)
        },
        addGame({commit}, data){
            console.log('store-action-addGame', data)
            commit('addGame', data);
            console.log('after add game', data)
            commit('saveGame')
        },
    }
})

export default gamesData;