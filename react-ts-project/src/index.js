import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';//更新后的写法

reportWebVitals();

function render (props) {
    const root = ReactDOM.createRoot(
        document.getElementById('reacttsProjectdemo')
      );
      root.render(
        <React.StrictMode>
          <App />
        </React.StrictMode>
      );
  }
  
  if (!window.__POWERED_BY_QIANKUN__) {
    render({});
  }
  
export async function bootstrap () {
    console.log('[react16] react app bootstraped');
  }
  
  export async function mount(props) {
    console.log('[react16] props from main framework', props);
    render(props);
  }
  
  export async function unmount(props) {
    // root.render(
    //     <React.StrictMode>
    //       <App />
    //     </React.StrictMode>,
    //   );
  }
  