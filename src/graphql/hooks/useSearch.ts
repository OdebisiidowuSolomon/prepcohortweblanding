import {
  useQuery,
  useLazyQuery,
  FetchPolicy,
  QueryResult,
} from "@apollo/client";
import { SEARCH_ENGINE } from "../../graphql/queries/search";
import { ERROR_POLICY, FETCH_POLICY, GraphiqlProps } from "../../intefaces";
import SearchFilterBuilder from "../../libs/search-engine-filter";

const useSearchService = ({
  fetchPolicy = FETCH_POLICY.CACHE_AND_NETWORK,
  notifyOnNetworkStatusChange = true,
  ...restOfProps
}: GraphiqlProps) => {
  const searchFilter = SearchFilterBuilder.getInstance();

  const { ...rest } = useQuery(SEARCH_ENGINE, {
    fetchPolicy,
    notifyOnNetworkStatusChange,
    ...restOfProps,
  });

  const useSearch = { ...rest };

  const [get, { ...lazyRest }] = useLazyQuery(SEARCH_ENGINE, {
    fetchPolicy,
    notifyOnNetworkStatusChange,
    ...restOfProps,
  });

  const useLazySearch = { get, ...lazyRest };

  const runSearch = async (customVariables: any) => {
    const searchParams = searchFilter.build();

    const res = await get({
      variables: { ...searchParams, ...customVariables },
      errorPolicy: ERROR_POLICY.ALL,
    });

    return res;

    // console.log(res.error);

    // if (res && res.data && !res.loading && !res.error) {
    //   searchResult(res.data.searchEngine);
    //   return res.data.searchEngine;
    // }
  };

  return {
    useSearch,
    useLazySearch,
    runSearch,
  };
};

export const useSearchEngine = ({
  fetchPolicy = FETCH_POLICY.CACHE_AND_NETWORK,
  notifyOnNetworkStatusChange = true,
  ...restOfProps
}: GraphiqlProps) => {
  const [getSearchEngine, { ...lazyRest }] = useLazyQuery(SEARCH_ENGINE, {
    fetchPolicy,
    notifyOnNetworkStatusChange,
    ...restOfProps,
  });

  return {
    getSearchEngine,
    ...lazyRest,
  };
};

export default useSearchService;
