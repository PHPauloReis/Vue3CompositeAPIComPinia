<template>

    <div class="list-container">
  
      <h1>Minhas tarefas</h1>
  
      <TaskListItem
        v-if="tasks"
        v-for="task of tasks"
        :key="task.title"
        :task="task"
      />

      <EmptyTaskList v-else />
  
    </div>
  
</template>

<script setup>

import TaskListItem from './TaskListItem.vue';
import EmptyTaskList from './EmptyTaskList.vue';
import { defineProps } from 'vue';

defineProps({
  tasks: Array
})

</script>

<style scoped>
  
.list-container {
  width: 100%;
  max-width: 900px;
}

.list-container h1 {
  margin: 60px 0 20px 0;
  color: #FFF;
}
  
</style>
