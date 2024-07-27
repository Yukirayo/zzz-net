<template>
    <div class="sort-container" @click="toggleSort">
        <span class="type">全部</span>
        <ArrayDown
            :style="{ marginRight: '10px', transform: `${isRotated ? 'scale(0.75) rotate(180deg)' : 'scale(0.75)'}`}" />
    </div>
</template>
<script setup>
import ArrayDown from '@/components/icons/ArrayDown.vue'
import { ref } from 'vue'

const isRotated = ref(false)
const toggleSort = () => {
    isRotated.value = !isRotated.value
}
</script>
<style scoped>
.sort-container {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 320px;
    height: 60px;
    border-radius: 50px;
    border: 4px solid #3d3d3d;
    box-shadow: 0px 0px 0px 2px rgb(11, 11, 11);
    background-color: rgb(15, 15, 15);
}

.sort-container .type {
    color: white;
    font-size: 20px;
    letter-spacing: 1px;
    padding-left: 20px;
    font-style: italic;
    font-weight: 1000;
}

.sort-container::after {
    position: absolute;
    content: '';
    left: -2px;
    top: -2px;
    bottom: -2px;
    right: -2px;
    border: 2px solid #2a2a2a;
    border-radius: 50px;
}
</style>