import { action, createStore, useStoreActions } from 'easy-peasy';
import questions from './questions';

const shuffleArray = (array) =>{
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};

const model = {
  questions,
  counter: 0,
  questionId: 1,
  question: '',
  answerOptions: [],
  answer: '',
  answersCount: {},
  result: '',
  setAnswer: action((state, answer) => {
    state.answersCount = {
      ...state.answersCount,
      [answer]: (state.answersCount[answer] || 0) + 1
    };
    state.answer = answer;
  }),
  setNextQuestion: action((state) => {
    const counter = state.counter + 1;
    const questionId = state.questionId + 1;
    state.counter = counter;
    state.questionId = questionId;
    state.question = state.questions[counter].question;
    state.answerOptions = state.questions[counter].answers;
    state.answer = '';
  }),
  init: action((state) => {
    const shuffledAnswerOptions = state.questions.map(question =>
      shuffleArray(question.answers)
    );
    state.question = state.questions[0].question;
    state.answerOptions  = shuffledAnswerOptions[0];
  }),
  setResults: action((state, result) => {
    if (result.length === 1) {
      state.result = result[0];
    } else {
      state.result = 'Undetermined';
    }
  })
};


export default model;
