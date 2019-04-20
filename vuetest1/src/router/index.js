import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import GoodsList from './../vues/GoodsList.vue'
import Title from '@/vues/Title'
import Image from '@/vues/Image'
import Cart from '@/vues/Cart'

Vue.use(Router)
export default new Router({
//mode设置：hash(是默认值)地址栏要加#才能访问到router路由， 而history不要#才能访问到
//	mode : "history", 
  routes: [
    {
      path: '/goods',//  path: '/goods/:goodsId/name/:name',
      name: 'GoodsList',
      /*component: GoodsList,
      children:[
	      {
	      	path : 'title1', //不加/表示相对路径，加上/表示绝对路径了，会和上面的path连接起来
	      	name : 'title',
	      	component: Title
	      },{
	      	path : 'image1',
	      	name : 'image',
	      	component: Image
	      }
      ]*/
     components:{
     		default : GoodsList,
     		title : Title,
     		img : Image
     }
     
    },{
    	path: '/cart/:cartId',
      name: 'carts',
      component: Cart
    }
  ]
})
