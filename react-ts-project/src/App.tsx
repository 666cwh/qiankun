import React from 'react'
import './App.css'
import Hello from './components/Hello'
import LikeButton from './components/useState'
import ProjectApp from './components/project/index'

function App() {
  return (
      <div className="App">
          <ProjectApp></ProjectApp>
          <Hello mes="TS组件"></Hello>
          <LikeButton></LikeButton>
    </div>
  )
}

export default App
