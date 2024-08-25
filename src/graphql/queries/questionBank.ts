import { gql } from "@apollo/client";

export const GET_QUESTION_BANKS = gql`
  query Tests($page: Int, $perPage: Int) {
    tests(page: $page, perPage: $perPage) {
      tests {
        id
        name
        timeAlloted
        retakeTimes
        isRealTest
        description
        noOfQuestions
        testType
        version
      }
      total
    }
  }
`;
