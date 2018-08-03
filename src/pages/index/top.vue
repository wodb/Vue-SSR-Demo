<template>
    <ul class="entry-list">
        <li class="list-item" v-for="(recommend, index) in recommends" :key="index">
            <div class="content-box">
                <div class="info-box">
                    <div class="info-row title-row">
                        <a :href="recommend.originalUrl" target="_blank" class="title">{{recommend.title}}</a>
                    </div>
                    <div class="info-row meta-row">
                        <ul class="meta-list">
                            <li class="item category">
                                <span class="category-title" :class="recommend.category.title">{{recommend.category.name}}</span>
                            </li>
                            <li class="item username clickable">
                                <div class="user-popover-box">
                                    <a href="javascript:void(0)" target="_blank">
                                        {{recommend.user.username}}
                                    </a>
                                </div>
                            </li>
                            <li class="item">
                                {{ recommend.createdAt | formatter }}
                            </li>
                            <li class="item">
                                {{recommend.viewsCount}} 次阅读
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
import { throttle } from '@/util/util'
import { mapActions } from 'vuex'

export default {
    props: {
        type: String
    },
    computed: {
        recommends() {
            return this.$store.state.app.indexList[this.type];
        }
    },
    mounted() {
        window.addEventListener('scroll',throttle(this.onscroll,500))
    },
    beforeDestroy() {
        window.addEventListener('scroll',throttle(this.onscroll,500))
    },
    methods: {
        ...mapActions({
            fetchList:'FETCH_INDEX_LIST_BY_TYPE'
        }),
        onscroll() {
            const doc = document.documentElement
            // 预加载
            if (doc.clientHeight + 300 <= doc.offsetHeight - doc.scrollTop ) {
                return false
            }
            this.fetchList({type:this.type})
                .then(res => {
                    this.$message({
                        message:'加载完成',
                        type:'success'
                    })
                })
        }
    }
};
</script>
<style lang="stylus" scoped>
.meta-list {
    display: flex;
    align-items: baseline;
    white-space: nowrap;

    .item:not(:last-child):not(.category)::after {
        content: '·';
        margin: 4.8px;
        color: #8f969c;
    }

    .user-popover-box {
        display: inline;
    }
}

.category-title {
    display: inline-block;
    margin-right: 14px;
    padding: 4.5px 0;
    min-width: 60px;
    text-align: center;
    line-height: 1;
    color: #fff;
    background-color: #c69f42;
    border-radius: 2px;
    font-size: 12px;

    &.frontend {
        background-color: #56c4e1;
    }

    &.android {
        background-color: #42c67d;
    }

    &.ai {
        background-color: #e8596b;
    }

    &.backend {
        background-color: #857dea;
    }

    &.ios {
        background-color: #ff955b;
    }
}
</style>
