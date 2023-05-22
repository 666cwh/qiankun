import { createStore } from 'vuex'
// 数据管理
export default createStore({
  state: {
    name: '程',
  },
  actions: {
    change() {
      console.log('123')
     
      this.commit('changes')
    },
  },
  mutations: {
    changes(store,str) {
          console.log('456',str)
          store.name = str
    },
  },
  modules: {},
})
