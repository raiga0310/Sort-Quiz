import React from 'react'
import './App.css'
import CardList from './components/CardList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>かるたアプリ</h1>
        <CardList cardCount={3} />
      </header>
    </div>
  )
}

export default App
