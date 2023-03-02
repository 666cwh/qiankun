import { createApp } from 'vue'
import App from './App.vue'
import {
  start,
  setDefaultMountApp,
  registerMicroApps,
  addGlobalUncaughtErrorHandler,
} from 'qiankun'
  

createApp(App).mount('#app')



registerMicroApps(
  [
    {
      name: 'vue-project', // app name registered
      entry: '//localhost:8888',
      container: '#vueProject',
      activeRule: '/vue-project',
    },
  ],
  {
    beforeLoad: (app) => {
      console.log('before load app.name====>>>>>', app.name)
    },
    beforeMount: [
      (app) => {
        console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name)
      },
    ],
    afterMount: [
      (app) => {
        console.log('[LifeCycle] after mount %c%s', 'color: green;', app.name)
      },
    ],
    afterUnmount: [
      (app) => {
        console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name)
      },
    ],
  }
)
setDefaultMountApp('/vue-project')
start()
addGlobalUncaughtErrorHandler((event) => console.log(event))
