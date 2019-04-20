//实例化vue对象
/**
 * el: element元素的的缩写
 * data: 用于数据的存储
 * methods: 事件方法
 */
//-----公共过滤器
Vue.filter('addZero',function(num){
	return num<10 ?('0'+num) : num;
});

//-------内部vue实例
new Vue({
	el:"#div-vue", 
	data:{
		name: 'wupei666666',
		age : 29,
		website : 'http://www.baidu.com',
		job : 'web前端开发',
		websiteTag : '<a href="https://cn.vuejs.org/v2/guide/"> vue官网 </a>',
		x : 0,
		y : 0
	},
	methods:{
		helloFn: function(){
			return '我是一个方法，name='+this.name+' age='+this.age;
		},
		add(){
			this.age++;
		},
		subtract(){
			this.age--;
		},
		add2(num){
			this.age += num;
		},
		subtract2(num){
			this.age -= num;
		},
		changeXY(event){
			event = event || window.event; 
			//console.log(event);
			this.x = event.offsetX;
			this.y = event.offsetY;
		},
		//------------------冒泡事件，默认事件的取消
		clk1(){
			console.log('div1被触发了');
		},
		clk2(){
			console.log('div2被触发了');
		},
		clk3(e){
			console.log('div3被触发了');
			e.stopPropagation(); //阻止事件冒泡
			//e.cancelBubble(); //IE的写法
		},
		open(e){
			console.log('a标签点击成功1。。。。。。。。。');
			e.preventDefault(); //取消标签自身事件的默认行为
		},
		open2(e){
			console.log('a标签点击成功2。。。。。。。。。');
		},
		once(){
			console.log('我只能被触发一次');
		},
		keyOn(type){
			console.log('当前按下了'+type+'键');
		}
	},
	//-----------内部过滤器
	filters:{
		number : function(data,n){
			return data.toFixed(n); //保留n位小数
		}
	}
});