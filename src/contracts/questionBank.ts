import { IProvider } from "./provider";
import { ISyllabusSingleObj } from "./syllabus";

// export interface IQuestionBankObj {
export interface ITestObj {
  completeSections: JSON;
  description: string;
  examPeriod: string;
  generateLabel: boolean;
  headerInstruction: string;
  hideGroupInfo: boolean;
  hideOwnerInfo: boolean;
  id: number;
  isCancelable: boolean;
  isCompleteSectionsValid: boolean;
  isDeleted: boolean;
  isInUse: boolean;
  isPublic: boolean;
  isPublished: boolean;
  isRealTest: boolean;
  isSearchable: boolean;
  isTestQuestionPool: boolean;
  name: string;
  noOfQuestions: number;
  preventReview: boolean;
  provider: IProvider;
  region: string;
  retakePolicy: string;
  retakeTimes: number;
  shuffleQuestions: boolean;
  status: string;
  syllabus: ISyllabusSingleObj;
  syllabusId: number;
  testType: string;
  timeAlloted: number;
  version: string;
}
