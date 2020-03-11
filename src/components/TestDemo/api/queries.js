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

export const queryQuestion = () => true;