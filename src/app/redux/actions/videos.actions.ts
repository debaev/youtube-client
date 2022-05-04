import { ISearchItem } from 'src/app/youtube/models/search-item.model';
import { createAction, props } from '@ngrx/store';
import { ICustomCard } from '../state.models';

export const searchVideos = createAction(
  '[videoStore] fetch videos',
  props<{ loadedVideo: ISearchItem[] }>(),
);
export const addCard = createAction(
  '[videoStore] addCard',
  // eslint-disable-next-line ngrx/prefer-inline-action-props
  props<ICustomCard>(),
);
