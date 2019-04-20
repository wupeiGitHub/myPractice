<template>
  <div class="hello">
    <button v-on:click="increment"> + </button>
    <button  @click="decreament"> - </button>
    <p><span>childCounterNum = {{num2}}</span></p>
  </div>
</template>

<script>
export default {
	props : ["num2"],
  name: 'HelloWorld',
  data () {
    return {
//		   num: 0
    }
  },
  methods:{
  	increment(){
  		this.$emit("add");
  	},
  	decreament(){
  		this.$emit("less");
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button{
	 width: 70px;
	 height: 30px;
	 background: paleturquoise;
	 color: blue;
	 font-weight: 400;
	 font-size: 18px;
}
</style>
