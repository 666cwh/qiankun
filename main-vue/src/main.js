import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import App from './App.vue'

import {
  start,
  setDefaultMountApp,
  registerMicroApps,
  addGlobalUncaughtErrorHandler,
} from 'qiankun'

//注册组件
createApp(App).use(ElementPlus, { locale }).mount('#app')

//qiankun子应用配置
registerMicroApps(
  [
    {
      name: 'vue-project', // app name registered
      entry: '//localhost:8889',
      container: '#vueProject',
      activeRule: '/vue-project',
    },
    {
      name: 'vue2-project', // app name registered
      entry: '//localhost:7777',
      container: '#vue2Project',
      activeRule: '/vue2-project',
    },
    {
      name: 'react-project', // app name registered
      entry: '//localhost:8899',
      container: '#reactProject',
      activeRule: '/react-project',
    },
    {
      name: 'react-ts-project', // app name registered
      entry: '//localhost:8877',
      container: '#reacttsProject',
      activeRule: '/react-ts-project',
    },
  ],
  {
    beforeLoad: (app) => {
      //   console.log('before load app.name====>>>>>', app.name)
    },
    beforeMount: [
      (app) => {
        // console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name)
      },
    ],
    afterMount: [
      (app) => {
        // console.log('[LifeCycle] after mount %c%s', 'color: green;', app.name)
      },
    ],
    afterUnmount: [
      (app) => {
        // console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name)
      },
    ],
  }
)
//默认打开项目
setDefaultMountApp('/vue-project')
//全局捕获异常
addGlobalUncaughtErrorHandler((event) => console.log(event))
