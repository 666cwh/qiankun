import { createStore } from 'vuex'
// 数据管理
export default createStore({
  state: {
    name: '程',
  },
  actions: {
    // dispatch
    change(context, val) {
      console.log('123', context, val)

      this.commit('changes')
    },
  },
  // commit
  mutations: {
    changes(store, str) {
      console.log('456', str)
      store.name = str
    },
  },
  modules: {},
})
