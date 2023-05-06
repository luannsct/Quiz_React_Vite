import { createContext, useReducer } from "react";

import perguntas from '../data/questions';

const ESTAGIOS = ["Inicio", "Jogando", "Finalizado"];

const initialState = {
    gameStage: ESTAGIOS[0],
    perguntas,
    perguntaAtual: 0,
}

const quizReducer = (estagio, acao) => {

    switch (acao.type) {
        case "MUDOU_ESTAGIO":
            return {
                ...estagio,
                gameStage: ESTAGIOS[1],
            }
        case "REORDENAR":
            const reordenarPerguntas = perguntas.sort(() => {
                return Math.random() - 0.5;
            });
            return {
                ...estagio,
                perguntas: reordenarPerguntas,
            }
        default:
            return estagio
    }
}

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
    const value = useReducer(quizReducer, initialState);
    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
};