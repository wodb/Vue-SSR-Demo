<template>
    <ul class="entry-list">
        <li class="list-item" v-for="(recommend, index) in recommends" :key="index">
            <div class="content-box">
                <div class="info-box">
                    <div class="info-row title-row">
                        <a :href="recommend.originalUrl" target="_blank" class="title">{{recommend.title}}</a>
                    </div>
                    <div class="action-row">
                        <ul class="action-list">
                            <li class="item like clickable" @click="handleClick">
                                <p class="title-box">
                                <img src="/public/like.svg">
                                <span class="count">{{ recommend.collectionCount }}</span>
                                </p>
                            </li>
                            <li class="item comment clickable" @click="handleClick">
                                <p class="title-box">
                                <img src="/public/comment.svg">
                                <span class="count">{{ recommend.commentsCount }}</span>
                                </p>
                            </li>
                            <li class="item share clickable hover" title="分享" @click="handleClick">
                                <p class="title-box">
                                <img src="/public/share.svg">
                                </p>
                            </li>
                            <li class="item collect clickable hover" title="收藏" @click="handleClick">
                                <p class="title-box">
                                <img src="/public/collect.svg">
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="thumb" v-if="recommend.screenshot">
                    <img :src="recommend.screenshot" :alt="recommend.title">
                </div>
            </div>
        </li>
    </ul>
</template>
<script>
export default {
    props: {
        type: String
    },
    computed: {
        recommends() {
            return this.$store.state.app.indexList[this.type];
        }
    },
    methods: {
        handleClick(e) {
            this.$message({
                message: '暂未实现此功能',
                type: 'warning'
            })
        }
    }
}
</script>
<style lang="stylus" scoped>
.action-row {
    display: inline-flex;
    white-space: nowrap;
}

.list-item:hover {
    .action-list .item.share, .action-list .item.collect {
        visibility: visible;
    }
}

.action-list {
    display: inline-flex;
    white-space: nowrap;

    > .item {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        padding: 0 10px;
        height: 22px;
        font-size: 12px;
        line-height: 1;
        white-space: nowrap;
        border-radius: 1px;
        border: 1px solid #edeeef;

        .title-box {
            display: flex;
            align-items: center;
            padding: 0 10px;
            height: 100%;
        }

        .count {
            margin-left: 5px;
            font-weight: 700;
            color: #b2bac2;
        }
    }

    > .item.clickable:hover {
        background: #f7f8fa;
    }

    > .item.like {
        padding: 0;
    }

    > .item.comment {
        margin-left: -1px;
        padding: 0;
    }

    > .item.share {
        margin-left: 8px;
        padding: 0;
        visibility: hidden;
    }

    > .item.collect {
        margin-left: -1px;
        padding: 0;
        visibility: hidden;
    }
}
</style>
