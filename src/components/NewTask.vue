<template>

  <div class="box-container">

    <h2>Cadastrar nova tarefa</h2>

    <div class="input-container">
      <input
        @keypress.enter="createNewTask()"
        type="text"
        placeholder="Digite aqui o título da sua tarefa"
        v-model="newTask"
      >
      <div @click="createNewTask()" class="plus-button">
        <img src="../assets/plus_blue.svg" alt="">
      </div>
    </div>

  </div>

</template>

<script setup>

import { ref } from 'vue';

const emit = defineEmits(['newTaskButtonPressed'])
const newTask = ref('')

const createNewTask = () => {
  emit('newTaskButtonPressed', { title: newTask.value, completed: false })
  newTask.value = ""
}

</script>

<style scoped>

.box-container {
  width: 100%;
  max-width: 900px;
  background-color: #29292E;
  padding: 35px;
  color: #FFF;
}

.box-container h2 {
  margin-bottom: 30px;
}

.input-container {
  width: 100%;
  position: relative;
  background-color: aqua;
}

.plus-button {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}

input {
  width: 100%;
  height: 46px;
  padding: 15px;
  background-color: #121214;
  border: 2px solid #121214;
  font-size: 18px;
}

input::placeholder {
  color: #7C7C8A;
}

input:focus {
  border: 2px solid #666;
  outline: none;
  color: #FFF;
}

</style>
