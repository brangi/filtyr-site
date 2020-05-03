import { gql } from 'apollo-boost'

export const QUERY_INIT = gql`
  query Exam($id: ID!){
    exam(id:$id){
      id
      title,
      description
      questions{
        id
      }
    }
  }`;

export const QUERY_QUESTION_EXAM = gql`
  query Question($number: Int!, $total: Int!, $exam: ID!){
    getQuestion(questionNum:$number, examId: $exam, total: $total){
      name
      id
      answers{
        name
        id
      }
      page
      prev
      next
      exam
    }
  }`;


export const QUERY_RESUME_EXAM = gql`
  query ResumeExam($examResultId: ID!){
    getExamResult(examResultId: $examResultId ){
       id,
       demoTaker,
       exam
       lastAnsweredNoQuestion
       totalQuestions
     }
  }`;

export const MUTATION_START_EXAM = gql`
  mutation StartExam($taker: String!, $id: ID!) {
    startExamMutation(demoTaker:$taker, exam:$id ){
     id,
     type,
     demoTaker,
     exam
    }
  }
`;

export const MUTATION_ANSWER_QUESTION = gql`
  mutation AnswerQuestion($examResultId: ID!, $questionId: ID!, $answerId: ID!) {
    answerQuestion(
       examResultId: $examResultId , question :$questionId, answer: $answerId){
        id,
        type,
        demoTaker,
        exam
    }
  }
`;