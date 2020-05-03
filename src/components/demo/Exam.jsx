import React, { useEffect }  from 'react';
import {useQuery, useLazyQuery, useMutation} from '@apollo/react-hooks';
import { useStoreState, useStoreActions } from 'easy-peasy';
import Result from './Result';
import Instruction from './Instruction';
import TopBar from '../sections/TopBar1';
import QuestionStep from './QuestionStep';
import {cache} from './utils/cache'
import { useParams } from "react-router-dom";
import {
  QUERY_INIT,
  QUERY_QUESTION_EXAM,
  MUTATION_START_EXAM,
  MUTATION_ANSWER_QUESTION,
  QUERY_RESUME_EXAM
} from './api/queries'

const Exam = () => {
  //ID exam parameter
  const { id } = useParams();

  //State and store
  const state = useStoreState(state => state);
  const setAnswer = useStoreActions(actions => actions.setAnswer);
  const setResults = useStoreActions(actions => actions.setResults);

  //For exam
  const setInitial = useStoreActions(actions => actions.setInitial);
  const setNextQuestion = useStoreActions(actions => actions.setNextQuestion);
  const setExamResult = useStoreActions(actions => actions.setExamResult);

  //Initial query
  const {data, loading:loadingStart} = useQuery(QUERY_INIT,{variables: {id}});

  //Get question query
  let [getQuestion, { data: dataQuestion }] = useLazyQuery(QUERY_QUESTION_EXAM ,{
    onCompleted: data => {
      if(data) {
        //Update state with current question
        setNextQuestion(dataQuestion);
      }
    }
  });

  //Get resume query
  // eslint-disable-next-line
  let [getExamResult, { data: dataResume }] = useLazyQuery(QUERY_RESUME_EXAM ,{
    onCompleted: data => {
      if(data) {
        setExamResult(data);
        getQuestion({ variables:
            { number: data.getExamResult.lastAnsweredNoQuestion + 1,
              exam: state.exam,
              total: data.getExamResult.totalQuestions }
        });
      }
    }
  });

  //start exam mutation
  const [startExamMutation] = useMutation(MUTATION_START_EXAM);
  //answer question mutation
  const [answerQuestion] = useMutation(MUTATION_ANSWER_QUESTION);


  //Look for cache on load/reload and resume exam progress
  useEffect( () => {
    const cacheData = cache(id, null , 'get-exam');
    if(!cacheData) return;
    getExamResult({variables : {examResultId: cacheData[0].examResultId } })
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  console.log(state);
  //Update state with startData
  if(!loadingStart) setInitial(data);
  const setNext = async () => {
    await answerQuestion({variables :{examResultId: state.examResultId, questionId: state.currentQuestionId, answerId: state.answerSelected }});
    if (state.page < state.questionTotal) {
      getQuestion({ variables: { number: state.next, exam: state.exam, total: state.questionTotal } });
    } else {
      setTimeout(() => setResults("Result coming..."), 300);
    }
  };

  const startExam = async() => {
    const { data: {startExamMutation: result} }  = await startExamMutation({ variables: { taker: "localhost", id: state.exam } });
    setExamResult(result);
    cache(result.exam, result.id, 'start-exam');
    //const dat = await fetch('http://api.ipify.org/?format=json');
    //const participantIpAddress = await dat.json();
    getQuestion({ variables: { number: 1, exam: state.exam, total: state.questionTotal } });
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
            cache(data.exam.id, undefined, 'clear-exam');
            return renderResult()
          }
        }
      })()}
    </div>
  )
};

export default Exam