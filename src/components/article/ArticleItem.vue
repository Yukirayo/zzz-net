<template>
    <div class="container">
        <div class="image">
            <div class="icon">
                <WatchIcon class="watch" />
                {{ props.watchCount }}
            </div>
            <div class="userinfo">
                <div class="avatar"></div>
                <div class="username">
                    <div>{{ props.username }}</div>
                    <div></div>
                </div>
            </div>
        </div>
        <div class="details">
            <div class="title">{{ props.title }}</div>
            <div class="text">{{ props.text }}</div>
        </div>
    </div>
</template>
<script setup>
import { ref , onMounted } from 'vue'
import WatchIcon from '@/components/icons/IconWatch.vue'

const props = defineProps(['username','title','text','watchCount'])

onMounted(()=>{
})
</script>
<style scoped>
.container {
    height: 480px;
    width: 250px;
    border: 4px solid #000000;
    border-radius: 20px 20px 0px 20px;
    flex-direction: column;
    display: flex;
    position: relative;
    overflow: hidden;
    transition: border .5s;
    background-color: #292929;
}

.container:hover {
    animation: gradientBorder 0.8s linear infinite alternate;
}

.image {
    position: relative;
    height: 86%;
    width: 100%;
    background: url('@/assets/bg_01.jpg');
    background-size: cover;
}

.icon {
    position: absolute;
    left: 10px;
    top: 5px;
    font-size: 16px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: white;
    gap: 5px;
    font-weight: 600;
}


.userinfo {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 15%;
    background: linear-gradient(transparent 50%,#292929 50%);
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    gap: 5px;
}

.avatar {
    width: 52px;
    height: 52px;
    margin-left: 10px;
    border: 3px solid #292929;
    background-color: white;
    border-radius: 50%;
}

.username {
    max-width: 70%;
    color: #666666;
    display: flex;
    gap: 1px;
    flex-direction: column;
    margin-bottom: 3px;
    
}

.username div:nth-child(1){
    letter-spacing: 1px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    font-weight: 1000;
}

.username div:nth-child(2){
    height: 2px;
    width: 100%;
    background-color: rgba(102, 102, 102,0.6);
}

.details {
    padding: 5px 10px;
    height: 15%;
    width: 100%;
    background-color: #292929;
}

.details .title{
    font-weight: 1000;
    font-size: 16px;
    color: white;
    letter-spacing: 2px;
}

.details .text {
    font-weight: 1000;
    letter-spacing: 1px;
    color: rgb(168, 168, 168);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

@keyframes gradientBorder {
    from {
        border: 4px solid #3bc540;
    }
    to {
        border: 4px solid #b2ba4b;
    }
}
</style>