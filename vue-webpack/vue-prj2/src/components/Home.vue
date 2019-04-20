<!-- 组件---1模板：html结构 -->
<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <HelloWorld/> -->
			<app-head v-bind:title="title" v-on:titleChanged="getMsg($event)"  />
			<User v-bind:users="users" />
			<User v-bind:users="users" />
			<app-foot v-bind:title="title" />
  </div>
</template>
<!-- 局部组件---2脚本：处理逻辑 -->
<script>
import User from './Users'
import Head from './Header.vue'
import Foot from './Footer.vue'
export default {
	name: 'App',
	data(){
		return {
			users :[
				/* {name:'张三', job: 'web前端开发', show : true},
				{name:'张三2', job: 'web前端开发', show : false},
				{name:'张三3', job: 'web前端开发', show : false},
				{name:'张三4', job: 'web前端开发', show : false},
				{name:'张三6', job: 'web前端开发', show : false},
				{name:'张三7', job: 'web前端开发', show : false},
				{name:'张三8', job: 'web前端开发', show : false},
				{name:'张三9', job: 'web前端开发', show : false},
				{name:'张三10', job: 'web前端开发', show : false},
				{name:'张三11', job: 'web前端开发', show : false},
				{name:'张三11', job: 'web前端开发', show : false}, */
			],
			title : " 当前传递的值是一个字符串"
		}
	},
	methods:{
		getMsg(ttt){
			this.title = ttt;
		}
	},
	components: {
	//HelloWorld,
		"User": User,
		"app-head": Head,
		"app-foot": Foot
	} ,
// 	beforeCreate:function(){
// 		alert('beforeCreate是组件实例化之前执行的函数');
// 	},
	created:function(){
		//-------created：实例化完成，页面还没有显示，但是虚拟DOM已经配置了。
		this.$http.get('http://jsonplaceholder.typicode.com/users').then(
			(data) =>{
				//data返回值是一个对象
				this.users = data.body;
			}
		)
	}
	/*beforeMount:function(){
		alert('beforeMount表示组件挂载前，页面仍未显示，但虚拟Dom已经配置完毕');
	},
	mounted:function(){
		alert('mounted表示组件挂载后，此方法执行后，页面将显示');
	},
	beforeUpdate:function(){
		alert('beforeUpdate：组件更新前，页面还未显示，但是虚拟Dom已经配置');
	},
	updated:function(){
		alert('updated：组件发生更新，此方法执行后，页面就显示');
	},
	beforeDestory:function(){
		alert('beforeDestory：组件销毁前执行的函数');
	},
	destoryed:function(){
		alert('destoryed：组件销毁函数');
	} */
}
</script>
<!-- 组件---3样式：结构渲染 -->
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>