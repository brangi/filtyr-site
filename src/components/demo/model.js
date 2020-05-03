import { action } from 'easy-peasy';
const model = {

  //For Exam
  exam: '',
  examResultId: '',
  description: '',
  questionTotal: 0,
  currentQuestion: '',
  currentAnswers: [],
  currentQuestionId: '',
  answerSelected: '',
  page: 0,
  prev: 0,
  next: 0,

  setAnswer: action((state, event) => {
    const answer = event.currentTarget.value;
    state.answerSelected = answer;
  }),
  setResults: action((state, result) => {
    state.result = result;
  }),
  setExamResult: action((state, result) => {
    state.examResultId = result.id;
  }),
  setInitial: action((state, data) => {
    state.exam = data.exam.id;
    state.description  = data.exam.description;
    state.questionTotal  = data.exam.questions.length
  }),
  setNextQuestion: action((state, data) => {
    state.exam = data.getQuestion.exam;
    state.answerSelected = '';
    state.currentQuestionId  = data.getQuestion.id;
    state.currentQuestion  = data.getQuestion.name;
    state.currentAnswers  = data.getQuestion.answers;
    state.page  = data.getQuestion.page;
    state.prev  = data.getQuestion.prev;
    state.next  = data.getQuestion.next;
  }),
};


export default model;
