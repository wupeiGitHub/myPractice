<template>
	<div>
		<!--
        	作者：2368394520@qq.com
        	时间：2019-04-15
        	描述： 1-------动态路由
        -->
		<span>路由的访问条件1值： {{$route.params.goodsId}}</span>&nbsp;
		<span>路由的访问条件2值：{{$route.params.name}}</span>
		<br />
		
		<!--
        	作者：2368394520@qq.com
        	时间：2019-04-15
        	描述： 2-------嵌套路由， 父路由里嵌套子路由
        -->
		<router-link to="/goods/title1">点击显示商品标题</router-link><!--路由跳转连接，相当于a标签-->
		<router-link to="/goods/image1">点击显示商品图片</router-link>
		<div id="showChildren">
			<router-view></router-view><!-- 用来渲染显示子组件的内容 -->
		</div>
		<router-link to="cart">点击进入购物车-方式1</router-link>
		
		<!--
        	作者：2368394520@qq.com
        	时间：2019-04-15
        	描述： 3-------编程路由，通过js来控制路由的跳转
        -->
		<!-- v-on:click可以简写为@click-->
		<button v-on:click="jump">点击进入购物车-方式2</button>
		<button @click="back">回退</button>
		
		<!--
        	作者：2368394520@qq.com
        	时间：2019-04-15
        	描述： 4------命名路由
        -->
        <router-link v-bind:to="{name:'carts',params:{cartId:66}}"> 点击进入购物车-方式3</router-link>
	</div>
</template>

<script>
	export default{
		data:function(){ //可简写为data()
			return{
				msg : 'test'
			}
		},
		methods:{
			jump:function(){//可简写为jump()
				//this.$router.push('/cart'); //方式1
				this.$router.push({path:'/cart'}); //方式2
				//传参
				this.$router.push({path:'/cart?goodsId=666'});
			},
			back(){
				this.$router.go(-1); //返回上一步
			}
		}
	}
</script>

<style>
	#showChildren{
		margin: 20px auto;
		background: pink;
		width: 260px;
		height: 50px;
		padding-top: 10px;
		box-sizing: border-box;
		color: black;
	}
</style>