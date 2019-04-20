<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <counters v-bind:num2="num" v-on:add="addNum" v-on:less="lessNum" ></counters>
    <p>parentnum = {{num}}</p>
  </div>
</template>

<script>
	import counters from './Counter'
	export default {
	  name: 'HelloWorld',
	  data () {
	    return {
	      msg: 'Welcome to Your Vue.js App',
	      num: 9
	    }
	  },
	  components:{
	  	counters
	  },
	  methods:{
	  	addNum(){
	  		this.num++;
	  	},
	  	lessNum(){
	  		this.num--;
	  	}
	  }
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
