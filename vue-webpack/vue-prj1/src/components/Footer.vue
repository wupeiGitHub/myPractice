<template>
	<footer>
		<h4> {{content}} -- {{title}}</h4>
	</footer>
</template>

<script>
	export default{
		name : 'Footer',
		props :{
			title:{
				type: String
			}
		},
		data(){
			return {
				content: '底部内容'
			}
		}
	}
</script>

<style>
	footer{
		width: 100%;
		height: 50px;
		background: black;
		color: white;
		line-height: 50px;
	}
</style>
