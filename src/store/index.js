// 1.引入vue 依赖
import Vue from 'vue'
// 2.引入vuex 依赖
import Vuex from 'vuex'

// 使用vuex
Vue.use(Vuex)

export default new Vuex.Store({
  // 1.仓库中存储的状态
  state: {
    status: 0 // 登录状态 1 登录成功 0 没有登录
  },
  // 2.同步修改 修改 state , 修改状态
  mutations: {
    "LOGIN": function (state, payload) {
      console.log(state, payload);
      state.status = payload;
    }
  },
  // 3.异步修改
  actions: {
  },
  // 4.划分模块
  modules: {
  },
  // 5.getter 属性 => vue 中的计算属性
  getters: {

  }
})
