<template>
    <div class="nav-container" :style="{ '--translate-val': coverPosition }">
        <div class="userinfo">
            <div class="info">
                <div class="avatar"></div>
                <div class="name-exp">
                    <div class="name">攸沐</div>
                    <div class="exp" :style="{ '--user-exp': userExp }">{{ userExpArr[0] }}/ {{ userExpArr[1] }}</div>
                </div>
            </div>
            <div class="level">
                <div>42</div>
                <div>LEVEL</div>
            </div>
        </div>
        <div class="nav" >
            <NavCover :status="coverStatus" ref="coverRef" class="cover" />
            <div class="navitem" v-for="(item,index) in navList" :style="{ color: item.status }" @click="changeNav(item,index)">{{ item.title }}</div>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router'
import NavCover from '@/components/icons/NavCover.vue'

const router = useRouter()
const coverPosition = ref('')
const coverRef = ref()
const coverStatus = ref(0)
const userExpArr = ref([4405,11780])
const navList = ref([
    { title: '推送', page: 'articles' , status: 'black' },
    { title: '日程', page: 'dariy' , status: 'white' },
    { title: '发帖', page: 'push' , status: 'white' }
])

const userExp = computed(()=>{
    return `${(userExpArr.value[0] / userExpArr.value[1]).toFixed(2) * 100}%`
})

const changeNav = (v,idx) => {
    const coverVars = [0,90,186] 
    navList.value.forEach(item=>{
        item.status = 'white'
    })
    coverStatus.value = idx
    navList.value[idx].status = 'black'
    coverPosition.value = `translate(${coverVars[idx]}%,-15%)`
    router.push({name: v.page })
}

onMounted(()=>{
    coverPosition.value = `translate(0%,-15%)`
})
</script>
<style scoped>
:root {
    --translate-val: translate(0%,-15%);
}

.nav-container {
    width: 100%;
    height: 80px;
    background-color: black;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.nav-container .userinfo {
    width: 240px;
    /* border: 2px solid #2c2c2c; */
    box-shadow: 1px 1px 0px 2px #1a1a1a, 1px -1px 0px 2px #393939;
    height: 60%;
    border-radius: 50px;
    margin-left: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    background: linear-gradient(225deg, #1c1c1c, #161616);
}

.nav-container .userinfo .info {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 80%;
    gap: 8px;
}

.nav-container .userinfo .info .name-exp {
    position: relative;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    color: white;
    line-height: 12px;
    gap: 4px;
}

.nav-container .userinfo .info .name-exp .name {
    font-weight: 1000;
}

.nav-container .userinfo .info .name-exp .exp {
    border: 1px solid #2b2b2b;
    font-weight: 600;
    width: 100%;
    height: 100%;
    padding-right: 50px;
    padding-left: 4px;
    border-radius: 10px;
    background-color: #292929;
    box-shadow: inset -2px 2px 4px #202020,
    inset 2px -2px 4px #323232;
    position: relative;
    z-index: 2;
}

.nav-container .userinfo .info .name-exp .exp::after {
    position: absolute;
    content: '';
    top: 50%;
    left: 1px;
    transform: translateY(-50%);
    height: 98%;
    width: var(--user-exp);
    border-radius: 20px;
    background: linear-gradient(30deg,#1e45f4,#6df4fe);
    z-index: -1;
}

.nav-container .userinfo .info .avatar {
    margin-left: 5px;
    background-color: white;
    width: 36px;
    height: 36px;
    border: 1px solid #000000;
    border-radius: 50%;
}

.nav-container .userinfo .level {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 6px;
}

.nav-container .userinfo .level div:nth-child(1) {
    font-size: 25px;
    font-weight: 1000;
    letter-spacing: -1px;
    color: white;
    line-height: 30px;
}

.nav-container .userinfo .level div:nth-child(2) {
    text-align: center;
    line-height: 4px;
    font-weight: 1000;
    font-size: 11px;
    letter-spacing: -1px;
    color: #858585;
}

.nav-container .nav {
    position: relative;
    width: 600px;
    height: 60%;
    border: 3px solid #505050;
    background-color: #0e0e0e;
    border-radius: 50px;
    display: flex;
    flex-direction: row;
    margin-right: 100px;
}

.nav-container .nav .navitem {
    cursor: pointer;
    width: 33%;
    height: 100%;
    text-align: center;
    line-height: 40px;
    font-size: 20px;
    font-weight: 1000;
    font-style: italic;
    letter-spacing: 1px;
    background-color: transparent;
    position: relative;
    transition: all .5s;
    z-index: 1;
}

.nav-container .nav .cover {
    position: absolute;
    transform: var(--translate-val);
    animation: nav-animate .4s linear infinite alternate;
}

@keyframes nav-animate {
  from {
      transform: var(--translate-val) scale(1);
  }
  to {
      transform: var(--translate-val) scale(1.1);
  }
}
</style>