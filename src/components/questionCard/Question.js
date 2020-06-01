import React, {useContext} from 'react';
import QuizContext from '../../context/QuizContext';

function Question() {
    const {state} = useContext(QuizContext);
    const {currentQuestion, questions} = state;
    const question = questions[currentQuestion];
    return <h3>{question.question}</h3>;
}

export default Question;
