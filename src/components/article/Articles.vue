<template>
  <div style="margin-top:100px;display: grid;grid-template-columns: 1fr 1fr 1fr 1fr 1fr;width: 100%;">
    <div style="display: flex;flex-direction: column;gap: 20px;align-items: flex-start;place-self: center;">
      <ArticleItem v-for="item in articleList" :title="item.title" :username="item.username" :text="item.text"
        :watchCount="6690" @click="openDetails" />
    </div>
    <div style="display: flex;flex-direction: column;gap: 20px;place-self: center;align-items: flex-start;">
      <ArticleItem v-for="item in articleList" :title="item.title" :username="item.username" :text="item.text"
        :watchCount="6690" />
    </div>
    <div style="display: flex;flex-direction: column;gap: 20px;place-self: center;align-items: flex-start;">
      <ArticleItem v-for="item in articleList" :title="item.title" :username="item.username" :text="item.text"
        :watchCount="6690" />
    </div>
    <div style="display: flex;flex-direction: column;gap: 20px;place-self: center;align-items: flex-start;">
      <ArticleItem v-for="item in articleList" :title="item.title" :username="item.username" :text="item.text"
        :watchCount="6690" />
    </div>
    <div style="display: flex;flex-direction: column;gap: 20px;place-self: center;align-items: flex-start;">
      <ArticleItem v-for="item in articleList" :title="item.title" :username="item.username" :text="item.text"
        :watchCount="6690" />
    </div>
    <ArticleDetails @close="closeDetails" v-if="showDetails" />
    <ArticleSort style="position: fixed;bottom: 30px;right: 80px;" />
  </div>
</template>
<script setup>
import ArticleItem from '@/components/article/ArticleItem.vue'
import ArticleSort from '@/components/article/ArticleSort.vue'
import ArticleDetails from '@/components/article/ArticleDetails.vue'
import { onMounted, ref } from 'vue'

const emits = defineEmits(['cover'])
const showDetails = ref(false)
const pageRef = ref()
const articleList = ref([
  {
    username: '让你看到没品味的人让你看到没品味的人',
    title: '[灌水]是我不懂现代艺术？',
    text: '最近去看展，旧都陷落时，芭莱大厦ooooooooooooooooooo'
  },
  {
    username: '让你看到没品味的人让你看到没品味的人',
    title: '[灌水]是我不懂现代艺术？',
    text: '最近去看展，旧都陷落时，芭莱大厦ooooooooooooooooooo'
  },
  {
    username: '让你看到没品味的人让你看到没品味的人',
    title: '[灌水]是我不懂现代艺术？',
    text: '最近去看展，旧都陷落时，芭莱大厦ooooooooooooooooooo'
  },
  {
    username: '让你看到没品味的人让你看到没品味的人',
    title: '[灌水]是我不懂现代艺术？',
    text: '最近去看展，旧都陷落时，芭莱大厦ooooooooooooooooooo'
  }
])

const openDetails = () => {
  showDetails.value = true
  emits('cover', true)
}

const closeDetails = () => {
  showDetails.value = false
  emits('cover', false)
}

</script>
<style scoped></style>