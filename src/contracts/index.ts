export interface GraphiqlProps {
  variables?: any;
  fetchPolicy?: FETCH_POLICY;
  onCompleted?: (e: any) => void;
  notifyOnNetworkStatusChange?: boolean;
}

export enum ERROR_POLICY {
  ALL = "all",
  NONE = "none",
  IGNORE = "ignore",
}

export enum FETCH_POLICY {
  CACHE_FIRST = "cache-first",
  CACHE_ONLY = "cache-only",
  CACHE_AND_NETWORK = "cache-and-network",
  NETWORK_ONLY = "network-only",
  NO_CACHE = "no-cache",
  STANDBY = "standby",
}
