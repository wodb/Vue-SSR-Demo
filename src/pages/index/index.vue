<template>
    <div class="container main-container">
    	<div class="feed welcome__feed bg-white">
    		<!-- 文章标题 -->
    		<nav class="category-nav">
    			<h5>热门文章</h5>
    			<ul class="nav-list">
    				<li class="nav-item" v-for="tag in tags" :key="tag.id">
    					<span class="title">{{tag.text}}</span>
    				</li>
    			</ul>
    		</nav>
    		<!-- 内容 -->
    		<ul class="entry-list">
    			<li class="item">
    				<div class="entry">
    					<div class="entry-link">
    						<div class="content-box">
    							<div class="info-box">
    								<div class="info-row title-row">
                                        <a href="javascript:void(0)" target="_blank" class="title">这样你都不懂Promise,算我输！</a>
    								</div>
    								<div class="info-row meta-row">
    									<ul class="meta-list">
    										<li class="item category">
    											<span class="category-title frontend">前端</span>
    										</li>
    										<li class="item username clickable">
    											<div class="user-popover-box">
    												<a href="javascript:void(0)" target="_blank">
    													viyoung
    												</a>
    											</div>
    										</li>
    										<li class="item">
    											2天前
    										</li>
    										<li class="item">
    											3864 次阅读
    										</li>
    									</ul>
    								</div>
    							</div>
    						</div>
    					</div>
    				</div>
    			</li>
    		</ul>
    	</div>
        <div class="welcome__side bg-white">
            {{rightText}}
        </div>
    </div>
</template>
<script>
    export default {
        asyncData({store,router}) {
            return store.dispatch('getIndexTags')
		},
		computed: {
            tags() {
                return this.$store.state.app.indexTags
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
    position: relative;
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
    margin-top: 15px;
    display: flex;
.welcome__feed 
    flex:1;
.welcome__side 
    width: 240px;
    min-width:240px;
    margin-left: 20px;
    display:flex;
    justify-content:center;
    align-items:center;
.category-nav 
    display:flex;
    justify-content: space-between;
    border-bottom: 1px solid #f6f6f6;
    padding:18px 24px;
    ul 
        display:flex;
    .nav-item 
        margin-right:20px;
        font-size:14px;
        cursor:pointer;
    .title
        color: #90979c;
        &.hover
            color: #007fff;
    
.entry-list
    .item 
        border-bottom: 1px solid rgba(178,186,194,.15);
        color: #90979c;
    .content-box
        display:flex;
        padding:18px 24px;
    .title-row
        margin: 6px 0 10px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        .title
            color:#333;
    .info-row
        color: #8f969c;
    .meta-list
        display: flex;
        align-items: baseline;
        white-space: nowrap;
        .item:not(:last-child):not(.category)::after
            content: "·";
            margin: 4.8px;
            color: #8f969c;
        .user-popover-box
            display:inline;
    .category-title
        display: inline-block;
        margin-right: 14px;
        padding: 4.5px 0;
        min-width: 54px;
        text-align: center;
        line-height: 1;
        color: #fff;
        background-color: #c69f42;
        border-radius: 2px;
        &.frontend
            background-color: #56c4e1;

</style>