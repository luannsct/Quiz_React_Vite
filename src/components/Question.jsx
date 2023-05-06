
import { useContext } from 'react'
import { QuizContext } from '../context/quiz'

const Question = () => {

    const [quizState, dispatch] = useContext(QuizContext);
    const perguntaatual = quizState.perguntas[quizState.perguntaAtual]

    return (
        <div id='questions'>
            <p>Pergunta {quizState.perguntaAtual + 1} de {quizState.perguntas.length} </p>
            <h2>{perguntaatual.pergunta}</h2>
            <div id="options-container">
                <p>opcoes</p>
            </div>
            <button>Continuar</button>
        </div>
    )
}

export default Question