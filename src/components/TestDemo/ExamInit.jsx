import React, { useEffect }  from 'react';
import useForceUpdate from 'use-force-update';
import {useQuery, useLazyQuery} from '@apollo/react-hooks';
import { gql } from 'apollo-boost'
import { useStoreState, useStoreActions } from 'easy-peasy';
import Result from './Result';
import Instruction from './Instruction';
import TopBar from '../sections/TopBar1';
import Exam from './Exam';
import {QUERY_START} from './api/queries'
const ExamInit = () => {

  //Force update helper
  const forceUpdate = useForceUpdate();
  //State and store
  const state = useStoreState(state => state);
  const setAnswer = useStoreActions(actions => actions.setAnswer);
  const setNextQuestion = useStoreActions(actions => actions.setNextQuestion);
  const setResults = useStoreActions(actions => actions.setResults);
  const init = useStoreActions(actions => actions.init);

  //For exam
  const setInitial = useStoreActions(actions => actions.setInitial);

  //Initial query
  const {data} = useQuery(QUERY_START);

  //Page questions

  console.log(state)
  useEffect(() => {
    init();
  }, [init]);

  const setNext = () => {
    if (state.questionId < state.questions.length) {
      setNextQuestion()
    } else {
      setTimeout(() => setResults(getResults()), 300);
    }
  };

  const startExam = () => {
    localStorage.setItem('start-exam', true);
    setInitial(data);
    //forceUpdate(); // Should not probably do this but it's for demo
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
        onAnswerSelected={setAnswer}
        onNext={setNext}
      />
    );
  };

  const renderResult =()=> {
    localStorage.removeItem('start-exam');
    return <Result quizResult={state.result} />;
  };

  const renderInstruction =()=> {
    //Eventually should render description from api -> state.description
    return <Instruction
      initExam={startExam}
      description={data.exam.description} />;
  };

  return (
    <div>
      <div className="landing">
        <TopBar mode={'test'} />
      </div>
      {(function() {
        if(data){
          if(!localStorage.getItem('start-exam')){
            return renderInstruction()
          }
          if (!state.result) {
            return renderExam()
          }
          if (state.result) {
            return renderResult()
          }
        }
      })()}}
    </div>
  )
};

export default ExamInit