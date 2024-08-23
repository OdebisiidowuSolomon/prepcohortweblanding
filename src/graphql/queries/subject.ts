import { gql } from "@apollo/client";

export const GET_SUBJECTS = gql`
  query Subjects($page: Int, $perPage: Int) {
    subjects(page: $page, perPage: $perPage) {
      subjects {
        description
        examType {
          description
          id
          name
        }
        examTypeId
        extraParams {
          countOfRatings
          sumOfRatings
        }
        id
        isPublic
        name
        oneOnOneMeetingFee
        prices {
          amount
          courseDiscount {
            couponCode
            description
            expiryDate
            percentage
            subjectPriceId
            title
          }
          description
          id
          isActive
          isRecommended
          numOfDuration
          typeOfDuration
        }
        provider {
          id
          title
        }
        providerId
        subjectStructure
        syllabusId
        topics {
          id
          description
        }
        updatedAt
      }
      total
    }
  }
`;
