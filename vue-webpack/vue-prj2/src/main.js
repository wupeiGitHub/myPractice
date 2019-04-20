import Vue from 'vue'
//---1.导入路由
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import Home from './components/Home'
import Helloworld from './components/HelloWorld'

Vue.config.productionTip = false
//----2.使用路由
Vue.use(VueRouter)
//----使用http
Vue.use(VueResource)
//-----3.路由配置
const router = new VueRouter({
		routes : [
			{
				path : "/",
				component : Home
			},
			{
				path : "/helloworld",
				component : Helloworld
			}
		],
		mode : 'history'
})
//创建一全局组件
//Vue.component('User',User);

/* eslint-disable no-new */
new Vue({
	router,
  el: '#app',
  components: { App },
  template: '<App/>'
})
