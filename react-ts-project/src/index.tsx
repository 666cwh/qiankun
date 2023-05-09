import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { createRoot } from 'react-dom/client' //更新后的写法

const root = ReactDOM.createRoot(
  document.getElementById('reacttsProjectdemo') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

function render(props: any) {
//   const root = ReactDOM.createRoot(
//     document.getElementById('reacttsProjectdemo') as HTMLElement
//   )
//   root.render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   )
//   createRoot(document.getElementById('reacttsProjectdemo')as HTMLElement).render(
//       <React.StrictMode>
//         <App />
//       </React.StrictMode>,
//     );
}
if (!((window as any).__POWERED_BY_QIANKUN__)) {
    render({});
  }

export async function bootstrap() {
  console.log('[react16] react app bootstraped')
}

export async function mount(props: any) {
  console.log('[react16] props from main framework', props)
  render(props)
}

export async function unmount(props: any) {
  // root.render(
  //     <React.StrictMode>
  //       <App />
  //     </React.StrictMode>,
  //   );
}

reportWebVitals()
