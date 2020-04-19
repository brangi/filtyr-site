import React, { useEffect }  from 'react';
import {useQuery, useLazyQuery, useMutation} from '@apollo/react-hooks';
import { useStoreState, useStoreActions } from 'easy-peasy';
import Result from './Result';
import Instruction from './Instruction';
import TopBar from '../sections/TopBar1';
import QuestionStep from './QuestionStep';
import {cache} from './utils/cache'
import { useParams } from "react-router-dom";

import {QUERY_INIT, QUERY_QUESTION_EXAM, QUERY_START_EXAM } from './api/queries'
const Exam = () => {
  //ID exam parameter
  const { id } = useParams();
  //State and store
  const state = useStoreState(state => state);
  const setAnswer = useStoreActions(actions => actions.setAnswer);
  const setResults = useStoreActions(actions => actions.setResults);
  const init = useStoreActions(actions => actions.init);

  //For exam
  const setInitial = useStoreActions(actions => actions.setInitial);
  const setCurrentQuestion = useStoreActions(actions => actions.setCurrentQuestion);

  //Initial query
  const {data, error, loading:loadingStart} = useQuery(QUERY_INIT,{variables: {id}});
  console.log(error);
  //Get question query
  const [getQuestion, { data: dataQuestion }] = useLazyQuery(QUERY_QUESTION_EXAM);
  const [startExamMutation] = useMutation(QUERY_START_EXAM);

  useEffect(() => { // Deprecate eventually
    init();
  }, [init]);

  //Update state with startData
  if(!loadingStart) setInitial(data);
  //Update state with current question
  if(dataQuestion) setCurrentQuestion(dataQuestion);

  //console.log(state);
  const setNext = () => {
    if (state.page < state.questionTotal) {
      getQuestion({ variables: { number: state.next, total: state.questionTotal } });
    } else {
      setTimeout(() => setResults("Result coming..."), 300);
    }
  };

  const startExam = async() => {
    const { data: {startExamMutation: result} }  = await startExamMutation({ variables: { taker: "localhost" } });
    //TODO use exmID from states instead
    cache(result.exam, result.id, 'start-exam');
    //const dat = await fetch('http://api.ipify.org/?format=json');
    //const participantIpAddress = await dat.json();
    getQuestion({ variables: { number: 1, total: state.questionTotal } });
  };

  const renderExam =()=> {
    return (
     <QuestionStep
        answerOptions={state.currentAnswers}
        answerSelected={state.answerSelected}
        questionId={state.currentQuestionId}
        question={state.currentQuestion}
        questionTotal={state.questionTotal}
        questionNumber={state.page}
        onAnswerSelected={setAnswer}
        onNext={setNext}
      />
    );
  };

  const renderResult =()=> {
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
          if(!cache(data.exam.id, undefined, 'check-exam')){
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

export default Exam