import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  renderWithQiankun,
  qiankunWindow,
} from 'vite-plugin-qiankun/dist/helper'

function render() {
  let app = createApp(App)
  app.use(ElementPlus)
  app.use(router)
  app.use(store)
  app.mount(document.querySelector('#vueProjectdemo'))
}

renderWithQiankun({
  bootstrap() {
    // do nothing.
  },
  mount(props) {
    render(props.container)
  },
  unmount() {
    // let app = createApp(App)
    // app.mount(document.querySelector('#vueProjectdemo')).unmount()
  },
})

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render()
}

// createApp(App).mount('#vueProject')
