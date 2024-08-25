import { useLazyQuery } from "@apollo/client";
import { FETCH_POLICY, GraphiqlProps } from "../../contracts";
import { GET_QUESTION_BANKS } from "../queries/questionBank";

const useGetQuestionBanks = ({
  fetchPolicy = FETCH_POLICY.CACHE_FIRST,
  notifyOnNetworkStatusChange = true,
  ...restOfProps
}: GraphiqlProps) => {
  const [getQuestionBanks, { ...restLazy }] = useLazyQuery(GET_QUESTION_BANKS, {
    fetchPolicy,
    notifyOnNetworkStatusChange,
    ...restOfProps,
  });

  return { getQuestionBanks, ...restLazy };
};

const QuestionBankService = { useGetQuestionBanks };

export default QuestionBankService;
