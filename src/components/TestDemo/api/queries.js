import { gql } from 'apollo-boost'

// startExamDemo
export const QUERY_START = gql`
  query{
    exam(id:"5e6495240b3777b5ff8ffa35"){
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
    getQuestion(questionNum:$number, examId:"5e6495240b3777b5ff8ffa35", total: $total){
      name
      id
      answers{
        name
        id
      }
      prev
      next
    }
  }`;