import ReduxCompent from '../src/components/redux/index.js'
import CustomHook from './components/customHook/index.js'
function App() {
  const [num, setNum] = CustomHook()
  return (
    <div className="App">
      <ReduxCompent></ReduxCompent>
      <h1>自定义hook</h1>
      <div
        onClick={() => {
          setNum(num + 3)
        }}
      >
        {num}
      </div>
    </div>
  )
}

export default App
