<template>
    <div class="comments">
        <div class="avatar"></div>
        <div class="part2">
            <div class="name" >
                {{ props.name }}
                <div class="floor">{{ props.floor + 1 + 'F' }}</div>
            </div>
            <div class="comment" v-html="props.comment"></div>
        </div>
        
    </div>
</template>
<script setup>
import DisplayFloor from '@/components/utils/DisplayFloor.vue'
import { onMounted } from 'vue';

const props = defineProps(['avatar','name','comment','floor'])

onMounted(()=>{
})
</script>
<style scoped>
.comments {
    width: 100%;
    height: auto;
    background-color: rgb(0, 0, 0);
    display: grid;
    grid-template-columns: 1fr 10fr;
}

.comments .avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: rgb(150, 150, 150);
    margin: 20px 10px 0px 30px;
    border: 5px solid #2e2e2e;
}

.comments .part2 {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    padding-left: 5px;
    padding-right: 40px;
    gap: 5px;
}

.comments .part2 .name {
    font-size: 18px;
    letter-spacing: 1px;
    font-weight: 1000;
    color: rgb(255, 255, 255);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.comments .part2 .comment {
    font-size: 18px;
    letter-spacing: 1px;
    font-weight: 1000;
    color: rgb(164, 164, 164);
}

.comments .part2 .name .floor {
    width: auto;
    height: 20px;
    background-color: #3D3D3D;
    line-height: 1px;
    font-weight: 1000;
    border-radius: 0px 20px 20px 20px;
    padding: 12px 16px;
    color: black;
}

/* .comments .part2 .name .floor::after {
    content: var(--floor-count);
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-size: 16px;
    line-height: 20px;
    font-weight: 1000;
    color: black;
} */
</style>