import React from "react";
import { QuizData } from './QuizData'
import Quizes from './Quizes';

const Practice = props => {
  const { match } = props;
  let { handle } = match.params;
  // console.log('match', match)
  // console.log('quizData', QuizData)

  let data = QuizData.filter(d => d.subject === handle)


  return (
    <div className="col-md-8 offset-md-2">
      <Quizes data={data}/>
    </div>
  );
}

export default Practice;
