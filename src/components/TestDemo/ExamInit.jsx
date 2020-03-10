import React, { useEffect }  from 'react';
import {useQuery} from '@apollo/react-hooks';
import { gql } from 'apollo-boost'
import { useStoreState, useStoreActions } from 'easy-peasy';
import Result from './Result';
import TopBar from '../sections/TopBar1';
import Exam from './Exam';

const ExamInit = () => {
  const state = useStoreState(state => state);
  const setAnswer = useStoreActions(actions => actions.setAnswer);
  const setNextQuestion = useStoreActions(actions => actions.setNextQuestion);
  const setResults = useStoreActions(actions => actions.setResults);
  const init = useStoreActions(actions => actions.init);
  const {data, loading} = useQuery(gql`
  query{
      question(questionId:"5e6495240b3777b5ff8fface", examId:"5e6495240b3777b5ff8ffa35"){
        name
        id
        answers{
          name
          correct
        }
      }
    }
  `);
  useEffect(() => {
    init();
  }, []);

  const handleAnswerSelected = (event) =>{
    setAnswer(event.currentTarget.value);
  };

  const setNext = () => {
    if (state.questionId < state.questions.length) {
      setNextQuestion()
    } else {
      setTimeout(() => setResults(getResults()), 300);
    }
  };

  const getResults =() => {
    const answersCount = state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map(key => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);
    return answersCountKeys.filter(key => answersCount[key] === maxAnswerCount);
  };

  const renderExam =()=> {
    return (
      <Exam
        answer={state.answer}
        answerOptions={state.answerOptions}
        questionId={state.questionId}
        question={state.question}
        questionTotal={state.questions.length}
        onAnswerSelected={handleAnswerSelected}
        onNext={setNext}
      />
    );
  };

  const renderResult =()=> {
    return <Result quizResult={state.result} />;
  };

  return (
    <div>
      <div className="landing">
        <TopBar mode={'test'} />
      </div>
      {state.result ? renderResult() : renderExam()}
    </div>
  )
};

export default ExamInit