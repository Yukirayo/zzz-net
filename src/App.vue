<template>
  <div style="margin: 0 auto;">
    <Nav style="position: fixed;top: 0;left: 0;z-index: 999;" />
    <RouterView @cover="changeCover" :style="{ width: viewSize + 'px' }"></RouterView>
    <CoverView v-if="showCover" />
  </div>

</template>
<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { onMounted, ref } from 'vue'
import Nav from './components/Nav.vue'
import CoverView from '@/components/utils/CoverView.vue'

const viewSize = ref(0)
const showCover = ref(false)
const adjustWebSize = () => {
  const width = window.innerWidth
  const height = window.innerHeight

  viewSize.value = width - width * (240/1920)
}

const changeCover = (v) => {
  showCover.value = !showCover.value
  const body = document.body
  if(v){
    body.style.overflow = 'hidden'
  }else{
    body.style.overflow = 'scroll'
  }
}

onMounted(()=>{
  adjustWebSize()
})
</script>
<style scoped>
</style>
