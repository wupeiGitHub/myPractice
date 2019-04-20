<!-- 组件---1模板：html结构 -->
<template>
  <div id="app">
		<ul>
			<li> 
					<!-- <a href="/helloworld">hello页面 </a> -->
					<router-link class="cla" to="helloworld">hello页面</router-link>
			</li>
			<li> <!-- <a href="/">home页面 </a> -->
					<router-link class="cla" to="/">home页面</router-link>
			</li>
		</ul>
		<router-view></router-view>
  </div>
</template>

<!-- 局部组件---2脚本：处理逻辑 -->
<script>

</script>


<!-- 组件---3样式：结构渲染 -->
<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}

ul{
	width: 100%;
	/* background: #fff; */
	height: 20px;
	margin: 0px auto;
}
li{
	list-style: none;
	background: gray;
	float: left;
	margin: 0px auto;
	padding: 0px 10%;
	line-height: 20px;
}
.cla {
	font-size: 16px;
	color: white;
}
</style>
