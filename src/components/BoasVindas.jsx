import React from 'react'

import { useContext } from 'react'
import { QuizContext } from '../context/quiz'

import Quiz from "../img/quiz.svg"


import './Welcome.css'

const BoasVindas = () => {
    const quizState = useContext(QuizContext);
    console.log(quizState);
    return (
        <div id="welcome">
            <h2>Seja Bem-Vindo!</h2>
            <p>Clique no botão abaixo para começar</p>
            <button>Iniciar</button>
            <img src={Quiz} alt="Inicio do Quiz" />
        </div>
    )
}

export default BoasVindas