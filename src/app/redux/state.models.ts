import { ISearchItem } from '../youtube/models/search-item.model';

export interface ICustomCard {
  title: string;
  description?: string;
  imgLink: string;
  videoLink: string;
  date: string;
}
export const VIDEOSTATE_KEY = 'videoState';

export interface IVideoState {
  youtubeResponse: ISearchItem[];
  customCard?: ICustomCard [];
}

export const initialVideoState: IVideoState = {
  youtubeResponse: [],
  customCard: [],
};
