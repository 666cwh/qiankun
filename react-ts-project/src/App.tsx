import React from 'react'
import './App.css'
import Hello from './components/Hello'
import LikeButton from './components/useState'

function App() {
  return (
    <div className="App">
          <Hello mes="TS组件"></Hello>
          <LikeButton></LikeButton>
    </div>
  )
}

export default App
