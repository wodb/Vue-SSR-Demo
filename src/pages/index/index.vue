<template>
    <div class="container">
    	<div class="feed welcome__feed bg-white">
    		<!-- 文章标题 -->
    		<nav class="category-nav">
    			<h5>热门文章</h5>
    			<ul class="nav-list">
    				<li class="nav-item" v-for="tag in tags" :key="tag.id">
    					<span class="title">
							<router-link exact :to="'/index' + (tag.attr)">{{tag.text}}</router-link>
						</span>
    				</li>
    			</ul>
    		</nav>
    		<!-- 内容 -->
            <transition name="el-fade-in-linear">
    		    <router-view></router-view>
            </transition>
    	</div>
    </div>
</template>
<script>
import { throttle } from '@/util/util'
import { mapActions } from 'vuex'
export default {
    data() {
        return {}
    },
    asyncData({store,router}) {
        return store.dispatch('FETCH_INDEX_TAGS')
	},
	computed: {
        tags() {
            return this.$store.state.app.indexTags
		},
		currentTag() {
            return this.$store.state.app.activeType
		}
	},
    mounted() {
        this.throttleLoad = throttle(this.onscroll,1500,{
            leading:false
        })
        window.addEventListener('scroll',this.throttleLoad)
    },
    beforeDestroy() {
        window.removeEventListener('scroll',this.throttleLoad)
    },
    methods:{
        ...mapActions({
            fetchList:'FETCH_INDEX_LIST_BY_TYPE'
        }),
        onscroll() {
            
            const doc = document.documentElement

            if (doc.offsetHeight <= (doc.scrollTop + doc.clientHeight + 200)) {

                this.fetchList({type:this.type})
                    .then(res => {
                        this.$message({
                            message:'加载完成',
                            type:'success'
                        })
                    })
                    .catch(err => {
                        this.$message({
                            message:err,
                            type:'error'
                        })
                    })
            }
        }
    }
}
</script>
<style lang="stylus">

.container 
    margin 0 auto;
    width 100%;
    max-width 1200px;
    display flex;

.welcome__feed 
    flex 1
    
.category-nav 
    display flex;
    justify-content space-between;
    border-bottom 1px solid #f6f6f6;
    padding 18px 24px;
    ul 
        display flex;
    .nav-item 
        margin-right 20px;
        font-size 14px;
        cursor pointer;
    .title
        color #90979c;
	&.hover,&.router-link-active
		color #007fff;

.entry-list
    .list-item 
        border-bottom 1px solid rgba(178,186,194,.15);
        color #90979c;
        cursor pointer
        &:hover
            background-color rgba(0,0,0,.01)
    .content-box
        padding 18px 24px;
        display flex
    .info-box
        flex 1
    .thumb
        width 106px;
        height 62px
    .title-row
        margin 6px 0 10px;
        white-space nowrap;
        overflow hidden;
        text-overflow ellipsis;
        .title
            color #333;
    .info-row
        color #8f969c;
</style>