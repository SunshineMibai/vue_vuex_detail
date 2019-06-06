import Vue from 'vue'
import Vuex from 'vuex'
// import Login from './login'
Vue.use(Vuex)

const state = {
	bookList:[
	{id:1,name:"西游记"},
	{id:2,name:"水浒传"},
	{id:3,name:"红楼梦"},
	{id:4,name:"三国演义"}
	]
}
const mutations = {
   ADD_ITEM(state,item) {
      state.bookList.push(item)
   },
   DEL_ITEM(state,id) {
   	state.bookList.map((v,i)=> {
   		if(v.id == id){
   			state.bookList.splice(i,1)
   		}
   	})
   	
   }
}
const actions = {
	add_item({commit},item) {
		commit('ADD_ITEM',item)
	},
	del_item({commit},id) {
		commit('DEL_ITEM',id)
	}
}
export default new Vuex.Store({
	state,
	mutations,
	actions
  // modules: {
  // 	Login
  // }
})
