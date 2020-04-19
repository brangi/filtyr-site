import { gql } from 'apollo-boost'

// startExamDemo
export const QUERY_START = gql`
  query{
    exam(id:"5e6aec2475087151616af99f"){
      id
      title,
        description
      questions{
        id
      }
    }
  }`;

// getQuestion
export const QUERY_QUESTION_EXAM = gql`
  query Question($number: Int!, $total: Int!){
    getQuestion(questionNum:$number, examId:"5e6aec2475087151616af99f", total: $total){
      name
      id
      answers{
        name
        id
      }
      page
      prev
      next
    }
  }`;


export const START_EXAM = gql`
  mutation StartExam($taker: String!) {
    startExamMutation(demoTaker:$taker, exam:"5e6aec2475087151616af99f"){
     id,
     type,
     demoTaker,
     exam
    }
  }
`;