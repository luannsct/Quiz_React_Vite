import { useState } from 'react'
import './App.css'
import BoasVindas from './components/BoasVindas'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>

        <h1>Quiz de Programação</h1>
        <BoasVindas />
      </div>
    </>
  )
}

export default App
