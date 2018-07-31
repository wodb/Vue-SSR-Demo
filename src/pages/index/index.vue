<template>
    <div class="container main-container">
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
    		<router-view></router-view>
    	</div>
        <div class="welcome__side bg-white">
            {{rightText}}
        </div>
    </div>
</template>
<script>
    export default {
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
        data() {
            return {
                rightText:'右侧文字',
            }
        },
        mounted() {
            console.log(this.$route)
        }
    }
</script>
<style lang="stylus">
.container 
    position relative;
    margin 0 auto;
    width 100%;
    max-width 1200px;
    margin-top 15px;
    display flex;
.welcome__feed 
    flex 1
.welcome__side 
    width 240px;
    min-width 240px;
    margin-left 20px;
    display flex;
    justify-content center;
    align-items center;
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
    .item 
        border-bottom 1px solid rgba(178,186,194,.15);
        color #90979c;
    .content-box
        padding 18px 24px;
        display flex
    .info-box
        flex 1
    .thumb
        width 106px;
    .title-row
        margin 6px 0 10px;
        white-space nowrap;
        overflow hidden;
        text-overflow ellipsis;
        .title
            color #333;
    .info-row
        color #8f969c;
    .meta-list
        display flex;
        align-items baseline;
        white-space nowrap;
        .item:not(:last-child):not(.category)::after
            content "·";
            margin 4.8px;
            color #8f969c;
        .user-popover-box
            display inline;
    .category-title
        display inline-block;
        margin-right 14px;
        padding 4.5px 0;
        min-width 60px;
        text-align center;
        line-height 1;
        color #fff;
        background-color #c69f42;
        border-radius 2px;
        font-size 12px
        &.frontend
            background-color #56c4e1;
        &.android
            background-color #42c67d;
        &.ai
            background-color #e8596b;
        &.backend
            background-color #857dea;
        &.ios
            background-color #ff955b;

</style>