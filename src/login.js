import Vuex from 'vuex';
import Vue from 'vue'
Vue.use(Vuex)

const state = {
	loginCode:'0'
}

const mutations = {
	LOGIN_SET_CODE(state,code){
		state.loginCode = code
	}
}

const actions = {
	setcode({commit},{data}) {
		commit('LOGIN_SET_CODE',data)
	}
}

export default new Vuex.Store({
	// namespaced:true,
	state,
	mutations,
	actions
})