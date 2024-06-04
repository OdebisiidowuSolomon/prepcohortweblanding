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

export enum SEARCH_CATEGORIES {
  COURSES = "Courses",
  INSTITUTION = "Institutions",
  TOPICS = "Topics",
  LESSONS = "Lessons",
  QUESTION_BANK = "Question Banks",
}

export enum SearchItemType {
  LESSONS = "LESSONS",
  PROVIDERS = "PROVIDERS",
  SUBJECTS = "SUBJECTS",
  TOPICS = "TOPICS",
  QUESTION_BANK = "QUESTION_BANK",
}

export interface SearchInputType {
  page: number;
  perPage: number;
  searchItems: SearchItemType[];
  searchTerm: string;
  sortBy?: string;
  sortIn?: string;
}
