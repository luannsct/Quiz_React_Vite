import { useContext, useEffect } from 'react'
import { QuizContext } from './context/quiz'

import BoasVindas from './components/BoasVindas'
import Question from './components/Question'

import './App.css'

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(() => {
    //embaralharPerguntas
    dispatch({ type: "REORDENAR" });

  }, []);

  return (
    <>
      <div className='App'>

        <h1>Quiz de Programação</h1>
        {quizState.gameStage === "Inicio" && <BoasVindas />}
        {quizState.gameStage === "Jogando" && <Question />}
      </div>
    </>
  )
}

export default App
