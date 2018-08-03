<template>
	<div class="auth-login">
		<div class="login-container">
			<div class="login-img">
				<img src="/public/normal.png" alt="">
			</div>
			<div class="login-head">
				<h1 class="title">登陆</h1>
				<i class="el-icon-close" @click="handleLogin"></i>
			</div>
			<div class="login-content">
				<el-form :rules="rules2" status-icon ref="ruleForm2" :model="ruleForm2">
				  	<el-form-item prop="username">
				  	  	<el-input v-model="ruleForm2.username" placeholder="请输入手机号或邮箱" />
				  	</el-form-item>
				  	<el-form-item prop="password">
				  	  	<el-input type="password" v-model="ruleForm2.password" placeholder="请输入密码" />
				  	</el-form-item>
				  	<el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
				</el-form>
			</div>
		</div>
	</div>
</template>
<script>
	import { setCookie } from '@/util/util'
	export default {
		props:{
			handleLogin:{
				type:Function,
				require:true
			}
		},
		data() {
	      	return {
		        ruleForm2: {
		          	username: '',
		          	password: '',
		        },
		        rules2: {
		          	username: [
		          	  	{ validator: (rule, value, callback) => {
					        if (value === '') {
					          	callback(new Error('请输入用户名'))
					        } else {
					          	callback()
					        }
					    }, trigger: 'blur' }
		          	],
		          	password: [
		          	  	{ validator: (rule, value, callback) => {
					        if (value === '') {
					          	callback(new Error('请输入密码'));
					        } else {
					          	callback();
					        }
					    }, trigger: 'blur' }
		          	]
		        }
		    }
		},
		methods:{
			submitForm(formName) {
		        this.$refs[formName].validate((valid) => {
		          	if (valid) {
		            	this.$message.success('登陆成功')
		            	this.handleLogin()
		            	setCookie('token',this.ruleForm2.username)
		            	// 刷新
		            	location.reload()
		          	} else {
		            	console.log('error submit!!')
		            	return false
		          	}
		        })
		    }
		}
	}
</script>
<style lang="stylus">
.auth-login
	position fixed
	top 0
	left 0
	right 0
	bottom 0
	z-index 20
	display flex
	justify-content center
	align-items center
	background-color rgba(0,0,0,.3)
.login-container
	position relative
	padding 24px
	width 320px
	max-width 100%
	font-size 14px
	background-color #fff
	border-radius 2px
	box-sizing border-box
	.login-img
		position absolute
		top 0
		left 50%
		width 120px
		transform translate(-50%,-83%)
		z-index 1
	.login-head
		display flex
		justify-content space-between
		align-items center
		margin-bottom 15px
		h1
			font-size 18px
			font-weight 700
		i
			cursor pointer
	
.el-button 
	width 100%
	span
		color #fff
</style>