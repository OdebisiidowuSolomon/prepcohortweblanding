import { useLazyQuery } from "@apollo/client";

import { FETCH_POLICY, GraphiqlProps } from "../../contracts";
import { GET_SUBJECTS } from "../queries/subject";

const useGetSubjects = ({
  fetchPolicy = FETCH_POLICY.CACHE_FIRST,
  notifyOnNetworkStatusChange = true,
  ...restOfProps
}: GraphiqlProps) => {
  const [getSubjects, { ...restLazy }] = useLazyQuery(GET_SUBJECTS, {
    fetchPolicy,
    notifyOnNetworkStatusChange,
    ...restOfProps,
  });

  return { getSubjects, ...restLazy };
};

const SubjectService = { useGetSubjects };

export default SubjectService;
