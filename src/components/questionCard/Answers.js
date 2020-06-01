import React, {useContext} from 'react';
import Answer from './Answer';
import QuizContext from '../../context/QuizContext';
import './Answers.css'

function Answers() {
    const {state, dispatch} = useContext(QuizContext);
    const {currentAnswer, currentQuestion, questions} = state;
    const question = questions[currentQuestion];

    return (
        <div className='answers-container'>
            <Answer
                displayLetter='ก'
                letter="a"
                answer={question.answer_a}
                dispatch={dispatch}
                selected={currentAnswer === 'a'}
            />
            <Answer
                displayLetter='ข'
                letter="b"
                answer={question.answer_b}
                dispatch={dispatch}
                selected={currentAnswer === 'b'}
            />
            <Answer
                displayLetter='ค'
                letter="c"
                answer={question.answer_c}
                dispatch={dispatch}
                selected={currentAnswer === 'c'}
            />
            <Answer
                displayLetter='ง'
                letter="d"
                answer={question.answer_d}
                dispatch={dispatch}
                selected={currentAnswer === 'd'}
            />
        </div>
    );
}

export default Answers;
