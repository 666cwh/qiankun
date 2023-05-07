// import logo from './logo.svg';
// import './App.css';
import Text from './components/test'
import ClassState from './components/01stateHook.js/class'
import HookState from './components/01stateHook.js/hook'
import ClassuseEffect from './components/02useEffect/class'
import HookuseEffect from './components/02useEffect/hook'

function App() {
  return (
      <div className="App">
          <h1>01startHook</h1>
          <ClassState></ClassState>
          <HookState></HookState>
          <h1>02useEffect</h1>
          <ClassuseEffect></ClassuseEffect>
          <HookuseEffect></HookuseEffect>
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
