import { createStore } from 'vuex'

const gamesData = createStore({
    state() {
        return{
            games:[],
            index: -1,
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
            state.games = state.games.filter((games) => games.id !== id)
        },
        getData(state, id){
            this.index = state.games.findIndex((obj => obj.id == id));
            return this.index
        },
        editGame(state, newData){
           let id = this.index
           state.games[id] = newData
        },
        saveGame(state){
            localStorage.setItem('myNewGames', JSON.stringify(state.games));
        },
        // checkForm(e){
        //     const found = this.gameData.some(el => el.id === this.newId);
        //     if(!this.newTitle || !this.newDeveloper || !this.newDescription){
        //       alert('Missing Fields!!')
        //     }else{
        //       if(!found){
        //         if(!isNaN(this.newId)){
        //         this.editGame()
        //         }else{
        //           alert('Enter a number')
        //         }
        //       }else{
        //         alert('This ID already exists! Please enter a unique ID')
        //       }
        //     }
        //     e.preventDefault();
        //   },
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
        },
        getData({commit}, data){
            commit('getData', data)
        },
        editGame({commit}, data){
            commit('editGame', data);
            commit('saveGame')
        }
    }
})

export default gamesData;