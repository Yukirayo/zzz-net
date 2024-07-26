<template>
  <div style="width: 1000px;height: 100%;">
    <Nav style="position: fixed;top: 0;left: 0;z-index: 999;" />
    
    <RouterView></RouterView>
  </div>

</template>
<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
import Nav from './components/Nav.vue'


</script>
<style scoped></style>
