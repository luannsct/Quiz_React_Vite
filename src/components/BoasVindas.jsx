import React from 'react'

import { useContext } from 'react'
import { QuizContext } from '../context/quiz'

import Quiz from "../img/quiz.svg"


import './Welcome.css'

const BoasVindas = () => {
    const [quizState, dispatch] = useContext(QuizContext);

    return (
        <div id="welcome">
            <h2>Seja Bem-Vindo!</h2>
            <p>Clique no botão abaixo para começar</p>
            <button onClick={() => { dispatch({ type: "MUDOU_ESTAGIO" }) }}>Iniciar</button>
            <img src={Quiz} alt="Inicio do Quiz" />
        </div>
    )
}

export default BoasVindas