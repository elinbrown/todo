import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
      todos: [
          {
              id: 0,
              task: "Learn vuex",
              completed: false
          }
      ],
    },
    mutations: {
      ADD(state, payload) {
        var newTodo = {
            id: payload.newId,
            task: payload.task,
            completed: false
        }
        state.todos.unshift(newTodo); 
      },
      COMPLETE(state, payload) {
          var item = state.todos.find(todo => todo.id === payload);
          item.completed = !item.completed; 
      },
      DELETE(state, payload) {
          var index = state.todos.findIndex(todo => todo.id === payload);
          state.todos.splice(index, 1); 
      }
    },
    getters: {
      getNotes: state => state.todos
    },
    actions: {
        addTodo: (context, payload) => {
            context.commit("ADD", payload)
        },
        toggleTodo: (context, payload) => {
            context.commit("COMPLETE", payload)
        },
        deleteTodo: (context, payload) => {
            context.commit("DELETE", payload)
        }
    }
  })