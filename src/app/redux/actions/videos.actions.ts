import { createAction, props } from '@ngrx/store';
import { ICustomCard } from '../state.models';

export const searchVideos = createAction('[videoStore] fetch videos');
export const addCard = createAction(
  '[videoStore] addCard',
  props<ICustomCard>(),
);
