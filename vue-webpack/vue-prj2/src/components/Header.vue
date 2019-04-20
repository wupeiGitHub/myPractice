<template>
	<header>
		<h4> {{titleOld}} -- {{title}} <button @click="updateTitle"> 点我修改标题</button> </h4>
	</header>
</template>

<script>
	export default{
		name : 'Header',
		props :{
			title:{
				type: String
			}
		},
		methods:{
			updateTitle(){
				//this.title = ' 这是我改变的标题新值';
				this.$emit('titleChanged','我是子向父组件传递的值');
			}
		},
		data(){
			return {
				titleOld: '头部内容',
				transmitMsg : ''
			}
		}
	}
</script>

<style scoped="scoped">
	header{
		width: 100%;
		height: 80px;
		background: gray;
		line-height: 80px;
		color: white;
	}
</style>