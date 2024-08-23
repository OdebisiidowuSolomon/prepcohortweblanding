import { IProvider } from "./provider";
import { ITopic } from "./topic";

export interface ISubject {
  id: string;
  name: string;
  description: string;
  subjectStructure: string;
  syllabusId: number;
  oneOnOneMeetingFee: string;
  extraParams: ISubjectExtraParams;
}

export interface ISubjectExtraParams {
  countOfRatings: number;
  sumOfRatings: number;
}

export interface ISubjectFull extends ISubject {
  provider: IProvider;
  providerId: number;
  topics: ITopic[];
  prices: ISubjectPriceObj[];
  // provider: BaseProvider;
}

export interface ISubjectPriceObj {
  amount: number;
  courseDiscount: ICourseDiscountObj;
  description: string;
  id: number;
  isActive: boolean;
  numOfDuration: number;
  typeOfDuration: string;
}

export interface ICourseDiscountObj {
  couponCode: string;
  description: string;
  expiryDate: string;
  percentage: number;
  subjectPriceId: number;
  title: string;
}
