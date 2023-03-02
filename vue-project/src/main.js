import { createApp } from 'vue'
import App from './App.vue'
import {
    renderWithQiankun,
    qiankunWindow,
  } from 'vite-plugin-qiankun/dist/helper'
  


function render() {
    let app = createApp(App)
    app.mount(document.querySelector('#vueProjectdemo'))
  }
  
  renderWithQiankun({
    bootstrap() {
      // do nothing.
    },
    mount(props) {
      render(props.container);
    },
    unmount() {
      app?.unmount();
    }
  })
  
  if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
    render();
  }

// createApp(App).mount('#vueProject')
