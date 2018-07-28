<template>
    <div class="container main-container">
    	<div class="feed welcome__feed bg-white">
    		<!-- 文章标题 -->
    		<nav class="category-nav">
    			<h5>热门文章</h5>
    			<ul class="nav-list">
    				<li class="nav-item">
    					<span class="title">推荐</span>
    				</li>
                    <li class="nav-item">
                        <span class="title">推荐</span>
                    </li>
                    <li class="nav-item">
                        <span class="title">推荐</span>
                    </li>
                    <li class="nav-item">
                        <span class="title">推荐</span>
                    </li>
                    <li class="nav-item">
                        <span class="title">推荐</span>
                    </li>
                    <li class="nav-item">
                        <span class="title">推荐</span>
                    </li>
                    <li class="nav-item">
                        <span class="title">推荐</span>
                    </li>
                    <li class="nav-item">
                        <span class="title">推荐</span>
                    </li>
    			</ul>
    		</nav>
    		<!-- 内容 -->
    		<ul class="entry-list">
    			<li class="item">
    				<div class="entry">
    					<div href="javascript:void(0)" target="_blank" class="entry-link">
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
    												<a href="/user/5aedd9ae518825672c00d67c" target="_blank">
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
            右侧
        </div>
    </div>
</template>
<script>

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
.category-nav 
    display:flex;
    justify-content: space-between;
    border-bottom: 1px solid #f6f6f6;
    padding:18px 24px;
    ul 
        display:flex;
    .nav-item 
        margin-right:20px;
        &.hover
            color: #007fff;
    
	
</style>