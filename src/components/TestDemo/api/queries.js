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


export const QUERY_START_EXAM = gql`
  mutation StartExam($taker: String!) {
    startExamMutation(demoTaker:$taker, exam:"5e6aec2475087151616af99f"){
     id,
     type,
     demoTaker,
     exam
    }
  }
`;