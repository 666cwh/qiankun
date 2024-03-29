import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import App from './App.vue'




// createApp(App).mount('#vue2Projectdemo')

// let instance = null;
function render () {
  createApp(App).use(ElementPlus, { locale }).mount(document.querySelector('#vue2Projectdemo'))
}
// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
    render();
  }
  
  export async function bootstrap() {
    // console.log('[vue] vue app bootstraped');
  }
  export async function mount(props) {
    // console.log('[vue] props from main framework', props);
    render(props);
  }
  export async function unmount() {
    // instance.$destroy();
  }