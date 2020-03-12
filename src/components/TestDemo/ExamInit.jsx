import React, { useEffect }  from 'react';
// import useForceUpdate from 'use-force-update';
import {useQuery, useLazyQuery} from '@apollo/react-hooks';
import { useStoreState, useStoreActions } from 'easy-peasy';
import Result from './Result';
import Instruction from './Instruction';
import TopBar from '../sections/TopBar1';
import Exam from './Exam';
import {QUERY_START, QUERY_QUESTION_EXAM} from './api/queries'
const ExamInit = () => {

  //Force update helper
  //const forceUpdate = useForceUpdate();
  //State and store
  const state = useStoreState(state => state);
  const setAnswer = useStoreActions(actions => actions.setAnswer);
  const setNextQuestion = useStoreActions(actions => actions.setNextQuestion);
  const setResults = useStoreActions(actions => actions.setResults);
  const init = useStoreActions(actions => actions.init);

  //For exam
  const setInitial = useStoreActions(actions => actions.setInitial);
  const setCurrentQuestion = useStoreActions(actions => actions.setCurrentQuestion);

  //Initial query
  const {data, loading:loadingStart} = useQuery(QUERY_START);
  //Get question query
  const [getQuestion, { data: dataQuestion, loading:loadingQuestion }] = useLazyQuery(QUERY_QUESTION_EXAM);

  //Page questions
  //console.log(dataQuestion);
  //console.log(state);

  useEffect(() => { // Deprecate eventually
    init();
  }, [init]);

  //Update state with startData
  if(!loadingStart) setInitial(data);
  //Update state with current question
  if(dataQuestion) setCurrentQuestion(dataQuestion);

  console.log(state);
  const setNext = () => {
    getQuestion({ variables: { number: state.next, total: state.questionTotal } });
    if (state.questionId < state.questions.length) {
      setNextQuestion()
    } else {
      setTimeout(() => setResults(getResults()), 300);
    }
  };

  const startExam = async () => {
    localStorage.setItem('start-exam', true);
    getQuestion({ variables: { number: 1, total: state.questionTotal } });
    // forceUpdate(); // Should not probably do this but it's for demo
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
    localStorage.removeItem('start-exam'); //work around but could change
    return <Result quizResult={state.result} />;
  };

  const renderInstruction =()=> {
    return <Instruction initExam={startExam} description={state.description} />;
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
      })()}
    </div>
  )
};

export default ExamInit