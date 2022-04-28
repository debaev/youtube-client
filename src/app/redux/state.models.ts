import { ISearchItem } from '../youtube/models/search-item.model';

export interface ICustomCard {
  title: string;
  description: string;
  imageLink: string;
  videoLink: string;
  createdDate: string;
}

export interface IVideoState {
  youtubeResponse: ISearchItem[];
  customCard?: ICustomCard[];
}

export const initialVideoState: IVideoState = {
  youtubeResponse: [],
};
