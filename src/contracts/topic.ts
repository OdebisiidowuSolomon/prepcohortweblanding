export interface ISubTopic {
  description: string;
  id: string | number;
  name: string;
}

export interface ITopic {
  id: string;
  description: string;
  name: string;
  subTopics?: ISubTopic[];
}
