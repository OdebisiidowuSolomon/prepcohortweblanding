import { IProvider } from "./provider";
import { ITopic } from "./topic";

export interface ISyllabusSingleObj {
  description: string;
  examType: IExamTypeObj;
  examTypeId: number;
  id: number;
  isApproved: boolean;
  isUniversal: boolean;
  name: string;
  provider: IProvider;
  providerId: number;
  topics: ITopic[];
  topicsFlow: number[];
}

interface IExamTypeObj {
  description: string;
  id: number;
  name: string;
}
