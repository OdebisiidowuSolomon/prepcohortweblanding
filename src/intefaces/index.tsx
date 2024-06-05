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

export interface SearchEngineResult {
  providers: {
    providers: any[];
    total: number;
  };
  subjects: {
    subjects: any[];
    total: number;
  };
  topics: {
    topics: Topic[];
    total: number;
  };
  questionBank: {
    tests: QuestionBank[];
    total: number;
  };
}

export interface SubTopic {
  description: string;
  id: string | number;
  name: string;
}

export interface Topic {
  id: string;
  description: string;
  name: string;
  subTopics?: SubTopic[];
}

export interface Visibility {
  id: number;
  name: string;
  visibleTo: "ALL" | "TEACHER_ONLY" | "NOBODY";
}

export interface QuestionBank {
  id: string;
  name: string;
  noOfQuestions: number;
  description: string;
  headerInstruction?: string;
  isCancelable: boolean;
  isRealTest: boolean;
  isSearchable: boolean;
  isTestQuestionPool: boolean;
  isDeleted: boolean;
  isInUse: boolean;
  isCompleteSectionsValid: boolean;
  preventReview: boolean;
  retakeTimes: number;
  retakePolicy: string;
  status: string;
  testType: string;
  timeAlloted: number;
  provider: {
    title: string;
  };
}
