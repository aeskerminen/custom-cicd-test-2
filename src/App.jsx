import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 data-testid="cypress-heading">GIGACHAD</h1>
      <div className="card">
        <button data-testid="cypress-button" onClick={() => setCount((count) => count + 1)}>
          count is <span data-testid="cypress-button-count">{count}</span>
        </button>
      </div>
    </>
  )
}

export default App
