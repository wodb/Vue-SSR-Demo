<template>
    <ul class="entry-list">
        <li class="item" v-for="(recommend, index) in recommends" :key="index">
            <div class="content-box">
                <div class="info-box">
                    <div class="info-row title-row">
                        <a href="javascript:void(0)" target="_blank" class="title">{{recommend.title}}</a>
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
    export default {
        props:{
            type:String
        },
        computed:{
            recommends() {
                return this.$store.state.app.indexList[this.type]
            }
        }
    }
</script>