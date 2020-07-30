import React from "react";
import { QuizData } from '../../data/QuizData/QuizData'
import Quizes from '../Quizes/Quizes';

const Practice = props => {
  const { match } = props;
  let { handle } = match.params;

  let data = QuizData.filter(d => d.subject === handle)

  if (data.length === 0) {
    return <div>no practice for this subject yet</div>
  }
  return (
    <Quizes data={data}/>
  );
}

export default Practice;
