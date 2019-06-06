<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png">
		<button @click='setCode'>dsadsada</button>
		<HelloWorld msg="Welcome to Your Vue.js App"/>
		<div>
			<p v-for='item in bookList' @click='deleteItem(item.id)'>{{item.name}}</p>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { mapState } from 'vuex'
export default {
	name: 'home',
	components: {
		HelloWorld
	},
	mounted() {
		// console.log(this.$store.getters.newbookList)
		// console.log(this.$store.state.Login.bookList)
		// console.log(this.bookList)
	},
	computed:{
		...mapState(['bookList'])
		// list(){
		// 	return this.$store.state.Login.bookList
		// }
	},
	methods: {
		// ...mapMutations([''])
		// setcode(){
		// 	let newObject = {
		// 		id:5,
		// 		name:'葫芦娃'
		// 	}
		// 	this.$store.dispatch('add_book',newObject)
		// 	console.log(this.$store.state.Login.bookList)
		// },
		// deleteItem(item){
		// 	this.$store.dispatch('delete_book',item)
		// }
		deleteItem(id) {
			this.$store.dispatch('del_item',id)
		},
		setCode() {
			let newObject = {
				id:5,name:'葫芦娃'
			}
			this.$store.dispatch('add_item',newObject)
		}
	}
}
</script>
