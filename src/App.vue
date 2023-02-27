<template>
  <div class="container">
    
    <div class="header">

      <HeaderSuperTask />

    </div>

    <NewTask @newTaskButtonPressed="createNewTask" />

    <TaskList :tasks="tasks" />

  </div>
</template>

<script setup>

import { ref, computed, watch } from 'vue';
import HeaderSuperTask from './components/HeaderSuperTask.vue';
import NewTask from './components/NewTask.vue';
import TaskList from './components/TaskList.vue';
import { defaultStore } from './store/deafultStore';

const store = defaultStore()

const deletedTask = computed(() => {
  return store.taskDeleted
})

watch(deletedTask, (newValue) => {
  tasks.value.splice(tasks.value.indexOf(newValue), 1)
})

const tasks = ref([
  { title: "Estudar as Flex Box", completed: false },
  { title: "Estudar as Tags do HTML", completed: true },
  { title: "Estudar o básico de Javascript", completed: false },
  { title: "Estudar Javascript Avançado", completed: false },
])

const createNewTask = (task) => {
  if (!!task.title ===  false) {
    alert('Título não informado!')
    return
  }
  
  tasks.value.push(task)
}

</script>

<style scoped>

</style>
