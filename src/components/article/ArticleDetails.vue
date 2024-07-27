<template>
    <div class='details-container'>
        <div class="details">
            <div class="topbar">
                <div style="display: flex;flex-direction: row;gap: 10px;">
                    <div class="avatar"></div>
                    <div class="topbar-content">
                        <div class="name">让你看到没品味的人对不起</div>
                        <div class="hot">
                            <IconHot />
                            122
                        </div>
                    </div>
                </div>
                <DeleteBtn @click="closeDetails" style="margin-right: 20px;transform: scale(0.85);" />
            </div>
            <div class="contents">
                <div class="image">
                    <img style="width: 100%;border-radius: 10px;" src="@/assets/bg_01.jpg" alt="">
                </div>
                <div class="article">
                    <div class="self">
                        <div class="title">[灌水]是我不懂现代艺术？</div>
                        <div class="contents">
                            最近去看展。旧都陷落时，芭莱大厦被空洞侵蚀的程度还没有现在这么深。紧急抢救出一批展品。<br>
                            看完只想说，调查员冒着生命危险抢救这种东西，真的有必要吗?<br>
                            《抱邦布的男人(们)》《以骇背上的芭菜双子》是我最不喜欢的作品，感觉只是戏仿名作，顺便拍下芭莱老板的马屁。
                        </div>
                    </div>
                    <ArticleComment v-for="(item,index) in commentsList" 
                        :name="item.name" :comment="item.comment" :avatar="item.avatar" :floor="index" />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import DeleteBtn from '@/components/icons/DeleteBtn.vue'
import IconHot from '@/components/icons/IconHot.vue'
import ArticleComment from '@/components/article/ArticleComment.vue'

const emits = defineEmits(['close'])
const commentsList = ref([
    { 
        name: '全息邦布',
        avatar: '',
        comment: `
        你冤枉金斯顿·伯德啦哈哈哈。<br><br>
        他没有接受过系统的美术训练，青年时期在复制画工厂工作，每天临摹名画12个小时，上班上崩溃了，所以恶作剧了一下，在名画里加入了一些无厘头元素。<br><br>
        结果画作落入了芭莱兄弟手中，芭莱兄弟惊为天人，想要联系他。结果他对画廊经理说“买我画的人品味也太差了吧”。
        ` 
    },
    { 
        name: '全息邦布1号复读机',
        avatar: '',
        comment: `
        你冤枉金斯顿·伯德啦哈哈哈。<br><br>
        他没有接受过系统的美术训练，青年时期在复制画工厂工作，每天临摹名画12个小时，上班上崩溃了，所以恶作剧了一下，在名画里加入了一些无厘头元素。<br><br>
        结果画作落入了芭莱兄弟手中，芭莱兄弟惊为天人，想要联系他。结果他对画廊经理说“买我画的人品味也太差了吧”。
        ` 
    }
])

const closeDetails = () => {
    emits('close')
}
</script>
<style scoped>
.details-container {
    position: fixed;
    width: 70%;
    height: 75%;
    border-radius: 20px 0px 20px 20px;
    top: 50%;
    left: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translate(-50%, -50%);
    background-color: rgba(88, 88, 88, 0.6);
    z-index: 1001;
}

.details-container .details {
    width: 99%;
    height: 98%;
    border-radius: 20px 0px 20px 20px;
    border: 3px solid black;
    overflow: hidden;
    background-color: #313131;
}

.details-container .details .topbar {
    width: 100%;
    height: 15%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #000000;
}

.details-container .details .topbar .avatar {
    margin-left: 24px;
    width: 75px;
    height: 75px;
    background-color: rgb(150, 150, 150);
    border: 5px solid #2e2e2e;
    border-radius: 50%;
}

.details-container .details .topbar .topbar-content {
    display: flex;
    flex-direction: column;
    gap: 8px;
    justify-content: center;
}

.details-container .details .topbar .topbar-content .name {
    font-size: 18px;
    letter-spacing: 1px;
    font-weight: 1000;
    color: rgb(143, 143, 143);
}

.details-container .details .topbar .topbar-content .hot {
    width: 60px;
    border-radius: 20px;
    color: rgb(0, 0, 0);
    font-weight: 700;
    line-height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2px;
    text-align: center;
    height: 20px;
    background-color: #525252;
    letter-spacing: -1px;
}

.details-container .details .contents {
    width: 100%;
    height: 85%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 20px;
}

.details-container .details .contents .image {
    height: 480px;
    width: 320px;
    background-color: #0c0c0c;
    top: 50%;
    border-radius: 20px;
    box-sizing: content-box;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border: 4px solid rgba(44, 44, 44, 1);
}

.details-container .details .contents .article {
    height: 480px;
    width: 900px;
    border-radius: 20px;
    border-bottom: 2px solid #3b3b3b;
    background-color: #0c0c0c;
    overflow: scroll;
}

.details-container .details .contents .article .self {
    width: 100%;
    height: 240px;
    background-color: rgb(0, 0, 0);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.details-container .details .contents .article .self .title {
    font-size: 18px;
    font-weight: 1000;
    color: rgb(238, 238, 238);
    letter-spacing: 1px;
    padding: 20px 30px 10px 30px;
}

.details-container .details .contents .article .self .contents {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    font-size: 18px;
    letter-spacing: 1px;
    font-weight: 1000;
    color: rgb(205, 205, 205);
    margin-top: 0;
    padding: 0px 30px;
}
</style>