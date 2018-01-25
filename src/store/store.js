import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    user: {
      fname: 'lorem name',
      email: 'lorem@email.com',
      password: 'lorem pass',
      notif: false
    },
    todo: [
      { id: 1, label: 'Learn VueJs', done: true },
      { id: 2, label: 'Try a demo', done: false },
      { id: 3, label: 'Write a tutorial', done: false }
    ]
  },
  getters: {
    todoSortedByDoneStatus: state => {
      var sortedArray = []
      var doneArray = state.todo.filter(function (item) { return item.done })
      var notDoneArray = state.todo.filter(function (item) { return !item.done })

      sortedArray = [...notDoneArray, ...doneArray]
      return sortedArray
    }
  },
  mutations: {
    addItem: (state, label) => {
      state.todo.push({id: Math.floor(Math.random() * 9999) + 10, label: label, done: false})
    },
    updateUser: (state, user) => {
      Object.assign(state.user, user)
    }
  }
})
