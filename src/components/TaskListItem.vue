<template>

  <div class="list-item-container" :class="{ active: task.completed }">

    <div class="label">{{ task.title }}</div>

    <div class="actions">
      <button @click="restoreTask" v-if="task.completed"><img src="../assets/restore.svg" alt="Restaurar"></button>
      <button @click="completeTask" v-else><img src="../assets/ok.svg" alt="Finalizar"></button>      
      <button @click="deleteTask"><img src="../assets/trash.svg" alt="Excluir"></button>
    </div>

  </div>
  
</template>

<script setup>

import { defineProps } from 'vue';
import { defaultStore } from '../store/deafultStore';

const store = defaultStore()

const props = defineProps({
  task: {
    type: Object,
    required: true
  }
})

const completeTask = () => {
  props.task.completed = true
}

const restoreTask = () => {
  props.task.completed = false
}

const deleteTask = () => {
  store.eventTaskDeleted(props.task)
}

</script>

<style scoped>
  
.list-item-container {
  width: 100%;
  max-width: 900px;
  background-color: #29292E;
  padding: 25px 35px;
  font-size: 24px;
  color: #FFF;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 3px solid #29292E;
  margin-bottom: 15px;
}

.list-item-container button {
  background-color: transparent;
  border: none;
  padding: 7px;
  cursor: pointer;
}

.active {
  background-color: #0D99FF66;
  border-color: #0D99FF;
  text-decoration: line-through;
}
  
</style>
  