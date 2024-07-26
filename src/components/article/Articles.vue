<template>
    <div style="display: flex;flex-direction: row;gap: 60px;align-items: center;">
      <div
        style="margin-top:100px;display: flex;flex-direction: column;gap: 20px;justify-content: center;align-items: flex-start;">
        <ArticleItem v-for="item in articleList" :title="item.title" :username="item.username" :text="item.text"
          :watchCount="6690" />
      </div>
      <div
        style="margin-top:100px;display: flex;flex-direction: column;gap: 20px;justify-content: center;align-items: flex-start;">
        <ArticleItem v-for="item in articleList" :title="item.title" :username="item.username" :text="item.text"
          :watchCount="6690" />
      </div>
      <div
        style="margin-top:100px;display: flex;flex-direction: column;gap: 20px;justify-content: center;align-items: flex-start;">
        <ArticleItem v-for="item in articleList" :title="item.title" :username="item.username" :text="item.text"
          :watchCount="6690" />
      </div>
      <div
        style="margin-top:100px;display: flex;flex-direction: column;gap: 20px;justify-content: center;align-items: flex-start;">
        <ArticleItem v-for="item in articleList" :title="item.title" :username="item.username" :text="item.text"
          :watchCount="6690" />
      </div>
      <div
        style="margin-top:100px;display: flex;flex-direction: column;gap: 20px;justify-content: center;align-items: flex-start;">
        <ArticleItem v-for="item in articleList" :title="item.title" :username="item.username" :text="item.text"
          :watchCount="6690" />
      </div>
      <div
        style="margin-top:100px;display: flex;flex-direction: column;gap: 20px;justify-content: center;align-items: flex-start;">
        <ArticleItem v-for="item in articleList" :title="item.title" :username="item.username" :text="item.text"
          :watchCount="6690" />
      </div>
    </div>
</template>
<script setup>
import ArticleItem from '@/components/ArticleItem.vue'
import { ref } from 'vue'

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
</script>
<style scoped>

</style>