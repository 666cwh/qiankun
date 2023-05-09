// import logo from './logo.svg';
// import './App.css';
import Text from './components/react-project/test'
import ClassState from './components/react-project/01stateHook.js/class'
import HookState from './components/react-project/01stateHook.js/hook'
import ClassuseEffect from './components/react-project/02useEffect/class'
import HookuseEffect from './components/react-project/02useEffect/hook'
import  BaseType from './components/ts-project/01BaseType.tsx'

function App() {
  return (
      <div className="App">
          <h1>01startHook</h1>
          <ClassState></ClassState>
          <HookState></HookState>
          <h1>02useEffect</h1>
          <ClassuseEffect></ClassuseEffect>
          <HookuseEffect></HookuseEffect>
          <h1>TS</h1>
          <BaseType></BaseType>
      {/* <Text></Text> */}
      {/* react-project */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  )
}

export default App
