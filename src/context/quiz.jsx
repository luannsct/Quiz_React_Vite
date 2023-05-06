import { createContext, useReducer } from "react";

import perguntas from '../data/questions';

const ESTAGIOS = ["Inicio", "Jogando", "Finalizado"];

const initialState = {
    gameStage: ESTAGIOS[0],
    perguntas
}

const quizReducer = (estagio, acao) => {
    console.log(estagio, acao)

    switch (acao.type) {
        case "MUDOU_ESTAGIO":
            return estagio
        default:
            return estagio
    }
}

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
    const value = useReducer(quizReducer, initialState);
    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
};