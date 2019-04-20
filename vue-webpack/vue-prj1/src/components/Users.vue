<template>
	<div id="user">
		 <h2>{{ msg }}</h2>
		<ul>
			<li v-for="user of users" v-on:click="user.show = !user.show" title="点击显示和隐藏工作">
				<h4>姓名: {{user.name}}</h4>
				<h4 v-show="user.show">工作: {{user.job}}</h4>
			</li>
		</ul>
		<button v-on:click="deleteUser()"> 点我删除一个用户信息 </button>
	</div>
</template>
<!-- 
		传值：string ,boolean ,number
		传引用：Array, object 
-->
<script>
export default {
  name: 'User',
  //props: ['users'],
  props:{
	  users:{
		  type: Array,
		  requried: true
	  }
  },
  methods:{
	  deleteUser(){
		  this.users.pop(); //删除
	  }
  },
  data () {
    return {
		msg : '这是用户的界面信息标题'
		/* ,users :[
			{name:'张三', job: 'web前端开发', show : true},
			{name:'张三2', job: 'web前端开发', show : false},
			{name:'张三3', job: 'web前端开发', show : false},
			{name:'张三4', job: 'web前端开发', show : false},
			{name:'张三6', job: 'web前端开发', show : false},
			{name:'张三7', job: 'web前端开发', show : false},
			{name:'张三8', job: 'web前端开发', show : false},
			{name:'张三9', job: 'web前端开发', show : false},
			{name:'张三10', job: 'web前端开发', show : false},
			{name:'张三11', job: 'web前端开发', show : false},
		] */
    }
  }
}
</script>

<style scoped="scoped">
	#user{
		width: 100%;
		max-width: 100%;
		height: auto;
		background: pink;
		margin: 5px auto;
		padding: 0 20px;
		box-sizing: border-box;
	}
	#user ul{
		display: flex;
		flex-wrap: wrap; 
		padding: 0;
		list-style-type: none;
	}
	#user ul li{
		list-style: none;
		flex-grow: 2;
		flex-basis:150px;
		text-align: center;
		padding: 30px;
		border: 1px solid #222;
		margin: 5px;
	}
	h2{
		color: red;
	}
</style>
