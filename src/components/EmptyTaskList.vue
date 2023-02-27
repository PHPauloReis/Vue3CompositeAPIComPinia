<template>

    <div class="empty-list-container">
        
        <img src="../assets/empty.svg" alt="">
        <div class="label">Ainda não há tarefas cadastradas</div>
  
    </div>
  
</template>

<script setup>

</script>

<style scoped>
  
.empty-list-container {
  width: 100%;
  max-width: 900px;
  padding: 25px 35px;
  background-color: #29292E;
  border: 3px dashed #7C7C8A;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
}

.empty-list-container .label {
    font-weight: bold;
    color: #7C7C8A;
    font-size: 28px;
}
  
</style>
  