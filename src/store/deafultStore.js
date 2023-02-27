import { defineStore } from "pinia";

export const defaultStore = defineStore('store', {
    
  state: () => ({
    newTaskField: '',
    taskDeleted: ''
  }),

  getters: {
    // ...
  },

  actions: {
    setNewTaskFieldValue(task) {
      this.newTaskField = task
    },
    eventTaskDeleted(task) {
      this.taskDeleted = task
    },
    clearTaskDeleted() {
      this.taskDeleted = ''
    }
  },

})
